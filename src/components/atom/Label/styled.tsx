import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { medium12 } from '../../../styles/typography';

type LabelSpanProps = {
  marginBottom: '4px' | '8px';
};

export const LabelSpan = styled.span<LabelSpanProps>`
  ${medium12}
  display: block;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  color: ${colors.grayScale.gray05};
`;
