import { ChangeEventHandler, useEffect, useState } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

import {
  Dialog,
  ImageUploadInput,
  SegmentTab,
  TextArea,
  TextInput,
  TopNavBar
} from '../../../components/molecules';
import ButtonFooter from '../../../components/molecules/ButtonFooter';
import { useRoomIdParams } from '../../../hooks';
import useGetDetailWithRoomId from '../../../hooks/api/room/getDetailWithRoomId';
import colors from '../../../styles/colors';
import { semiBold16 } from '../../../styles/typography';
import readFileAsURL from '../../../utils/readFileAsURL';

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

  &:not(:nth-of-type(5)) {
    margin-bottom: 16px;
  }
`;

const TextAreaStyled = styled(TextArea)`
  margin-top: 20px;
`;

// TODO: Button 컴포넌트 안에 통합하기.
const DeleteButton = styled.button`
  ${semiBold16};
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid ${colors.etcColor.alertRed};
  color: ${colors.etcColor.alertRed};
  background-color: ${colors.grayScale.white};
`;

const Information = () => {
  const roomId = useRoomIdParams();
  const [profileImage, setProfileImage] = useState('');
  const [meetingTitle, setMeetingTitle] = useState('');
  const [meetingDescription, setMeetingDescription] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const {
    data: roomDetail,
    isLoading: isRoomDetailLoading,
    isError: isRoomDetailError
  } = useGetDetailWithRoomId(roomId);

  useEffect(() => {
    if (!roomDetail) return;
    const { name, description, mainImageUrl } = roomDetail;
    setProfileImage(mainImageUrl);
    setMeetingTitle(name);
    setMeetingDescription(description);
    setTagList(tagList);
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

  const handleClickCloseMeeting = () => setIsConfirmModalOpen(true);

  const handleMeetingInformationSubmit = () => {
    console.log({
      profileImage,
      meetingTitle,
      meetingDescription,
      tagList
    });
  };

  const handleModalClose = () => setIsConfirmModalOpen(false);

  const closeMeeting = () => Router.push('/home');

  const handleBackButtonClick = () => Router.push(`/group?roomId=${roomId}`);

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
          <DeleteButton onClick={handleClickCloseMeeting}>
            모임 끝내기
          </DeleteButton>
        </WhiteBox>
        <ButtonFooter disabled={false} onClick={handleMeetingInformationSubmit}>
          모임 정보 수정하기
        </ButtonFooter>
      </Background>
      <Dialog
        isOpen={isConfirmModalOpen}
        title="정말 모임을 끝내시겠어요?"
        description="모든 팀원들은 모임에서 나가게 되며, 남은 모임비는 자동으로 반환됩니다."
        buttonType="two"
        grayButtonText="네, 끝낼게요"
        purpleButtonText="아니요"
        onGrayButtonClick={closeMeeting}
        onPurpleButtonClick={handleModalClose}
        isGrayButtonDisabled={false}
        isPurpleButtonDisabled={false}
        illustrationURL="/illustrations/Warning.png"
      />
    </>
  );
};
export default Information;
