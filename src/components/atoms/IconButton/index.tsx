import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { Add, Remove } from '../icons';

type Props = {
  disabled: boolean;
  color: 'navy' | 'ghost';
  type: 'decrease' | 'increase';
  onClick: () => void;
};

const StepButton = styled.button<Pick<Props, 'disabled'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 4px;
  color: ${colors.grayScale.white};
`;

const NavyButton = styled(StepButton)`
  background-color: ${colors.mainColor.navy};

  &:enabled:active {
    background-color: ${colors.mainColor.navyLight};
  }

  &:disabled {
    background-color: ${colors.grayScale.gray02};
  }
`;

const GhostButton = styled(StepButton)`
  background-color: transparent;

  &:enabled:active {
    background-color: ${colors.grayScale.gray01};
  }
`;

const GhostButtonComponent = ({
  onClick,
  disabled,
  type
}: Omit<Props, 'color'>) => {
  const [color, setColor] = useState<string>(colors.grayScale.gray04);

  useEffect(() => {
    if (disabled) {
      setColor(colors.grayScale.gray02);
      return;
    }
    setColor(colors.grayScale.gray04);
  }, [disabled]);

  const handleMouseDown = () => {
    if (disabled) return;
    setColor(colors.grayScale.gray03);
  };

  const handleMouseUp = () => {
    if (disabled) return;
    setColor(colors.grayScale.gray04);
  };

  return (
    <GhostButton
      {...{ onClick, disabled }}
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
    >
      {type === 'decrease' ? (
        <Remove width="16px" color={color} />
      ) : (
        <Add width="16px" color={color} />
      )}
    </GhostButton>
  );
};

const NavyButtonComponent = ({
  onClick,
  disabled,
  type
}: Omit<Props, 'color'>) => {
  return (
    <NavyButton {...{ onClick, disabled }}>
      {type === 'decrease' ? (
        <Remove width="16px" color={colors.grayScale.white} />
      ) : (
        <Add width="16px" color={colors.grayScale.white} />
      )}
    </NavyButton>
  );
};

const IconButton = ({ type, onClick, disabled, color }: Props) => {
  return color === 'navy' ? (
    <NavyButtonComponent {...{ type, onClick, disabled }} />
  ) : (
    <GhostButtonComponent {...{ type, onClick, disabled }} />
  );
};

export default IconButton;
