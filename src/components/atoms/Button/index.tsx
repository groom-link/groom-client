import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { semiBold16 } from '../../../styles/typography';

type Props = {
  width?: string;
  className?: string;
  label: string;
  size: 'large' | 'medium';
  disabled: boolean;
  color: 'purple' | 'gray' | 'ghost';
  onClick: () => void;
};

const BasicButton = styled.button<Pick<Props, 'size' | 'disabled' | 'width'>>`
  ${semiBold16}
  width: ${({ width }) => width};
  padding: 0;
  border-radius: 12px;
  height: ${({ size }) => (size === 'large' ? '56px' : '48px')};
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

const Button = ({
  width = '100%',
  className,
  label,
  size,
  disabled,
  color,
  onClick
}: Props) => {
  if (color === 'purple')
    return (
      <PurpleButton
        type="button"
        {...{ className, size, disabled, onClick, width }}
      >
        {label}
      </PurpleButton>
    );
  if (color === 'gray')
    return (
      <GrayButton
        type="button"
        {...{ className, size, disabled, onClick, width }}
      >
        {label}
      </GrayButton>
    );
  return (
    <GhostButton
      type="button"
      {...{ className, size, disabled, onClick, width }}
    >
      {label}
    </GhostButton>
  );
};

export default Button;
