import Router from 'next/router';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { regular16, semiBold24 } from '../../../styles/typography';
import { Button, Logo } from '../../atoms';
import { TopCancelBar } from '../../molecules';

type Props = {
  title: string;
  description: string;
};

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

const GoBackHome = ({ title, description }: Props) => {
  return (
    <>
      <TopCancelBar cancelURL="/home" />
      <TemporaryLogo />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ButtonBox>
        <Button
          size="large"
          disabled={false}
          color="purple"
          onClick={() => Router.push('/home?group=true')}
        >
          홈화면으로 돌아가기
        </Button>
      </ButtonBox>
    </>
  );
};

export default GoBackHome;
