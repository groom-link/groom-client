import { ChangeEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import {
  Dialog,
  ImageUploadInput,
  SegmentTab,
  Stepper,
  TextArea,
  TextInput,
  TopNavBar
} from '../../../components/molecules';
import ButtonFooter from '../../../components/molecules/ButtonFooter';
import { useRoomIdParams } from '../../../hooks';
import useGetMyInformation from '../../../hooks/api/auth/getMyInformation';
import useDeleteRoom from '../../../hooks/api/room/deleteRoom';
import useExitRoom from '../../../hooks/api/room/exitRoom';
import useGetDetailWithRoomId from '../../../hooks/api/room/getDetailWithRoomId';
import usePatchRoom from '../../../hooks/api/room/patchRoom';
import useDeleteFile from '../../../hooks/api/upload/deleteFile';
import useGetFile from '../../../hooks/api/upload/getFile';
import usePostFile from '../../../hooks/api/upload/postFile';
import colors from '../../../styles/colors';
import { semiBold16 } from '../../../styles/typography';
import readFileAsURL from '../../../utils/readFileAsURL';
import showToastMessage from '../../../utils/showToastMessage';

const Background = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  padding-bottom: 84px;
  background-color: ${colors.grayScale.gray01};
`;

const TabContainer = styled.div`
  padding: 12px 20px;
  background-color: ${colors.grayScale.white};
`;

const WhiteBox = styled.div`
  padding: 20px;
  background-color: ${colors.grayScale.white};

  &:not(:nth-of-type(6)) {
    margin-bottom: 16px;
  }
`;

const TextAreaStyled = styled(TextArea)`
  margin-top: 20px;
`;

// TODO: Button 컴포넌트 안에 통합하기.
const ExitButton = styled.button`
  ${semiBold16};
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid ${colors.etcColor.alertRed};
  color: ${colors.etcColor.alertRed};
  background-color: ${colors.grayScale.white};
`;

const DeleteButton = styled.button`
  ${semiBold16};
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  border-radius: 12px;
  color: ${colors.grayScale.white};
  background-color: ${colors.etcColor.alertRed};
`;

const Information = () => {
  const router = useRouter();
  const roomId = useRoomIdParams();
  const [isOwner, setIsOwner] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [meetingTitle, setMeetingTitle] = useState('');
  const [meetingDescription, setMeetingDescription] = useState('');
  const [maxPeople, setMaxPeople] = useState(0);
  const [tagList, setTagList] = useState<string[]>([]);
  const [isDeleteConfirmModalOpen, setIsDeleteConfirmModalOpen] =
    useState(false);
  const [isExitConfirmModalOpen, setIsExitConfirmModalOpen] = useState(false);
  const {
    data: roomDetail,
    isLoading: isRoomDetailLoading,
    isError: isRoomDetailError
  } = useGetDetailWithRoomId(roomId);
  const {
    data: myInformation,
    isLoading: isMyInformationLoading,
    isError: isMyInformationError
  } = useGetMyInformation();
  const { mutate: exitRoom } = useExitRoom();
  const { mutate: patchRoom } = usePatchRoom();
  const { mutate: deleteRoom } = useDeleteRoom();
  const { data: profileImageFile } = useGetFile(roomDetail?.mainImageUrl);
  const { mutate: deleteFile } = useDeleteFile();
  const { mutate: postFile, isLoading: isFileUploading } = usePostFile();

  useEffect(() => {
    if (isDeleted) return;
    if (!profileImageFile) return;
    readFileAsURL(profileImageFile, (url) => {
      setProfileImage(url);
    });
  }, [profileImageFile, isDeleted]);

  useEffect(() => {
    if (!roomDetail?.ownerId || !myInformation?.id) return;
    if (roomDetail.ownerId === myInformation.id) {
      setIsOwner(true);
      return;
    }
    setIsOwner(false);
  }, [roomDetail, myInformation]);

  useEffect(() => {
    if (!roomDetail) return;
    const { name, description, maxPeopleNumber } = roomDetail;
    setMeetingTitle(name);
    setMeetingDescription(description);
    setTagList(tagList);
    setMaxPeople(maxPeopleNumber);
  }, [roomDetail, tagList]);

  const handleDeleteImage = () => {
    setProfileImage('');
    setIsDeleted(true);
  };

  const handleChangeImageUpload: ChangeEventHandler<HTMLInputElement> = async ({
    target: { files }
  }) => {
    if (!files) return;
    const file = files[0];
    readFileAsURL(file, (url) => setProfileImage(url));
    setOriginalFile(file);

    // const accessURL = v4();
    // const pathReference = ref(storage, accessURL);
    // try {
    //   await uploadBytes(pathReference, file);
    // } catch (error) {
    //   alert(error);
    // }
    // const profileImageURL = await getDownloadURL(pathReference);
    // setProfileImage(profileImageURL);
  };

  const handleMeetingTitleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => setMeetingTitle(value);

  const handleMeetingDescriptionChange: ChangeEventHandler<
    HTMLTextAreaElement
  > = ({ target: { value } }) => setMeetingDescription(value);

  const handleAddTag = (text: string) => {
    const preExists = tagList.includes(text);
    if (preExists) return;
    setTagList([...tagList, text]);
  };

  const deleteTag = (index: number) => {
    setTagList((pre) => {
      const deforeTarget = pre.slice(0, index);
      const afterTarget = pre.slice(index + 1);
      return [...deforeTarget, ...afterTarget];
    });
  };

  const handleClickCloseMeeting = () => setIsDeleteConfirmModalOpen(true);

  const handleMeetingInformationSubmit = () => {
    if (!roomDetail) return;
    if (originalFile) {
      const formData = new FormData();
      formData.append('file', originalFile, originalFile.name);
      postFile(formData, {
        onSuccess: (data) => {
          deleteFile(roomDetail.mainImageUrl);
          const body = {
            id: roomId,
            name: meetingTitle,
            mainImageUrl: data,
            description: meetingDescription,
            maxPeople
          };
          patchRoom(body, {
            onSuccess: () => {
              router.push(`/group?roomId=${roomId}`);
              showToastMessage('모임 정보가 수정되었습니다.', 'success');
            }
          });
        },
        onError: (error) => alert(error)
      });
      return;
    }
    deleteFile(roomDetail.mainImageUrl, {
      onSuccess: () => {
        const body = {
          id: roomId,
          name: meetingTitle,
          mainImageUrl: '',
          description: meetingDescription,
          maxPeople
        };
        patchRoom(body, {
          onSuccess: () => {
            router.push(`/group?roomId=${roomId}`);
            showToastMessage('모임 정보가 수정되었습니다.', 'success');
          }
        });
      }
    });
  };

  const handleDeleteModalClose = () => setIsDeleteConfirmModalOpen(false);

  const closeRoom = () => {
    if (!roomDetail) return;
    deleteFile(roomDetail?.mainImageUrl, {
      onSuccess: () => {
        deleteRoom(roomId, {
          onSuccess: () => {
            router.push('/home');
            showToastMessage('모임이 삭제되었습니다.', 'success');
          }
        });
      }
    });
  };

  const handleBackButtonClick = () => router.push(`/group?roomId=${roomId}`);

  const handleExitButtonClick = () => setIsExitConfirmModalOpen(true);

  const handleDeleteButtonClick = () => setIsDeleteConfirmModalOpen(true);

  const isSumbitDisabled = !meetingTitle || !meetingDescription || !maxPeople;

  if (isRoomDetailLoading) return <div>그룹 정보 로딩중</div>;
  if (isRoomDetailError) return <div>그룹 정보 에러</div>;
  if (roomDetail === undefined) return <div>그룹 정보 없음</div>;
  if (isMyInformationLoading) return <div>내 정보 로딩중</div>;
  if (isMyInformationError) return <div>내 정보 에러</div>;
  if (myInformation === undefined) return <div>내 정보 없음</div>;

  return (
    <>
      <Background>
        <TopNavBar setting={false} onBackButtonClick={handleBackButtonClick} />
        <TabContainer>
          <SegmentTab
            leftTabLabel="모임 정보"
            rightTabLabel="구성원 관리"
            leftTabHref=""
            rightTabHref={`./member?roomId=${roomId}`}
            selectedTabIndex={0}
          />
        </TabContainer>
        <ImageUploadInput
          disabled={!isOwner}
          profileImage={profileImage}
          onClickDeleteImage={handleDeleteImage}
          onChangeImageFile={handleChangeImageUpload}
        />
        <WhiteBox>
          <TextInput
            disabled={!isOwner}
            value={meetingTitle}
            onChange={handleMeetingTitleChange}
            label="모임 이름"
            placeholder="모임 이름을 입력해주세요."
          />
          <TextAreaStyled
            disabled={!isOwner}
            value={meetingDescription}
            onChange={handleMeetingDescriptionChange}
            label="모임 내용"
            placeholder="예시) 저희는 oo을 하는 모임입니다."
          />
        </WhiteBox>
        {/* <WhiteBox>
          <TagInput
            label="태그"
            tagList={tagList}
            placeholder="태그를 입력해주세요."
            addTag={handleAddTag}
            deleteTag={deleteTag}
          />
        </WhiteBox> */}
        {/* TODO: 태그 기능 추가하기 */}
        <WhiteBox>
          <Stepper
            label="모임 구성원 수"
            value={maxPeople}
            onDecrease={() => setMaxPeople((pre) => (pre ? pre - 1 : pre))}
            onIncrease={() => setMaxPeople((pre) => pre + 1)}
            color="navy"
            decreaseDisabled={!isOwner}
            increaseDisabled={!isOwner}
          />
        </WhiteBox>
        <WhiteBox>
          {!isOwner && (
            <ExitButton onClick={handleExitButtonClick}>모임 나가기</ExitButton>
          )}
          {isOwner && (
            <DeleteButton onClick={handleDeleteButtonClick}>
              모임 끝내기
            </DeleteButton>
          )}
        </WhiteBox>
        <ButtonFooter
          disabled={isSumbitDisabled || !isOwner}
          onClick={handleMeetingInformationSubmit}
        >
          모임 정보 수정하기
        </ButtonFooter>
      </Background>
      <Dialog
        isOpen={isDeleteConfirmModalOpen}
        title="정말 모임을 끝내시겠어요?"
        description="모든 팀원들은 모임에서 나가게 되며, 취소할 수 없습니다."
        buttonType="two"
        grayButtonText="네, 끝낼게요"
        purpleButtonText="아니요"
        onGrayButtonClick={closeRoom}
        onPurpleButtonClick={handleDeleteModalClose}
        isGrayButtonDisabled={false}
        isPurpleButtonDisabled={false}
        illustrationURL="/illustrations/Warning.png"
      />
      <Dialog
        isOpen={isExitConfirmModalOpen}
        illustrationURL="/illustrations/Warning.png"
        title="정말 모임을 나가시겠어요?"
        purpleButtonText="아니요"
        isGrayButtonDisabled={false}
        isPurpleButtonDisabled={false}
        description="모임에서 나가면 다시 초대코드를 받아야 해요."
        buttonType="two"
        grayButtonText="네, 나갈게요"
        onPurpleButtonClick={() => setIsExitConfirmModalOpen(false)}
        onGrayButtonClick={() =>
          exitRoom(
            { roomId },
            {
              onSuccess: () => {
                router.push('/home');
                showToastMessage('모임에서 나갔습니다.', 'success');
              }
            }
          )
        }
      />
    </>
  );
};
export default Information;
