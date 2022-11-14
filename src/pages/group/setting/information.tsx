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
import useDeleteRoom from '../../../hooks/api/room/deleteRoom';
import useExitRoom from '../../../hooks/api/room/exitRoom';
import useGetDetailWithRoomId from '../../../hooks/api/room/getDetailWithRoomId';
import usePatchRoom from '../../../hooks/api/room/patchRoom';
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
  const [profileImage, setProfileImage] = useState('');
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
  const { mutate: exitRoom } = useExitRoom();
  const { mutate: patchRoom } = usePatchRoom();
  const { mutate: deleteRoom } = useDeleteRoom();

  useEffect(() => {
    if (!roomDetail) return;
    const { name, description, mainImageUrl, maxPeopleNumber } = roomDetail;
    setProfileImage(mainImageUrl);
    setMeetingTitle(name);
    setMeetingDescription(description);
    setTagList(tagList);
    setMaxPeople(maxPeopleNumber);
  }, [roomDetail]);

  const handleDeleteImage = () => setProfileImage('');

  const handleChangeImageUpload: ChangeEventHandler<HTMLInputElement> = ({
    target: { files }
  }) => {
    if (!files) return;
    readFileAsURL(files[0], setProfileImage);
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
    const body = {
      id: roomId,
      name: meetingTitle,
      mainImageUrl: profileImage,
      description: meetingDescription,
      maxPeople
    };
    patchRoom(body, {
      onSuccess: () => {
        router.push(`/group?roomId=${roomId}`);
        showToastMessage('모임 정보가 수정되었습니다.', 'success');
      }
    });
  };

  const handleDeleteModalClose = () => setIsDeleteConfirmModalOpen(false);

  const closeRoom = () =>
    deleteRoom(roomId, {
      onSuccess: () => {
        router.push('/home');
        showToastMessage('모임이 삭제되었습니다.', 'success');
      }
    });

  const handleBackButtonClick = () => router.push(`/group?roomId=${roomId}`);

  const handleExitButtonClick = () => setIsExitConfirmModalOpen(true);

  const handleDeleteButtonClick = () => setIsDeleteConfirmModalOpen(true);

  const isSumbitDisabled = !meetingTitle || !meetingDescription || !maxPeople;

  if (isRoomDetailLoading) return <div>그룹 정보 로딩중</div>;
  if (isRoomDetailError) return <div>그룹 정보 에러</div>;
  if (roomDetail === undefined) return <div>그룹 정보 없음</div>;

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
          profileImage={profileImage}
          onClickDeleteImage={handleDeleteImage}
          onChangeImageFile={handleChangeImageUpload}
        />
        <WhiteBox>
          <TextInput
            value={meetingTitle}
            onChange={handleMeetingTitleChange}
            label="모임 이름"
            placeholder="모임 이름을 입력해주세요."
          />
          <TextAreaStyled
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
            decreaseDisabled={false}
            increaseDisabled={false}
          />
        </WhiteBox>
        <WhiteBox>
          <ExitButton onClick={handleExitButtonClick}>모임 나가기</ExitButton>
          <DeleteButton onClick={handleDeleteButtonClick}>
            모임 끝내기
          </DeleteButton>
        </WhiteBox>
        <ButtonFooter
          disabled={isSumbitDisabled}
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
