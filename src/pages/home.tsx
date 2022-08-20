import styled from '@emotion/styled';

import { NotificationOff } from '../components/atoms/icons';
import colors from '../styles/colors';
import { regular16, semiBold24 } from '../styles/typography';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.grayScale.gray01};
`;

const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 136px;
  padding: 16px 20px 20px;
  background-color: ${colors.grayScale.white};
`;

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.h1`
  ${semiBold24}
  color: ${colors.grayScale.gray06};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  margin-top: 120px;
  border: 1px solid ${colors.grayScale.gray04};
  color: ${colors.grayScale.gray04};
  font-size: 40px;
`;

const EmptyDescription = styled.span`
  margin-top: 16px;
  ${regular16}
  text-align: center;
  color: ${colors.grayScale.gray04};
`;

const Home = () => {
  return (
    <Background>
      <Header>
        <TopBox>
          <Title>내 모임</Title>
          <NotificationOff width="36px" height="36px" />
        </TopBox>
      </Header>
      <Logo>GRoom</Logo>
      <EmptyDescription>
        새 모임을 만들거나
        <br />
        초대 코드를 입력하세요!
      </EmptyDescription>
    </Background>
  );
};

export default Home;
