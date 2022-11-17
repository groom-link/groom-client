import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { shadow01 } from '../../../styles/mixins';
import { bold16, medium12, semiBold16 } from '../../../styles/typography';
import { Button } from '../../atoms';
import { Clock } from '../../atoms/icons';

const PopupBox = styled.div`
  ${shadow01}
  box-sizing: border-box;
  width: 374px;
  max-width: 90vw;
  padding: 16px 20px;
  border-radius: 8px;
  background-color: ${colors.grayScale.white};
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextBox = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  word-break: keep-all;
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
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: keep-all;
`;

const Description = styled.span`
  ${medium12}
  color: ${colors.grayScale.gray03};
`;

const Timer = styled.span`
  ${bold16}
  color: ${colors.mainColor.purple};
`;

const ClearTimerButton = styled(Button)`
  margin-top: 12px;
`;

const ButtonDescription = styled.span`
  ${medium12}
  display: block;
  margin-top: 12px;
  font-weight: 500;
  text-align: center;
  color: ${colors.grayScale.gray04};
`;

type DefaultProps = {
  className?: string;
  groupName: string;
  timer: string;
};

type NormalProps = {
  type: 'normal';
} & DefaultProps;

type ButtonProps = {
  type: 'button';
  onClick: () => void;
  disabled: boolean;
} & DefaultProps;

type Props = NormalProps | ButtonProps;

const TimerPopup = (props: Props) => {
  const { className, groupName, timer, type } = props;
  return (
    <PopupBox className={className}>
      <Top>
        <TextBox>
          <Title>{groupName}</Title>
          <Warning>
            {timer === '대기중'
              ? '회의가 시작하려면 한참 남았어요.'
              : '회의 시간까지 얼마 남지 않았어요!'}
          </Warning>
          {/* <Description>지각 시 기여도 10% 차감 예정입니다.</Description> */}
          {/* TODO: 패널티 관련 정책 수립되면 설명 문구 추가하기. */}
        </TextBox>
        <TimerBox>
          <Clock width="24px" color={colors.mainColor.purple} />
          <Timer>{timer}</Timer>
        </TimerBox>
      </Top>
      {type === 'button' && (
        <>
          <ClearTimerButton
            size="medium"
            disabled={props.disabled}
            color={'purple'}
            onClick={props.onClick}
          >
            타이머 해제
          </ClearTimerButton>
          <ButtonDescription>
            모임 장소 50m 이내에서 해제 가능합니다.
          </ButtonDescription>
        </>
      )}
    </PopupBox>
  );
};

export default TimerPopup;
