import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { shadow01 } from '../../../styles/mixins';
import { bold16, medium12, semiBold16 } from '../../../styles/typography';
import { Clock } from '../../atom/icons';

const PopupBoxDiv = styled.div`
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

const TextBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const TitleStrong = styled.b`
  ${bold16}
  color: ${colors.grayScale.gray05};
`;

const WarningStrong = styled.strong`
  ${semiBold16}
  color: ${colors.grayScale.gray04};
`;

const TimerBoxDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DescriptionSpan = styled.span`
  ${medium12}
  color: ${colors.grayScale.gray03};
`;

const TimerSpan = styled.span`
  ${bold16}
  color: ${colors.mainColor.purple};
`;

type Props = {
  groupName: string;
  timer: string;
};

const TimerPopup = ({ groupName, timer }: Props) => {
  return (
    <PopupBoxDiv>
      <TextBoxDiv>
        <TitleStrong>{groupName}</TitleStrong>
        <WarningStrong>회의 시간까지 얼마 남지 않았어요!</WarningStrong>
        <DescriptionSpan>지각 시 기여도 10% 차감 예정입니다.</DescriptionSpan>
      </TextBoxDiv>
      <TimerBoxDiv>
        <Clock width="24px" height="24px" color={colors.mainColor.purple} />
        <TimerSpan>{timer}</TimerSpan>
      </TimerBoxDiv>
    </PopupBoxDiv>
  );
};

export default TimerPopup;
