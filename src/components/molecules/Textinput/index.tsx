import { ChangeEventHandler } from 'react';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { medium12, regular16 } from '../../../styles/typography';
import { Label } from '../../atoms';
import { Warning } from '../../atoms/icons';

type Props = {
  className?: string;
  label?: string;
  width?: string;
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
  disabled?: boolean;
};

const InputBox = styled.div<Pick<Props, 'width'>>`
  position: relative;
  width: ${({ width }) => width};
`;

const Input = styled.input<Pick<Props, 'errorMessage'>>`
  ${regular16}
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  padding: ${({ errorMessage }) =>
    errorMessage ? '10px 40px 10px 12px' : '10px 12px'};
  border: 1px solid
    ${({ errorMessage }) =>
      errorMessage ? colors.etcColor.alertRed : colors.grayScale.gray02};
  border-radius: 8px;
  color: ${colors.grayScale.gray05};
  background-color: ${colors.grayScale.white};

  &::placeholder {
    color: ${colors.grayScale.gray03};
  }

  &:focus,
  &:active {
    border: 1px solid
      ${({ errorMessage }) =>
        errorMessage ? colors.etcColor.alertRed : colors.grayScale.gray03};
    outline: none;
  }
`;

const ErrorWarning = styled(Warning)`
  position: absolute;
  right: 12px;
`;

const ErrorMessage = styled.span`
  ${medium12}
  display: block;
  margin-top: 6px;
  color: ${colors.etcColor.alertRed};
`;

const TextInput = ({
  className,
  label,
  width = 'auto',
  placeholder,
  value,
  onChange,
  errorMessage,
  disabled
}: Props) => {
  return (
    <div className={className}>
      {label && <Label marginBottom="4px">{label}</Label>}
      <InputBox width={width}>
        <Input
          type="text"
          disabled={disabled}
          {...{ placeholder, value, onChange, errorMessage }}
        />
        {errorMessage && (
          <ErrorWarning color={colors.etcColor.alertRed} width="24px" />
        )}
      </InputBox>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default TextInput;
