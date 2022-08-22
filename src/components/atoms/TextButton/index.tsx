import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { semiBold16 } from '../../../styles/typography';

type Props = {
  className?: string;
  color: 'navy' | 'ghost';
  label: string;
  isDisabled: boolean;
  onClick: () => void;
};

const Button = styled.button<Pick<Props, 'color'>>`
  ${semiBold16}
  min-width: max-content;
  height: 44px;
  padding: 10px 12px;
  color: ${({ color }) =>
    color === 'ghost' ? colors.grayScale.gray04 : colors.grayScale.white};
  border-radius: 8px;

  &:enabled {
    background-color: ${({ color }) =>
      color === 'ghost' ? 'transparant' : colors.mainColor.navy};
  }

  &:disabled {
    color: ${({ color }) =>
      color === 'ghost' ? colors.grayScale.gray02 : colors.grayScale.white};
    background-color: ${({ color }) =>
      color === 'ghost' ? 'transparant' : colors.grayScale.gray02};
  }

  &:enabled:active {
    background-color: ${({ color }) =>
      color === 'ghost' ? colors.grayScale.gray01 : colors.mainColor.navyLight};
  }
`;

const TextButton = ({
  label,
  color,
  isDisabled,
  onClick,
  className
}: Props) => {
  return (
    <Button
      type="button"
      aria-label={`${label}누르기`}
      disabled={isDisabled}
      {...{ color, isDisabled, onClick, className }}
    >
      {label}
    </Button>
  );
};

export default TextButton;
