import Link from 'next/link';
import styled from '@emotion/styled';

import List from '../components/atoms/List';
import { TopNavBar } from '../components/molecules';
import colors from '../styles/colors';
import { semiBold16 } from '../styles/typography';

const Background = styled.div`
  height: 100vh;
  background-color: ${colors.grayScale.gray01};
`;

const WhiteBox = styled.div`
  margin-bottom: 16px;
  padding: 12px 8px;
  background-color: ${colors.grayScale.white};

  &:last-of-type {
    margin-bottom: 20px;
  }
`;

const WithdrawalLink = styled.a`
  ${semiBold16}
  display: block;
  margin-right: 20px;
  padding: 10px 12px;
  color: ${colors.grayScale.gray04};
  text-align: right;
  text-decoration: none;
`;

const setting = () => {
  return (
    <Background>
      <TopNavBar backURL="" setting={false} />
      <WhiteBox>
        <List href="">설정</List>
        <List href="">설정</List>
      </WhiteBox>
      <WhiteBox>
        <List href="">설정</List>
        <List href="">설정</List>
      </WhiteBox>
      <WhiteBox>
        <List href="">로그아웃</List>
      </WhiteBox>
      <Link href="" passHref>
        <WithdrawalLink>회원탈퇴</WithdrawalLink>
      </Link>
    </Background>
  );
};

export default setting;
