import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { regular16, semiBold20 } from '../../../styles/typography';
import { Button } from '../../atoms';

type DefaultProps = {
  isIllustrationExists: boolean;
  title: string;
  purpleButtonText: string;
  isPurpleButtonDisabled: boolean;
  onPurpleButtonClick: () => void;
  discription: string;
};

type OneButtonProps = {
  buttonType: 'one';
} & DefaultProps;

type TwoButtonProps = {
  buttonType: 'two';
  grayButtonText: string;
  isGrayButtonDisabled: boolean;
  onGrayButtonClick: () => void;
} & DefaultProps;

type Props = OneButtonProps | TwoButtonProps;

const Container = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  background-color: ${colors.grayScale.white};
`;

const Title = styled.h1`
  ${semiBold20};
  color: ${colors.grayScale.gray06};
`;

const MockIllustration = styled.div`
  width: 140px;
  height: 140px;
  margin: 8px 0 16px;
  background-color: ${colors.grayScale.gray02};
`;

const Discription = styled.span`
  ${regular16}
  margin: 8px 0 16px;
  color: ${colors.grayScale.gray04};
`;

const ButtonBox = styled.div`
  display: flex;
  justify-items: flex-end;
  width: 100%;
`;

const GrayButton = styled(Button)`
  margin-right: 8px;
`;

const Dialog = (props: Props) => {
  const {
    buttonType,
    title,
    discription,
    isIllustrationExists,
    isPurpleButtonDisabled,
    purpleButtonText,
    onPurpleButtonClick
  } = props;
  return (
    <Container>
      <Title>{title}</Title>
      {isIllustrationExists && <MockIllustration />}
      <Discription>{discription}</Discription>
      <ButtonBox>
        {buttonType === 'two' && (
          <GrayButton
            label={props.grayButtonText}
            size="medium"
            disabled={props.isGrayButtonDisabled}
            color="gray"
            onClick={props.onGrayButtonClick}
          />
        )}
        <Button
          label={purpleButtonText}
          size="medium"
          disabled={isPurpleButtonDisabled}
          color="purple"
          onClick={onPurpleButtonClick}
        />
      </ButtonBox>
    </Container>
  );
};

export default Dialog;