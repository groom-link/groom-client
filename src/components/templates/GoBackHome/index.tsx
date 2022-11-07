import { ReactNode } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { regular16, semiBold24 } from '../../../styles/typography';
import { Button } from '../../atoms';
import { TopCancelBar } from '../../molecules';
import Image from '../../utils/Image';

type DefaultProps = {
  title: string;
  description: ReactNode | string;
  purpleButtonLabel: string;
  logoImageSrc: string;
  onPurpleButtonClick: () => void;
};

type OneButtonProps = {
  proptype: 'one-button';
} & DefaultProps;

type TwoButtonProps = {
  proptype: 'two-button';
  grayButtonLabel: string;
  grayButtonOnClick: () => void;
} & DefaultProps;

type Props = OneButtonProps | TwoButtonProps;

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

const PurpleButton = styled(Button)`
  margin: 0 auto 20px;
`;

const GrayButton = styled(Button)`
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  margin: 13vh 0 20px;
  text-align: center;
`;

const GoBackHome = ({
  title,
  description,
  purpleButtonLabel,
  logoImageSrc,
  onPurpleButtonClick,
  ...props
}: Props) => {
  return (
    <>
      <TopCancelBar cancelURL="/home" />
      <LogoContainer>
        <Image src={logoImageSrc} width="200" height="200" alt="결과 로고" />
      </LogoContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <PurpleButton
        width="250px"
        size="large"
        disabled={false}
        color="purple"
        onClick={() => Router.push('/home?group=true')}
      >
        {purpleButtonLabel}
      </PurpleButton>
      {props.proptype === 'two-button' && (
        <GrayButton
          width="250px"
          color="gray"
          disabled={false}
          size="large"
          onClick={props.grayButtonOnClick}
        >
          {props.grayButtonLabel}
        </GrayButton>
      )}
    </>
  );
};

export default GoBackHome;
