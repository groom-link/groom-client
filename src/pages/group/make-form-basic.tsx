/* eslint-disable @next/next/no-img-element */
import { ChangeEventHandler, useState } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

import {
  Dialog,
  ImageUploadInput,
  Stepper,
  TagInput,
  TextArea,
  TextInput,
  TopNavBar
} from '../../components/molecules';
import ButtonFooter from '../../components/molecules/ButtonFooter';
import colors from '../../styles/colors';
import { semiBold20 } from '../../styles/typography';
import readFileAsURL from '../../utils/readFileAsURL';

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

const WhiteBox = styled.div<{ hasMargin: boolean }>`
  margin-top: ${({ hasMargin }) => (hasMargin ? '16px' : '0')};
  padding: 20px;
  background-color: ${colors.grayScale.white};
`;

const GroupNameInput = styled(TextInput)`
  margin-bottom: 20px;
`;

const MakeFormBasic = () => {
  const [groupName, setGroupName] = useState('');
  const [description, setDescription] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tagList, setTagList] = useState<string[]>([]);
  const [isModalDisplay, setIsModalDisplay] = useState(false);
  const [profileImage, setProfileImage] = useState('');

  const handleChangeImageFile: ChangeEventHandler<HTMLInputElement> = ({
    target: { files }
  }) => {
    if (!files) return;
    const file = files[0];
    readFileAsURL(file, (url) => setProfileImage(url));
  };

  const handleClickDeleteImage = () => setProfileImage('');

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

  const backConfirmCallback = () => setIsModalDisplay(true);

  return (
    <>
      {isModalDisplay && (
        <Dialog
          buttonType="two"
          title="모임 만들기를 취소하시겠어요?"
          description="취소한 모임은 저장되지 않습니다."
          purpleButtonText="아니요"
          grayButtonText="네, 취소할게요"
          onGrayButtonClick={() => Router.push('/home')}
          onPurpleButtonClick={() => setIsModalDisplay(false)}
          isGrayButtonDisabled={false}
          isPurpleButtonDisabled={false}
          isIllustrationExists={true}
        />
      )}
      <Background>
        <TopNavBar
          setting={false}
          backURL="/home"
          backConfirmCallback={backConfirmCallback}
        />
        <WhiteBox hasMargin={false}>
          <Title>새로운 모임을 만들어보세요.</Title>
        </WhiteBox>
        <ImageUploadInput
          profileImage={profileImage}
          onChangeImageFile={handleChangeImageFile}
          onClickDeleteImage={handleClickDeleteImage}
        />
        <WhiteBox hasMargin={false}>
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
        <WhiteBox hasMargin={true}>
          <TagInput
            label="태그"
            placeholder="태그를 입력하세요."
            isTagExists={!!tagList.length}
            {...{ addTag, deleteTag, tagList }}
          />
        </WhiteBox>
        <WhiteBox hasMargin={true}>
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
    </>
  );
};

export default MakeFormBasic;
