import colors from '../../../styles/colors';
import { Label } from '../../atom';
import { Add, Remove } from '../../atom/icons';
import { StepButton, StepperBoxDiv, StepValueSpan } from './styled';

type Props = {
  label: string;
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

const Stepper = ({ label, value, onDecrease, onIncrease }: Props) => {
  return (
    <div>
      <Label text={label} marginBottom="8px" />
      <StepperBoxDiv>
        <StepButton onClick={onDecrease}>
          <Remove width="16px" height="16px" color={colors.grayScale.white} />
        </StepButton>
        <StepValueSpan>{value}</StepValueSpan>
        <StepButton onClick={onIncrease}>
          <Add width="16px" height="16px" color={colors.grayScale.white} />
        </StepButton>
      </StepperBoxDiv>
    </div>
  );
};

export default Stepper;
