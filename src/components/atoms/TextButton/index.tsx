import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { semiBold16 } from '../../../styles/typography';

type Props = {
  className?: string;
  color: 'navy' | 'ghost';
  children: string;
  disabled: boolean;
  onClick: () => void;
};

const Button = styled.button`
  ${semiBold16}
  min-width: max-content;
  height: 44px;
  padding: 10px 12px;
  border-radius: 8px;
`;

const NavyButton = styled(Button)`
  color: ${colors.grayScale.white};

  &:enabled {
    background-color: ${colors.mainColor.navy};

    &:active {
      background-color: ${colors.mainColor.navyLight};
    }
  }

  &:disabled {
    background-color: ${colors.grayScale.gray02};
  }
`;

const GhostButton = styled(Button)`
  &:enabled {
    color: ${colors.grayScale.gray04};

    &:active {
      color: ${colors.grayScale.gray03};
      background-color: ${colors.grayScale.gray01};
    }
  }

  &:disabled {
    color: ${colors.grayScale.gray02};
  }
`;

const TextButton = ({
  children,
  color,
  disabled,
  onClick,
  className
}: Props) => {
  if (color === 'navy')
    return (
      <NavyButton {...{ className, disabled, onClick }}>{children}</NavyButton>
    );
  return (
    <GhostButton {...{ className, disabled, onClick }}>{children}</GhostButton>
  );
};

export default TextButton;
