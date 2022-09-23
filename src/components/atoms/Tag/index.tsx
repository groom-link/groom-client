import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { medium12 } from '../../../styles/typography';
import { Cancel } from '../icons';

type Props =
  | {
      type: 'default';
      children: string;
      className?: string;
    }
  | {
      type: 'cancel';
      children: string;
      className?: string;
      onDeleteClick: () => void;
    };

const TagBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  padding: 2px 7px;
  border: 1px solid ${colors.grayScale.gray02};
  border-radius: 12px;
  background-color: ${colors.grayScale.white};
`;

const TagText = styled.span`
  ${medium12}
  color: ${colors.grayScale.gray04};
`;

const Tag = (props: Props) => {
  const { type, className, children } = props;

  if (type === 'cancel') {
    const { onDeleteClick } = props;

    return (
      <button type="button" onClick={onDeleteClick}>
        <TagBox {...{ type, className, isTyping: false }}>
          <TagText>{children}</TagText>
          <Cancel width="14px" color={colors.grayScale.gray03} />
        </TagBox>
      </button>
    );
  }

  return (
    <TagBox {...{ type, className }}>
      <TagText>{children}</TagText>
    </TagBox>
  );
};

export default Tag;
