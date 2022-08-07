import { Label } from '../../atom';
import {
  HiddenInput,
  RadioLabel,
  RadioOffStyled,
  RadioOnStyled
} from './styled';

type Props = {
  radioLabel?: string;
  option1Label: string;
  option2Label: string;
  selectedValue: 1 | 2;
  onChange: () => void;
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
