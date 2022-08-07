import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { regular16 } from '../../../styles/typography';

export const StepperBoxDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 88px;
`;

export const StepValueSpan = styled.span`
  ${regular16}
  color: ${colors.grayScale.gray05};
`;
