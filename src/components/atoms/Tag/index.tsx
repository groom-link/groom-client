import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { medium10 } from '../../../styles/typography';
import { Cancel } from '../icons';

type Props =
  | {
      state: 'default';
      text: string;
      className?: string;
    }
  | {
      state: 'cancel';
      text: string;
      className?: string;
      onCancel: () => void;
    };

type StateProps = Pick<Props, 'state'>;

const TagBox = styled.div<StateProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ state }) => (state === 'cancel' ? '57px' : '40px')};
  height: 19px;
  border-radius: 8px;
  background-color: ${colors.mainColor.navy};
`;

const TagText = styled.span<StateProps>`
  ${medium10}
  margin-right: ${({ state }) => (state === 'cancel' ? '2px;' : '0')};
  color: ${colors.grayScale.white};
`;

const Tag = (props: Props) => {
  const { state, text, className } = props;

  return (
    <TagBox
      {...{ state, className }}
      {...(state === 'cancel' && { onClick: props.onCancel })}
    >
      <TagText {...{ state }}>#{text}</TagText>
      {state === 'cancel' && (
        <Cancel width="15px" color={colors.grayScale.white} />
      )}
    </TagBox>
  );
};

export default Tag;
