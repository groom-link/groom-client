import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { medium10 } from '../../../styles/typography';

type ActiveProps = {
  isActive: boolean;
};

export const ContainerDiv = styled.div`
  display: flex;
  height: 49px;
  border-top: 0.5px solid ${colors.grayScale.gray02};
`;

export const MenuBoxDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelSpan = styled.div<ActiveProps>`
  ${medium10}
  color: ${({ isActive }) =>
    isActive ? colors.grayScale.gray06 : colors.grayScale.gray04};
`;
