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
import { Label, Tag, TagMaker } from '../../atoms';

type Props = {
  placeholder?: string;
  label?: string;
  tagList: string[];
  isTagExists: boolean;
  addTag: (text: string) => void;
  deleteTag: (index: number) => void;
};

const SINGLE_LINE_HEIGHT = 50;

const Input = styled.div<{ isTagMode: boolean }>`
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

const TagStyled = styled(Tag)<{ isOverLine: boolean }>`
  margin-right: 6px;
  margin-top: ${({ isOverLine }) => isOverLine && '6px'};
`;

const TagMakerStyled = styled(TagMaker)<{ isOverLine: boolean }>`
  margin-right: 6px;
  margin-top: ${({ isOverLine }) => isOverLine && '6px'};
`;

const TagInput = ({
  placeholder,
  label,
  tagList,
  addTag,
  deleteTag,
  isTagExists
}: Props) => {
  const [text, setText] = useState('#');
  const [isTyping, setIsTyping] = useState(false);
  const [isOverLine, setIsOverLine] = useState(false);
  const tagInputRef = useRef<HTMLInputElement>(null);
  const dummyInputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isTyping) tagInputRef.current?.focus();
  }, [isTyping]);

  useEffect(() => {
    if (!dummyInputRef?.current) return;
    const isOver = dummyInputRef.current.clientHeight > SINGLE_LINE_HEIGHT;
    if (!isOver) {
      setIsOverLine(false);
      return;
    }
    setIsOverLine(true);
  }, [dummyInputRef, tagList]);

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
      {label && <Label marginBottom="4px">{label}</Label>}
      <Input
        onClick={handleInputClick}
        isTagMode={isTyping || isTagExists}
        ref={dummyInputRef}
      >
        {isTyping || isTagExists || placeholder}
        {tagList.map((text, index) => (
          <TagStyled
            key={`text-${index}`}
            type="cancel"
            onDeleteClick={() => deleteTag(index)}
            isOverLine={isOverLine}
          >
            {text}
          </TagStyled>
        ))}
        {isTyping && (
          <TagMakerStyled
            inputRef={tagInputRef}
            value={text}
            onKeyDown={handleKeyDown}
            onChange={handleTextChange}
            onBlur={handleInputBlur}
            isOverLine={isOverLine}
          />
        )}
      </Input>
    </Container>
  );
};

export default TagInput;
