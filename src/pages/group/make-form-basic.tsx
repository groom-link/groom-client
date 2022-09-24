import { ChangeEventHandler, useState } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

import { Upload } from '../../components/atoms/icons';
import {
  Stepper,
  TagInput,
  TextArea,
  TextInput,
  TopNavBar
} from '../../components/molecules';
import ButtonFooter from '../../components/molecules/ButtonFooter';
import colors from '../../styles/colors';
import { semiBold20 } from '../../styles/typography';

const Background = styled.div`
  min-height: 100vh;
  padding-bottom: 84px;
  background-color: ${colors.grayScale.gray01};
`;

const Title = styled.h1`
  ${semiBold20}
  margin-bottom: 12px;
  color: ${colors.grayScale.gray05};
`;

const ProfileImageInput = styled.input`
  display: none;
`;

const ProfileImageInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  background-color: ${colors.grayScale.gray01};
`;

const UploadIcon = styled(Upload)`
  height: 44px;
`;

const UploadDiscription = styled.span`
  margin-top: 4px;
  color: ${colors.grayScale.gray03};
`;

const WhiteBox = styled.div`
  padding: 20px;
  background-color: ${colors.grayScale.white};

  &:not(:nth-of-type(2)) {
    margin-top: 16px;
  }
`;

const GroupNameInput = styled(TextInput)`
  margin-bottom: 20px;
`;

const MakeFormBasic = () => {
  const [groupName, setGroupName] = useState('');
  const [description, setDescription] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tagList, setTagList] = useState<string[]>([]);

  const handleGroupNameChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => setGroupName(value);

  const handleDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { value }
  }) => setDescription(value);

  const decreasePeople = () =>
    setNumberOfPeople((pre) => {
      if (pre <= 0) return 0;
      return --pre;
    });

  const increasePeople = () => setNumberOfPeople((pre) => ++pre);

  const isValueExist = () => !!(groupName && description && numberOfPeople);

  const handleButtonClick = () => {
    if (!isValueExist()) return;
    Router.push('./make-form-additional');
  };

  const addTag = (text: string) => setTagList((pre) => [...pre, text]);

  const deleteTag = (index: number) => {
    setTagList((pre) => {
      const deforeTarget = pre.slice(0, index);
      const afterTarget = pre.slice(index + 1);
      return [...deforeTarget, ...afterTarget];
    });
  };

  return (
    <Background>
      <TopNavBar setting={false} backURL="/home" />
      <WhiteBox>
        <Title>새로운 모임을 만들어보세요.</Title>
      </WhiteBox>
      <ProfileImageInput type="file" id="image-input" />
      <ProfileImageInputLabel htmlFor="image-input">
        <UploadIcon width="44px" color={colors.grayScale.gray03} />
        <UploadDiscription>모임 대표 사진을 업로드해보세요.</UploadDiscription>
      </ProfileImageInputLabel>
      <WhiteBox>
        <GroupNameInput
          label="모임 이름"
          placeholder="모임 이름을 입력해주세요."
          value={groupName}
          onChange={handleGroupNameChange}
        />
        <TextArea
          label="모임 내용"
          placeholder="예시) 저희는 OO을 하는 모임입니다."
          value={description}
          onChange={handleDescriptionChange}
        />
      </WhiteBox>
      <WhiteBox>
        <TagInput
          label="태그"
          placeholder="태그를 입력하세요."
          isTagExists={!!tagList.length}
          {...{ addTag, deleteTag, tagList }}
        />
      </WhiteBox>
      <WhiteBox>
        <Stepper
          label="모임 구성원 수"
          value={numberOfPeople}
          onDecrease={decreasePeople}
          onIncrease={increasePeople}
          color="navy"
          decreaseDisabled={false}
          increaseDisabled={false}
        />
      </WhiteBox>
      <ButtonFooter disabled={!isValueExist()} onClick={handleButtonClick}>
        다음
      </ButtonFooter>
    </Background>
  );
};

export default MakeFormBasic;
