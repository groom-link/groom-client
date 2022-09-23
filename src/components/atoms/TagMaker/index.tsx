import {
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  RefObject
} from 'react';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { medium12 } from '../../../styles/typography';

type Props = {
  className?: string;
  value: string;
  inputRef: RefObject<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
};

const Input = styled.input`
  ${medium12}
  width: 88px;
  padding: 3px 8px;
  border: none;
  border-radius: 12px;
  color: ${colors.grayScale.gray05};
  background-color: ${colors.grayScale.gray02};

  &:focus {
    outline: none;
  }
`;

const TagMaker = ({
  className,
  value,
  inputRef,
  onChange,
  onKeyDown,
  onBlur
}: Props) => {
  return (
    <Input
      ref={inputRef}
      {...{ className, value, onChange, onKeyDown, onBlur }}
    />
  );
};

export default TagMaker;
