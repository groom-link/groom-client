import colors from '../../../styles/colors';
import { IconButton, Label } from '../../atom';
import { StepperBoxDiv, StepValueSpan } from './styled';

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
        <IconButton type="decrease" onClick={onDecrease} />
        <StepValueSpan>{value}</StepValueSpan>
        <IconButton type="increase" onClick={onIncrease} />
      </StepperBoxDiv>
    </div>
  );
};

export default Stepper;
