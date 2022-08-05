import colors from '../../../styles/colors';
import { Cancel } from '../icons';
import { TagBoxDiv, TagSpan } from './styled';

type Props =
  | {
      state: 'default';
      text: string;
    }
  | {
      state: 'cancel';
      text: string;
      onCancel: () => void;
    };

const Tag = (props: Props) => {
  const { state, text } = props;

  return (
    <TagBoxDiv
      {...{ state }}
      {...(state === 'cancel' && { onClick: props.onCancel })}
    >
      <TagSpan {...{ state }}>#{text}</TagSpan>
      {state === 'cancel' && (
        <Cancel width="15px" height="15px" color={colors.grayScale.white} />
      )}
    </TagBoxDiv>
  );
};

export default Tag;
