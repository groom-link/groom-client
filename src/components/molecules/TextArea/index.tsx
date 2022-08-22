import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { medium12, regular16 } from '../../../styles/typography';
import { Label } from '../../atoms';

type Props = {
  label?: string;
  placeholder?: string;
  errorMessage?: string;
};

const StyledTextArea = styled.textarea<Pick<Props, 'errorMessage'>>`
  ${regular16}
  width: 300px;
  height: 200px;
  padding: 10px 12px;
  resize: none;
  border: 1px solid
    ${({ errorMessage }) =>
      errorMessage ? colors.etcColor.alertRed : colors.grayScale.gray02};
  border-radius: 8px;
  color: ${colors.grayScale.gray05};
  background-color: ${colors.grayScale.white};

  &::placeholder {
    color: ${colors.grayScale.gray03};
  }

  &:focus {
    outline: none;
    border: 1px solid
      ${({ errorMessage }) =>
        errorMessage ? colors.etcColor.alertRed : colors.grayScale.gray03};
  }
`;

const ErrorMessage = styled.strong`
  ${medium12}
  display: block;
  margin-top: 6px;
  color: ${colors.etcColor.alertRed};
`;

const TextArea = ({ errorMessage, label, placeholder }: Props) => {
  return (
    <div>
      {label && <Label text={label} marginBottom="4px" />}
      <StyledTextArea {...{ label, placeholder, errorMessage }} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default TextArea;
