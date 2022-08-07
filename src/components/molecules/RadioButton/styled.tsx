import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { medium12 } from '../../../styles/typography';
import { RadioOff, RadioOn } from '../../atom/icons';

export const RadioLabel = styled.label`
  ${medium12}
  display: flex;
  align-items: center;
  color: ${colors.grayScale.gray04};
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const RadioOnStyled = styled(RadioOn)`
  margin-right: 4px;
`;

export const RadioOffStyled = styled(RadioOff)`
  margin-right: 4px;
`;
