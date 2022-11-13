import { ChangeEventHandler, useEffect, useState } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

import { Dialog, TextArea, TopNavBar } from '../../../components/molecules';
import ButtonFooter from '../../../components/molecules/ButtonFooter';
import useGetMyInformation from '../../../hooks/api/auth/getMyInformation';
import useAddParticipant from '../../../hooks/api/room/addParticipant';
import useInviteCodeParams from '../../../hooks/useInviteCodeParams';
import colors from '../../../styles/colors';
import { regular16, semiBold16, semiBold20 } from '../../../styles/typography';

const Background = styled.div`
  height: 100vh;
  background-color: ${colors.grayScale.gray01};
`;

const WhiteBox = styled.div`
  padding: 20px;
  background-color: ${colors.grayScale.white};
`;

const Title = styled.h1`
  ${semiBold20}
  margin-bottom: 8px;
  color: ${colors.grayScale.gray05};
`;

const Description = styled.p`
  ${regular16}
  margin-bottom: 20px;
  color: ${colors.grayScale.gray04};
`;

const SubTitle = styled.h2`
  ${semiBold16}
  margin-bottom: 8px;
  color: ${colors.grayScale.gray04};
`;

const Money = styled.strong`
  ${semiBold16}
  color: ${colors.mainColor.purple};
`;

const Form = () => {
  const code = useInviteCodeParams();
  const [text, setText] = useState('');
  const [joinRoomId, setJoinRoomId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    data: myInformation,
    isError: isMyInformationError,
    isLoading: isMyInformationLoading
  } = useGetMyInformation();
  const { mutate } = useAddParticipant();

  useEffect(() => {
    const { roomId } = Router.query;
    if (!roomId) return;
    if (typeof roomId !== 'string') return;
    setJoinRoomId(parseInt(roomId, 10));
  }, []);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { value }
  }) => setText(value);

  const handleBackButtonClick = () => setIsModalOpen(true);

  const handleModalConfirmButtonClick = () => Router.push(`./?code=${code}`);

  const handleModalCancelButtonClick = () => setIsModalOpen(false);

  if (isMyInformationLoading) return <div>로딩중...</div>;
  if (isMyInformationError) return <div>내 정보 불러오기 에러!</div>;
  if (myInformation === undefined) return <div>내 정보 데이터 에러!</div>;

  return (
    <>
      <Background>
        <TopNavBar setting={false} onBackButtonClick={handleBackButtonClick} />
        <WhiteBox>
          <Title>자유롭게 본인을 소개해주세요!</Title>
          <Description>
            자신을 소개하고, 모임비를 결제하면
            <br />
            모임장에게 가입 신청이 완료됩니다.
          </Description>
          <TextArea
            placeholder="자신을 소개해주세요."
            value={text}
            onChange={handleChange}
          />
        </WhiteBox>
        <WhiteBox>
          <SubTitle>모임비</SubTitle>
          <Money>50,000원</Money>
        </WhiteBox>
        <ButtonFooter
          disabled={text === ''}
          onClick={() => {
            console.log(joinRoomId, myInformation.id);

            mutate(
              { roomId: joinRoomId, userId: myInformation.id },
              { onSuccess: () => Router.push('./success') }
            );
          }}
        >
          모임비 결제하기
        </ButtonFooter>
      </Background>
      <Dialog
        isOpen={isModalOpen}
        illustrationURL="/illustrations/Back.png"
        title="모임 신청을 취소하시겠어요?"
        buttonType="two"
        purpleButtonText="아니요"
        grayButtonText="네, 취소할게요"
        description="모임 이름: SW개발"
        isGrayButtonDisabled={false}
        isPurpleButtonDisabled={false}
        onGrayButtonClick={handleModalConfirmButtonClick}
        onPurpleButtonClick={handleModalCancelButtonClick}
      />
    </>
  );
};

export default Form;
