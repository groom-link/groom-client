import { ChangeEventHandler } from 'react';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { medium12, regular16 } from '../../../styles/typography';
import { Label } from '../../atoms';

type Props = {
  className?: string;
  label?: string;
  width?: string;
  placeholder?: string;
  errorMessage?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  disabled?: boolean;
};

const Box = styled.div<Pick<Props, 'width'>>`
  width: ${({ width }) => width};
`;

const TextAreaStyled = styled.textarea<Pick<Props, 'errorMessage'>>`
  ${regular16}
  box-sizing: border-box;
  width: 100%;
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

const TextArea = ({
  className,
  errorMessage,
  label,
  placeholder,
  width = 'auto',
  value,
  onChange,
  disabled
}: Props) => {
  return (
    <Box {...{ className, width }}>
      {label && <Label marginBottom="4px">{label}</Label>}
      <TextAreaStyled
        {...{ disabled, label, placeholder, errorMessage, value, onChange }}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Box>
  );
};

export default TextArea;
