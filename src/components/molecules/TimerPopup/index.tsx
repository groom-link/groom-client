import colors from '../../../styles/colors';
import { Clock } from '../../atom/icons';
import {
  DescriptionSpan,
  PopupBoxDiv,
  TextBoxDiv,
  TimerBoxDiv,
  TimerSpan,
  TitleStrong,
  WarningStrong
} from './styled';

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
