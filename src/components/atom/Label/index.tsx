import { LabelSpan } from './styled';

type Props = {
  text: string;
};

const Label = ({ text }: Props) => {
  return <LabelSpan>{text}</LabelSpan>;
};

export default Label;
