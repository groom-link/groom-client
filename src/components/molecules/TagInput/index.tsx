import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState
} from 'react';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { regular16 } from '../../../styles/typography';
import { Label, Tag } from '../../atoms';

type InputProps = {
  isTagMode: boolean;
};

const Input = styled.div<InputProps>`
  ${regular16}
  line-height: ${({ isTagMode }) => isTagMode && 0};
  padding: 9px 11px;
  border: 1px solid ${colors.grayScale.gray02};
  border-radius: 8px;
  background-color: ${colors.grayScale.white};
  color: ${colors.grayScale.gray03};
`;

const Container = styled.div`
  position: relative;
`;

const TagStyled = styled(Tag)``;

type TagInputProps = {
  placeholder?: string;
  label?: string;
  tagList: string[];
  isTagExists: boolean;
  addTag: (text: string) => void;
  deleteTag: (index: number) => void;
};

const TagInput = ({
  placeholder,
  label,
  tagList,
  addTag,
  deleteTag,
  isTagExists
}: TagInputProps) => {
  const [text, setText] = useState('#');
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isTyping) inputRef.current?.focus();
  }, [isTyping]);

  const handleTextChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => {
    setText(value);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = ({
    key,
    nativeEvent: { isComposing }
  }) => {
    if (key === 'Enter') {
      if (!text || isComposing) return;
      const isStartsWithHash = text.startsWith('#');
      addTag(isStartsWithHash ? text : `#${text}`);
      setText('#');
    }
  };

  const handleInputClick = () => {
    setIsTyping(true);
  };

  const handleInputBlur = () => setIsTyping(false);

  return (
    <Container>
      {label && <Label text={label} marginBottom="4px" />}
      <Input onClick={handleInputClick} isTagMode={isTyping || isTagExists}>
        {isTyping || isTagExists || placeholder}
        {tagList.map((text, index) => (
          <TagStyled
            key={`text-${index}`}
            type="cancel"
            onCancel={() => deleteTag(index)}
          >
            {text}
          </TagStyled>
        ))}
        {isTyping && (
          <TagStyled
            type="input"
            inputRef={inputRef}
            value={text}
            onKeyDown={handleKeyDown}
            onChange={handleTextChange}
            onBlur={handleInputBlur}
          />
        )}
      </Input>
    </Container>
  );
};

export default TagInput;
