import styled from '@emotion/styled';

import colors from '../../../styles/colors';

type Props = {
  size: 'large' | 'medium';
  disabled: boolean;
  color: 'purple' | 'gray' | 'ghost';
  onClick: () => void;
};

const BasicButton = styled.button<Omit<Props, 'color' | 'onClick'>>`
  width: 100%;
  border-radius: 12px;
  height: ${({ size }) => (size === 'large' ? '54px' : '48px')};
`;

const PurpleButton = styled(BasicButton)`
  color: ${colors.grayScale.white};
  background-color: ${({ disabled }) =>
    disabled ? colors.grayScale.gray02 : colors.mainColor.purple};

  &:active {
    background-color: ${colors.mainColor.purpleLight};
  }
`;

const GrayButton = styled(BasicButton)`
  color: ${({ disabled }) =>
    disabled ? colors.grayScale.gray02 : colors.grayScale.gray04};
  background-color: ${colors.grayScale.gray01};

  &:active {
    color: ${colors.grayScale.gray03};
  }
`;

const GhostButton = styled(BasicButton)`
  color: ${({ disabled }) =>
    disabled ? colors.grayScale.gray02 : colors.grayScale.gray04};
  background-color: transparent;

  &:active {
    color: ${colors.grayScale.gray03};
    background-color: ${colors.grayScale.gray01};
  }
`;

const Button = ({ size, disabled, color, onClick }: Props) => {
  if (color === 'purple')
    return (
      <PurpleButton type="button" {...{ size, disabled, onClick }}>
        버튼 이름
      </PurpleButton>
    );
  if (color === 'gray')
    return (
      <GrayButton type="button" {...{ size, disabled, onClick }}>
        버튼 이름
      </GrayButton>
    );
  return (
    <GhostButton type="button" {...{ size, disabled, onClick }}>
      버튼 이름
    </GhostButton>
  );
};

export default Button;
