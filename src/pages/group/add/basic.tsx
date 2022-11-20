/* eslint-disable @next/next/no-img-element */
import { ChangeEventHandler, useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import styled from '@emotion/styled';

import {
  Dialog,
  ImageUploadInput,
  Stepper,
  TextArea,
  TextInput,
  TopNavBar
} from '../../../components/molecules';
import ButtonFooter from '../../../components/molecules/ButtonFooter';
import useNewGroupInformationStore from '../../../store/newGroupInformation';
import colors from '../../../styles/colors';
import { semiBold20 } from '../../../styles/typography';
import readFileAsURL from '../../../utils/readFileAsURL';

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

const Basic = () => {
  const router = useRouter();
  const [tagList, setTagList] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const profileImageURL = useNewGroupInformationStore(
    (state) => state.profileImageURL
  );
  const setProfileImageURL = useNewGroupInformationStore(
    (state) => state.setProfileImageURL
  );
  const name = useNewGroupInformationStore((state) => state.name);
  const setName = useNewGroupInformationStore((state) => state.setName);
  const numberOfMembers = useNewGroupInformationStore(
    (state) => state.numberOfMembers
  );
  const setNumberOfMembers = useNewGroupInformationStore(
    (state) => state.setNumberOfMembers
  );
  const description = useNewGroupInformationStore((state) => state.description);
  const setDescription = useNewGroupInformationStore(
    (state) => state.setDescription
  );
  const setGifticonID = useNewGroupInformationStore(
    (state) => state.setGifticonID
  );
  const setMaximumNumberOfPenalty = useNewGroupInformationStore(
    (state) => state.setMaximumNumberOfPenalty
  );

  useEffect(() => {
    if (!profileImageURL) return;
    readFileAsURL(profileImageURL, (url) => setProfileImage(url));
  });

  const handleChangeImageFile: ChangeEventHandler<HTMLInputElement> = async ({
    target: { files }
  }) => {
    if (!files) return;
    const file = files[0];
    setProfileImageURL(profileImageURL);
    readFileAsURL(file, (url) => {
      setProfileImage(url);
      setProfileImageURL(file);
    });
  };

  const handleClickDeleteImage = () => {
    setProfileImage('');
    setProfileImageURL(null);
  };

  const handleGroupNameChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => setName(value);

  const handleDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { value }
  }) => setDescription(value);

  const decreasePeople = () => {
    if (numberOfMembers <= 0) return;
    setNumberOfMembers(numberOfMembers - 1);
  };

  const increasePeople = () => setNumberOfMembers(numberOfMembers + 1);

  const isValueExist = () =>
    !!(name && description && numberOfMembers && profileImageURL);

  const handleButtonClick = () => {
    if (!isValueExist()) return;
    if (!profileImageURL) return;
    Router.push('./more');
  };

  const addTag = (text: string) => setTagList((pre) => [...pre, text]);

  const deleteTag = (index: number) => {
    setTagList((pre) => {
      const deforeTarget = pre.slice(0, index);
      const afterTarget = pre.slice(index + 1);
      return [...deforeTarget, ...afterTarget];
    });
  };

  const backConfirmCallback = () => setIsModalOpen(true);

  const handleModalGrayButtonClick = () => {
    setProfileImageURL(null);
    setName('');
    setDescription('');
    setNumberOfMembers(0);
    setGifticonID('0');
    setMaximumNumberOfPenalty(0);
    router.push('/home');
  };

  return (
    <>
      <Dialog
        isOpen={isModalOpen}
        buttonType="two"
        title="모임 만들기를 취소하시겠어요?"
        description="취소한 모임은 저장되지 않습니다."
        purpleButtonText="아니요"
        grayButtonText="네, 취소할게요"
        onGrayButtonClick={handleModalGrayButtonClick}
        onPurpleButtonClick={() => setIsModalOpen(false)}
        isGrayButtonDisabled={false}
        isPurpleButtonDisabled={false}
        illustrationURL="/illustrations/Back.png"
      />
      <Background>
        <TopNavBar setting={false} onBackButtonClick={backConfirmCallback} />
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
            value={name}
            onChange={handleGroupNameChange}
          />
          <TextArea
            label="모임 내용"
            placeholder="예시) 저희는 OO을 하는 모임입니다."
            value={description}
            onChange={handleDescriptionChange}
          />
        </WhiteBox>
        {/* <WhiteBox hasMargin={true}>
          <TagInput
            label="태그"
            placeholder="태그를 입력하세요."
            {...{ addTag, deleteTag, tagList }}
          />
        </WhiteBox> */}
        <WhiteBox hasMargin={true}>
          <Stepper
            label="모임 구성원 수"
            value={numberOfMembers}
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

export default Basic;
