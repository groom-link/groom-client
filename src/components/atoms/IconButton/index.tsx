import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { Add, Remove } from '../icons';

type Props = {
  type: 'decrease' | 'increase';
  onClick: () => void;
};

const StepButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 4px;
  background-color: ${colors.mainColor.navy};
`;

const IconButton = ({ type, onClick }: Props) => {
  return (
    <StepButton {...{ onClick }}>
      {type === 'decrease' ? (
        <Remove width="16px" height="16px" color={colors.grayScale.white} />
      ) : (
        <Add width="16px" height="16px" color={colors.grayScale.white} />
      )}
    </StepButton>
  );
};

export default IconButton;
