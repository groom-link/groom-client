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

  &:active {
    background-color: ${colors.mainColor.navyLight};
  }

  &:disabled {
    background-color: ${colors.grayScale.gray02};
  }
`;

const GhostButton = styled(StepButton)`
  background-color: transparent;

  &:active {
    background-color: ${colors.grayScale.gray01};
  }
`;

const IconButton = ({ type, onClick, disabled, color }: Props) => {
  return color === 'navy' ? (
    <NavyButton {...{ onClick, disabled }}>
      {type === 'decrease' ? (
        <Remove width="16px" height="16px" color={colors.grayScale.white} />
      ) : (
        <Add width="16px" height="16px" color={colors.grayScale.white} />
      )}
    </NavyButton>
  ) : (
    <GhostButton {...{ onClick, disabled }}>
      {type === 'decrease' ? (
        <Remove width="16px" height="16px" color={colors.grayScale.gray04} />
      ) : (
        <Add width="16px" height="16px" color={colors.grayScale.gray04} />
      )}
    </GhostButton>
  );
};

export default IconButton;
