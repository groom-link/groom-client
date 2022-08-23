import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { medium12 } from '../../../styles/typography';

type Props = {
  className?: string;
  text: string;
  marginBottom: '4px' | '8px';
};

const LabelSpan = styled.span<Pick<Props, 'marginBottom'>>`
  ${medium12}
  display: block;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  color: ${colors.grayScale.gray05};
`;

const Label = ({ text, marginBottom, className }: Props) => {
  return <LabelSpan {...{ marginBottom, className }}>{text}</LabelSpan>;
};

export default Label;
