import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { regular16, semiBold20 } from '../../../styles/typography';
import { Button } from '../../atoms';

type DefaultProps = {
  isOpen: boolean;
  isIllustrationExists: boolean;
  title: string;
  purpleButtonText: string;
  isPurpleButtonDisabled: boolean;
  onPurpleButtonClick: () => void;
  description: string;
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

const FullPageModal = styled.div<Pick<Props, 'isOpen'>>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(52, 58, 63, 0.6);
  z-index: 100;
`;

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
  margin: 8px 59px 16px;
  color: ${colors.grayScale.gray04};
  text-align: center;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-items: flex-end;
  width: 100%;
`;

const GrayButton = styled(Button)`
  margin-right: 8px;
`;

const Dialog = ({
  isOpen,
  title,
  description,
  isIllustrationExists,
  isPurpleButtonDisabled,
  purpleButtonText,
  onPurpleButtonClick,
  ...props
}: Props) => {
  return (
    <FullPageModal isOpen={isOpen}>
      <Container>
        <Title>{title}</Title>
        {isIllustrationExists && <MockIllustration />}
        <Discription>{description}</Discription>
        <ButtonBox>
          {props.buttonType === 'two' && (
            <GrayButton
              size="medium"
              disabled={props.isGrayButtonDisabled}
              color="gray"
              onClick={props.onGrayButtonClick}
            >
              {props.grayButtonText}
            </GrayButton>
          )}
          <Button
            size="medium"
            disabled={isPurpleButtonDisabled}
            color="purple"
            onClick={onPurpleButtonClick}
          >
            {purpleButtonText}
          </Button>
        </ButtonBox>
      </Container>
    </FullPageModal>
  );
};

export default Dialog;
