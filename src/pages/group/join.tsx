import { ChangeEventHandler, useState } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

import { TextArea, TopNavBar } from '../../components/molecules';
import ButtonFooter from '../../components/molecules/ButtonFooter';
import colors from '../../styles/colors';
import { regular16, semiBold16, semiBold20 } from '../../styles/typography';

const TOP_NAV_BAR_HEIGHT = '44px' as const;
const TEXT_AREA_BOX_HEIGHT = '348.5px' as const;

const WhiteBox = styled.div`
  padding: 20px;
  background-color: ${colors.grayScale.white};
`;

const Title = styled.h1`
  ${semiBold20}
  margin-bottom: 8px;
  color: ${colors.grayScale.gray05};
`;

const Description = styled.p`
  ${regular16}
  margin-bottom: 20px;
  color: ${colors.grayScale.gray04};
`;

const Background = styled.div`
  box-sizing: border-box;
  height: calc(100vh - ${TOP_NAV_BAR_HEIGHT} - ${TEXT_AREA_BOX_HEIGHT});
  padding-top: 16px;
  background-color: ${colors.grayScale.gray01};
`;

const SubTitle = styled.h2`
  ${semiBold16}
  margin-bottom: 8px;
  color: ${colors.grayScale.gray04};
`;

const Money = styled.strong`
  ${semiBold16}
  color: ${colors.mainColor.purple};
`;

const Join = () => {
  const [text, setText] = useState('');

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = ({
    target: { value }
  }) => setText(value);

  return (
    <>
      <TopNavBar setting={false} backURL="./detail" />
      <WhiteBox>
        <Title>자유롭게 본인을 소개해주세요!</Title>
        <Description>
          자신을 소개하고, 모임비를 결제하면
          <br />
          모임장에게 가입 신청이 완료됩니다.
        </Description>
        <TextArea
          placeholder="자신을 소개해주세요."
          value={text}
          onChange={handleChange}
        />
      </WhiteBox>
      <Background>
        <WhiteBox>
          <SubTitle>모임비</SubTitle>
          <Money>50,000원</Money>
        </WhiteBox>
        <ButtonFooter
          label="모임비 결제하기"
          disabled={false}
          onClick={() => Router.push('./join-success')}
        />
      </Background>
    </>
  );
};

export default Join;
