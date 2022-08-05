import { LabelSpan } from './styled';

type Props = {
  text: string;
  marginBottom: '4px' | '8px';
};

const Label = ({ text, marginBottom }: Props) => {
  return <LabelSpan {...{ marginBottom }}>{text}</LabelSpan>;
};

export default Label;
