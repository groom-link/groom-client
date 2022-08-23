import Router from 'next/router';
import styled from '@emotion/styled';

import {
  Stepper,
  TextArea,
  TextInput,
  TopNavBar
} from '../../components/molecules';
import ButtonFooter from '../../components/molecules/ButtonFooter';
import colors from '../../styles/colors';
import { semiBold20 } from '../../styles/typography';

const Background = styled.div`
  min-height: 100vh;
  background-color: ${colors.grayScale.gray01};
`;

const WhiteBox = styled.div`
  padding: 20px;
  background-color: ${colors.grayScale.white};

  &:not(:nth-child(2)) {
    margin-top: 16px;
  }
`;

const Title = styled.h1`
  ${semiBold20}
  margin-bottom: 12px;
  color: ${colors.grayScale.gray05};
`;

const MakeFormBasic = () => {
  return (
    <Background>
      <TopNavBar setting={false} backURL="/home" />
      <WhiteBox>
        <Title>새로운 모임을 만들어보세요.</Title>
        <TextInput
          label="모임 이름"
          placeholder="모임 이름을 입력해주세요."
          isError={false}
          value={''}
          onChange={() => console.log('Changing')}
        />
      </WhiteBox>
      <WhiteBox>
        <TextArea
          label="모임 내용"
          placeholder="예시) 저희는 OO을 하는 모임입니다."
          value={''}
          onChange={() => console.log('changing')}
        />
      </WhiteBox>
      <WhiteBox>
        <Stepper
          label="모임 구성원 수"
          value={0}
          onDecrease={() => console.log('decrease')}
          onIncrease={() => console.log('increase')}
          color="navy"
          decreaseDisabled={false}
          increaseDisabled={false}
        />
      </WhiteBox>
      <ButtonFooter
        label="다음"
        disabled={false}
        onClick={() => Router.push('./make-form-more')}
      />
    </Background>
  );
};

export default MakeFormBasic;
