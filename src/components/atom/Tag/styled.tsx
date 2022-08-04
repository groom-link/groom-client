import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { medium10 } from '../../../styles/typography';

type StateProps = {
  state: 'default' | 'cancel';
};

export const TagBoxDiv = styled.div<StateProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ state }) => (state === 'cancel' ? '57px' : '40px')};
  height: 19px;
  border-radius: 8px;
  background-color: ${colors.grayScale.gray04};
`;

export const TagSpan = styled.span<StateProps>`
  ${medium10}
  margin-right: ${({ state }) => (state === 'cancel' ? '2px;' : '0')};
  color: ${colors.grayScale.white};
`;
