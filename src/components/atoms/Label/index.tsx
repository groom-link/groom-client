import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { medium12 } from '../../../styles/typography';

type Props = {
  className?: string;
  children: string;
  marginBottom: '4px' | '8px';
};

const LabelText = styled.span<Pick<Props, 'marginBottom'>>`
  ${medium12}
  display: block;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  color: ${colors.grayScale.gray05};
`;

const Label = ({ children, marginBottom, className }: Props) => {
  return <LabelText {...{ marginBottom, className }}>{children}</LabelText>;
};

export default Label;
