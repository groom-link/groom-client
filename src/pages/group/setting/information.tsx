import { ChangeEventHandler, useState } from 'react';
import styled from '@emotion/styled';

import { Button } from '../../../components/atoms';
import {
  ImageUploadInput,
  SegmentTab,
  TagInput,
  TextArea,
  TextInput,
  TopNavBar
} from '../../../components/molecules';
import ButtonFooter from '../../../components/molecules/ButtonFooter';
import colors from '../../../styles/colors';
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

const Information = () => {
  const [profileImage, setProfileImage] = useState('');
  const [meetingTitle, setMeetingTitle] = useState('');
  const [meetingDescription, setMeetingDescription] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);

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

  const handleClickCloseMeeting = () => console.log('모임 끝내기 클릭');

  const handleMeetingInformationSubmit = () => {
    console.log({
      profileImage,
      meetingTitle,
      meetingDescription,
      tagList
    });
  };

  return (
    <Background>
      <TopNavBar setting={false} backURL="/group" />
      <TabContainer>
        <SegmentTab
          leftTabLabel="모임 정보"
          rightTabLabel="구성원 관리"
          leftTabHref=""
          rightTabHref="./member"
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
      <WhiteBox>
        <TagInput
          label="태그"
          tagList={tagList}
          placeholder="태그를 입력해주세요."
          addTag={handleAddTag}
          deleteTag={deleteTag}
        />
      </WhiteBox>
      <WhiteBox>
        <Button
          size="medium"
          disabled={false}
          color="gray"
          onClick={handleClickCloseMeeting}
        >
          모임 끝내기
        </Button>
      </WhiteBox>
      <ButtonFooter disabled={false} onClick={handleMeetingInformationSubmit}>
        모임 정보 수정하기
      </ButtonFooter>
    </Background>
  );
};
export default Information;
