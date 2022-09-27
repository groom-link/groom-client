import { ChangeEventHandler, useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import styled from '@emotion/styled';

import { DEMO_GROUP_IMAGE_URL } from '../__mocks__';
import { Button, Logo, TextButton } from '../components/atoms';
import { NotificationOff, NotificationOn } from '../components/atoms/icons';
import {
  Tab,
  TextInput,
  ThumbnailList,
  TimerPopup
} from '../components/molecules';
import colors from '../styles/colors';
import { regular16, semiBold16, semiBold24 } from '../styles/typography';

const HEADER_HEIGHT = '136px' as const;

const GROUPS = [
  {
    id: 1,
    profileImageURL: DEMO_GROUP_IMAGE_URL,
    title: '소마 개발 그룹',
    numberOfMembers: 3,
    numberOfMyTodos: 2,
    tags: ['#태그1', '#태그2', '#태그3'],
    nearMeeting: {
      title: '개발 모임',
      location: '서울시 강남구 선릉역 4번 출구',
      date: '2022.06.17(목)'
    }
  },
  {
    id: 2,
    profileImageURL: DEMO_GROUP_IMAGE_URL,
    title:
      '소마 개발 그룹소마 개발 그룹소마 개발 그룹소마 개발 그룹소마 개발 그룹소마 개발 그룹',
    numberOfMembers: 3,
    numberOfMyTodos: 2,
    tags: ['#태그1', '#태그2', '#태그3'],
    nearMeeting: {
      title: '개발 모임개발 모임개발 모임개발 모임개발 모임개발 모임',
      location:
        '서울시 강남구 선릉역 4번 출구서울시 강남구 선릉역 4번 출구서울시 강남구 선릉역 4번 출구서울시 강남구 선릉역 4번 출구',
      date: '2022.06.17(목)'
    }
  },
  {
    id: 3,
    profileImageURL: DEMO_GROUP_IMAGE_URL,
    title: '소마 개발 그룹',
    numberOfMembers: 3,
    numberOfMyTodos: 2,
    tags: ['#태그1', '#태그2', '#태그3'],
    nearMeeting: null
  },
  {
    id: 4,
    profileImageURL: DEMO_GROUP_IMAGE_URL,
    title: '소마 개발 그룹',
    numberOfMembers: 3,
    numberOfMyTodos: 2,
    tags: ['#태그1', '#태그2', '#태그3'],
    nearMeeting: null
  },
  {
    id: 5,
    profileImageURL: DEMO_GROUP_IMAGE_URL,
    title: '소마 개발 그룹',
    numberOfMembers: 3,
    numberOfMyTodos: 2,
    tags: ['#태그1', '#태그2', '#태그3'],
    nearMeeting: null
  }
];

const Background = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  padding: 152px 20px 100px;
  background-color: ${colors.grayScale.gray01};
`;

const Header = styled.header`
  position: fixed;
  z-index: 1;
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

const LinkContainer = styled.a`
  text-decoration: none;
`;

const TemporaryLogo = styled(Logo)`
  margin-top: 100px;
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

const EmptyDescription = styled.span`
  margin-top: 16px;
  ${regular16}
  text-align: center;
  color: ${colors.grayScale.gray04};
`;

const GroupContainer = styled.div`
  width: 100%;
`;

const GroupType = styled.h2`
  ${semiBold16}
  margin-bottom: 12px;
  color: ${colors.grayScale.gray04};
`;

const GroupCard = styled(ThumbnailList)`
  margin-bottom: 32px;
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
  const [searchText, setSearchText] = useState('');
  const [hasNotification, setHasNotification] = useState(true); // TODO: 알림 존재 여부 API 연동하기.
  const [isGroup, setIsGroup] = useState(false);
  const [isDisplayTimer, setIsDisplayTimer] = useState(false); // TODO: 서버에서 푸쉬 메시지 받아서 타이머 켜기.

  useEffect(() => {
    setIsGroup(Router.asPath.includes('group'));
  }, []);

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => setSearchText(value);

  const handleJoinClick = () => Router.push('/group/detail');

  return (
    <>
      <Background>
        <Header>
          <TopBox>
            <Title>내 모임</Title>
            <Link href="/notifications">
              <a>
                {hasNotification ? (
                  <NotificationOn width="36px" />
                ) : (
                  <NotificationOff width="36px" />
                )}
              </a>
            </Link>
          </TopBox>
          <BottomBox>
            <SearchInput
              value={searchText}
              placeholder="초대코드를 입력하세요."
              onChange={handleSearchChange}
            />
            <SearchButton
              color="navy"
              disabled={false}
              onClick={handleJoinClick}
            >
              모임 가입
            </SearchButton>
          </BottomBox>
        </Header>
        {isDisplayTimer && (
          <Link href="/group/timer-map">
            <LinkContainer>
              <TimerPopup type="normal" groupName="소마 그룹" timer="10:30" />
            </LinkContainer>
          </Link>
        )}
        {isGroup ? (
          <GroupContainer>
            <GroupType>가입된 모임</GroupType>
            {GROUPS.map(
              ({
                id,
                profileImageURL,
                title,
                numberOfMembers,
                numberOfMyTodos,
                tags,
                nearMeeting
              }) => (
                <Link href="/group/home" key={id}>
                  <LinkContainer>
                    <GroupCard
                      {...{
                        profileImageURL,
                        title,
                        numberOfMembers,
                        numberOfMyTodos,
                        tags,
                        nearMeeting
                      }}
                    />
                  </LinkContainer>
                </Link>
              )
            )}
          </GroupContainer>
        ) : (
          <>
            <TemporaryLogo />
            <EmptyDescription>
              새 모임을 만들거나
              <br />
              초대 코드를 입력하세요!
            </EmptyDescription>
          </>
        )}
        <MakeGroupButton
          size="medium"
          disabled={false}
          color="purple"
          onClick={() => Router.push('/group/make-form-basic')}
        >
          모임 만들기
        </MakeGroupButton>
        <Footer activeMenu="홈" />
      </Background>
    </>
  );
};

export default Home;
