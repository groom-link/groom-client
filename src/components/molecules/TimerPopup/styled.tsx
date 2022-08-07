import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { shadow01 } from '../../../styles/mixins';
import { bold16, medium12, semiBold16 } from '../../../styles/typography';

export const PopupBoxDiv = styled.div`
  ${shadow01}
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 374px;
  height: 100px;
  padding: 16px 20px;
  border-radius: 8px;
  background-color: ${colors.grayScale.white};
`;

export const TextBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const TitleStrong = styled.b`
  ${bold16}
  color: ${colors.grayScale.gray05};
`;

export const WarningStrong = styled.strong`
  ${semiBold16}
  color: ${colors.grayScale.gray04};
`;

export const TimerBoxDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DescriptionSpan = styled.span`
  ${medium12}
  color: ${colors.grayScale.gray03};
`;

export const TimerSpan = styled.span`
  ${bold16}
  color: ${colors.mainColor.purple};
`;
