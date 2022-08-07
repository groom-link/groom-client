import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { regular16 } from '../../../styles/typography';

export const StepperBoxDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 88px;
`;

export const StepButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 4px;
  background-color: ${colors.mainColor.navy};
`;

export const StepValueSpan = styled.span`
  ${regular16}
  color: ${colors.grayScale.gray05};
`;
