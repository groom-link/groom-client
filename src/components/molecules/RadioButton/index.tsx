import { ChangeEventHandler } from 'react';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { medium12 } from '../../../styles/typography';
import { Label } from '../../atoms';
import { RadioOff, RadioOn } from '../../atoms/icons';

const RadioLabel = styled.label`
  ${medium12}
  display: flex;
  align-items: center;
  color: ${colors.grayScale.gray04};
`;

const HiddenInput = styled.input`
  display: none;
`;

const RadioOnStyled = styled(RadioOn)`
  margin-right: 4px;
`;

const RadioOffStyled = styled(RadioOff)`
  margin-right: 4px;
`;

type Props = {
  radioLabel?: string;
  option1Label: string;
  option2Label: string;
  selectedValue: 1 | 2;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const RadioButtom = ({
  radioLabel,
  option1Label,
  option2Label,
  selectedValue,
  onChange
}: Props) => {
  return (
    <div>
      {radioLabel && <Label text={radioLabel} marginBottom="8px" />}
      <RadioLabel htmlFor="radio1">
        {selectedValue === 1 ? (
          <RadioOnStyled width="24px" height="24px" />
        ) : (
          <RadioOffStyled width="24px" height="24px" />
        )}
        <HiddenInput
          id="radio1"
          name="radio"
          type="radio"
          value={1}
          checked={selectedValue === 1}
          onChange={onChange}
        />
        {option1Label}
      </RadioLabel>
      <RadioLabel htmlFor="radio2">
        {selectedValue === 2 ? (
          <RadioOnStyled width="24px" height="24px" />
        ) : (
          <RadioOffStyled width="24px" height="24px" />
        )}
        <HiddenInput
          id="radio2"
          name="radio"
          type="radio"
          value={2}
          checked={selectedValue === 2}
          onChange={onChange}
        />
        {option2Label}
      </RadioLabel>
    </div>
  );
};

export default RadioButtom;
