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
