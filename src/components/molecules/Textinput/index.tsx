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
  isError: boolean;
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
};

const InputBox = styled.div`
  position: relative;
  width: min-content;
`;

const Input = styled.input<Pick<Props, 'width' | 'isError'>>`
  ${regular16}
  box-sizing: border-box;
  width: ${({ width }) => width};
  height: 44px;
  padding: ${({ isError }) => (isError ? '10px 40px 10px 12px' : '10px 12px')};
  border: 1px solid
    ${({ isError }) =>
      isError ? colors.etcColor.alertRed : colors.grayScale.gray02};
  border-radius: 8px;
  color: ${colors.grayScale.gray05};
  background-color: ${colors.grayScale.white};

  &::placeholder {
    color: ${colors.grayScale.gray03};
  }

  &:focus,
  &:active {
    border: 1px solid
      ${({ isError }) =>
        isError ? colors.etcColor.alertRed : colors.grayScale.gray03};
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
  isError,
  width = '300px',
  placeholder,
  value,
  onChange,
  errorMessage
}: Props) => {
  return (
    <div className={className}>
      {label && <Label text={label} marginBottom="4px" />}
      <InputBox>
        <Input
          type="text"
          {...{ width, placeholder, isError, value, onChange }}
        />
        {isError && (
          <ErrorWarning color={colors.etcColor.alertRed} width="24px" />
        )}
      </InputBox>
      {isError && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default TextInput;
