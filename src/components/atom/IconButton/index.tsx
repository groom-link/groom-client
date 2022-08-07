import colors from '../../../styles/colors';
import { Add, Remove } from '../icons';
import { StepButton } from './styled';

type Props = {
  type: 'decrease' | 'increase';
  onClick: () => void;
};

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
