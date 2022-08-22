import Router from 'next/router';
import styled from '@emotion/styled';

import { Button, TextButton } from '../components/atoms';
import { NotificationOff } from '../components/atoms/icons';
import { Tab, TextInput } from '../components/molecules';
import colors from '../styles/colors';
import { regular16, semiBold24 } from '../styles/typography';

const HEADER_HEIGHT = '136px' as const;

const Background = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 0 20px;
  background-color: ${colors.grayScale.gray01};
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: ${HEADER_HEIGHT};
  padding: 16px 20px 20px;
  background-color: ${colors.grayScale.white};
`;

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BottomBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
`;

const SearchInput = styled(TextInput)`
  flex: 4.5;
  margin-right: 12px;
`;

const SearchButton = styled(TextButton)`
  flex: 1;
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
  margin-top: calc(120px + ${HEADER_HEIGHT});
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

const MakeGroupButton = styled(Button)`
  position: fixed;
  bottom: 65px;
  width: calc(100% - 40px);
`;

const Footer = styled(Tab)`
  position: fixed;
  bottom: 0;
`;

const Home = () => {
  const handleJoinClick = () => Router.push('/group/detail');

  return (
    <>
      <Background>
        <Header>
          <TopBox>
            <Title>내 모임</Title>
            <NotificationOff width="36px" height="36px" />
          </TopBox>
          <BottomBox>
            <SearchInput
              isError={false}
              value={''}
              placeholder="초대코드를 입력하세요."
              onChange={() => console.log()}
            />
            <SearchButton
              color="navy"
              label="모임 가입"
              isDisabled={false}
              onClick={handleJoinClick}
            />
          </BottomBox>
        </Header>
        <Logo>GRoom</Logo>
        <EmptyDescription>
          새 모임을 만들거나
          <br />
          초대 코드를 입력하세요!
        </EmptyDescription>
        <MakeGroupButton
          label="모임 만들기"
          size="medium"
          disabled={false}
          color="purple"
          onClick={() => console.log('clicked')}
        />
        <Footer activeMenu="홈" />
      </Background>
    </>
  );
};

export default Home;
