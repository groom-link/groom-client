import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { medium12 } from '../../../styles/typography';
import { Cancel } from '../icons';

type Props =
  | {
      type: 'default';
      onTyping: boolean;
      children: string;
      className?: string;
    }
  | {
      type: 'cancel';
      children: string;
      className?: string;
      onCancel: () => void;
    };

type TagBoxProps = {
  onTyping: boolean;
};

const TagBox = styled.div<TagBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  padding: 3px 7px;
  border: 1px solid
    ${({ onTyping }) => (onTyping ? 'transparent' : colors.grayScale.gray02)};
  border-radius: 12px;
  background-color: ${({ onTyping }) =>
    onTyping ? colors.grayScale.gray02 : colors.grayScale.white};
`;

const TagText = styled.span`
  ${medium12}
  color: ${colors.grayScale.gray04};
`;

const Tag = (props: Props) => {
  const { type, children, className } = props;

  if (type === 'cancel') {
    const { onCancel } = props;
    return (
      <button type="button" onClick={onCancel}>
        <TagBox {...{ type, className, onTyping: false }}>
          <TagText>#{children}</TagText>
          <Cancel width="15px" color={colors.grayScale.gray03} />
        </TagBox>
      </button>
    );
  }

  const { onTyping } = props;

  return (
    <TagBox {...{ type, className, onTyping }}>
      <TagText>#{children}</TagText>
    </TagBox>
  );
};

export default Tag;
