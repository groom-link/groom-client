import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { regular16 } from '../../../styles/typography';
import { IconButton, Label } from '../../atoms';

const StepperBoxDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 88px;
`;

const StepValueSpan = styled.span`
  ${regular16}
  color: ${colors.grayScale.gray05};
`;

type Props = {
  className?: string;
  label: string;
  value: number;
  color: 'navy' | 'ghost';
  decreaseDisabled: boolean;
  increaseDisabled: boolean;
  onDecrease: () => void;
  onIncrease: () => void;
};

const Stepper = ({
  className,
  label,
  value,
  color,
  onDecrease,
  onIncrease,
  decreaseDisabled,
  increaseDisabled
}: Props) => {
  return (
    <div>
      <Label marginBottom="8px" className={className}>
        {label}
      </Label>
      <StepperBoxDiv>
        <IconButton
          type="decrease"
          color={color}
          onClick={onDecrease}
          disabled={decreaseDisabled}
        />
        <StepValueSpan>{value}</StepValueSpan>
        <IconButton
          type="increase"
          color={color}
          onClick={onIncrease}
          disabled={increaseDisabled}
        />
      </StepperBoxDiv>
    </div>
  );
};

export default Stepper;
