import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { shadow01 } from '../../../styles/mixins';
import { bold16, medium12, semiBold16 } from '../../../styles/typography';
import { Clock } from '../../atoms/icons';

const PopupBox = styled.div`
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

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const Title = styled.b`
  ${bold16}
  color: ${colors.grayScale.gray05};
`;

const Warning = styled.strong`
  ${semiBold16}
  color: ${colors.grayScale.gray04};
`;

const TimerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Description = styled.span`
  ${medium12}
  color: ${colors.grayScale.gray03};
`;

const Timer = styled.span`
  ${bold16}
  color: ${colors.mainColor.purple};
`;

type Props = {
  groupName: string;
  timer: string;
};

const TimerPopup = ({ groupName, timer }: Props) => {
  return (
    <PopupBox>
      <TextBox>
        <Title>{groupName}</Title>
        <Warning>회의 시간까지 얼마 남지 않았어요!</Warning>
        <Description>지각 시 기여도 10% 차감 예정입니다.</Description>
      </TextBox>
      <TimerBox>
        <Clock width="24px" height="24px" color={colors.mainColor.purple} />
        <Timer>{timer}</Timer>
      </TimerBox>
    </PopupBox>
  );
};

export default TimerPopup;
