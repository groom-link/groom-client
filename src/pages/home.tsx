import { ChangeEventHandler, useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import styled from '@emotion/styled';

import { TextButton } from '../components/atoms';
import { Add } from '../components/atoms/icons';
import {
  Dialog,
  Tab,
  TextInput,
  ThumbnailList,
  TimerPopup
} from '../components/molecules';
import Image from '../components/utils/Image';
import useGetDetailWithCode from '../hooks/api/room/getDetailWithCode';
import useGetMyRoom from '../hooks/api/room/getMyRoom';
import colors from '../styles/colors';
import {
  bold16,
  regular16,
  semiBold16,
  semiBold24
} from '../styles/typography';

const HEADER_HEIGHT = '136px' as const;

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

const LogoContainer = styled.div`
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
  margin-bottom: 12px;
`;

const FloatingButton = styled.button<{ isButtonLong: boolean }>`
  ${bold16};
  position: fixed;
  display: flex;
  align-items: center;
  min-width: ${({ isButtonLong }) => (isButtonLong ? '133px' : '56px')};
  padding: 16px;
  z-index: 1;
  bottom: 20px;
  border-radius: ${({ isButtonLong }) => (isButtonLong ? '24px' : '28px')};
  right: 10px;
  color: ${colors.grayScale.white};
  background-color: ${colors.mainColor.purple};
  transition: all 0.3s ease-out;
`;

const Footer = styled(Tab)`
  position: fixed;
  bottom: 0;
`;

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [code, setCode] = useState('');
  const [hasNotification, setHasNotification] = useState(true); // TODO: 알림 존재 여부 API 연동하기.
  const [isGroup, setIsGroup] = useState(false);
  const [isDisplayTimer, setIsDisplayTimer] = useState(false); // TODO: 서버에서 푸쉬 메시지 받아서 타이머 켜기.
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isButtonLong, setIsButtonLong] = useState(true);
  const {
    data: myRoomData,
    isLoading: isMyRoomLoading,
    isError: isMyRoomError
  } = useGetMyRoom();
  const { isError, isSuccess } = useGetDetailWithCode(code, 0);

  useEffect(() => {
    setTimeout(() => setIsButtonLong(false), 1500);
  }, []);

  useEffect(() => {
    setIsGroup(Router.asPath.includes('group'));
  }, []);

  useEffect(() => {
    if (isError) {
      setCode('');
      setIsModalOpen(true);
      return;
    }
    if (isSuccess) Router.push(`/group/join?code=${code}`);
  }, [isError, isSuccess, code]);

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => {
    setSearchText(value);
  };

  const handleJoinClick = () => {
    if (searchText === '') return;
    setCode(searchText);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (isMyRoomLoading) return <div>가입된 모임 로딩중...</div>;
  if (isMyRoomError) return <div>가입된 모임 로딩 실패</div>;
  if (myRoomData === undefined) return <div>가입된 모임 데이터 에러</div>;

  return (
    <>
      <Dialog
        isOpen={isModalOpen}
        buttonType="one"
        title="존재하지 않는 초대 코드입니다."
        description="초대 코드를 다시 확인해주세요."
        purpleButtonText="확인"
        isPurpleButtonDisabled={false}
        onPurpleButtonClick={handleCloseModal}
      />
      <Background>
        <Header>
          <TopBox>
            <Title>내 모임</Title>
            {/* <Link href="/notifications">
              <a>
                {hasNotification ? (
                  <NotificationOn width="36px" />
                ) : (
                  <NotificationOff width="36px" />
                )}
              </a>
            </Link> */}
            {/* TODO: 알람 API 추가하기. */}
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
        {myRoomData ? (
          <GroupContainer>
            <GroupType>가입된 모임</GroupType>
            {myRoomData.roomDtoList.map(
              ({ id, mainImageUrl, name, nowPeopleNumber }) => (
                <Link href={`/group?roomId=${id}`} key={id}>
                  <LinkContainer>
                    <GroupCard
                      {...{
                        profileImageURL: mainImageUrl,
                        title: name,
                        numberOfMembers: nowPeopleNumber,
                        numberOfMyTodos: 0,
                        tags: []
                      }}
                    />
                  </LinkContainer>
                </Link>
              )
            )}
          </GroupContainer>
        ) : (
          <>
            <LogoContainer>
              <Image
                src="/illustrations/Ghost.png"
                width="150"
                height="150"
                alt="유령 그림"
              />
            </LogoContainer>
            <EmptyDescription>
              새 모임을 만들거나
              <br />
              초대 코드를 입력하세요!
            </EmptyDescription>
          </>
        )}
        <FloatingButton
          isButtonLong={isButtonLong}
          onClick={() => Router.push('/group/add/basic')}
        >
          <Add width="24px" color={colors.grayScale.white} />
          {isButtonLong && '모임 만들기'}
        </FloatingButton>

        {/* <Footer activeMenu="홈" /> */}
        {/* TODO: 다른 메뉴 추가되면 푸터 넣기. */}
      </Background>
    </>
  );
};

export default Home;
