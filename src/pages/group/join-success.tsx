import Router from 'next/router';
import styled from '@emotion/styled';

import { Button, Logo } from '../../components/atoms';
import { TopCancelBar } from '../../components/molecules';
import colors from '../../styles/colors';
import { regular16, semiBold24 } from '../../styles/typography';

const Title = styled.h1`
  ${semiBold24}
  margin-bottom: 8px;
  text-align: center;
  color: ${colors.grayScale.gray05};
`;

const Description = styled.p`
  ${regular16}
  margin-bottom: 40px;
  text-align: center;
  color: ${colors.grayScale.gray04};
`;

const ButtonBox = styled.div`
  padding: 0 82px;
`;

const TemporaryLogo = styled(Logo)`
  margin: 120px auto 120px;
`;

const joinSuccess = () => {
  return (
    <>
      <TopCancelBar cancelURL="/home" />
      <TemporaryLogo />
      <Title>모임 가입이 완료되었습니다!</Title>
      <Description>홈 화면에 새 모임이 추가되었습니다.</Description>
      <ButtonBox>
        <Button
          label="홈화면으로 돌아가기"
          size="large"
          disabled={false}
          color="purple"
          onClick={() => Router.push('/home')}
        />
      </ButtonBox>
    </>
  );
};

export default joinSuccess;
