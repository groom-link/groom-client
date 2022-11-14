import { ReactNode } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

import colors from '../../../styles/colors';
import { semiBold20 } from '../../../styles/typography';
import { Tab } from '../../atoms';
import { TopNavBar } from '../../molecules';

type Props = {
  roomId: number;
  roomName: string;
  className?: string;
  selectedTabIndex: 0 | 1 | 2 | 3;
  children: ReactNode;
};

const TAB_INDEX = {
  FIRST: 0,
  SECOND: 1,
  THRID: 2,
  FOURTH: 3
};

const Background = styled.div`
  min-height: 100vh;
  background-color: ${colors.grayScale.gray01};
`;

const GroupName = styled.h1`
  ${semiBold20}
  display: block;
  height: 50px;
  padding-left: 20px;
  background-color: ${colors.grayScale.white};
  color: ${colors.grayScale.gray05};
  line-height: 50px;
`;

const NavigationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 56px;
  border-bottom: 1px solid ${colors.grayScale.gray02};
  background-color: ${colors.grayScale.white};
`;

const ContentBox = styled.div`
  padding: 16px 20px;
`;

const GroupPage = ({
  roomId,
  roomName,
  className,
  selectedTabIndex,
  children
}: Props) => {
  const handleBackButtonClick = () => Router.push('/home');

  return (
    <Background className={className}>
      <TopNavBar
        setting={true}
        settingURL={`/group/setting/information?roomId=${roomId}`}
        onBackButtonClick={handleBackButtonClick}
      />
      <GroupName>{roomName}</GroupName>
      <NavigationBox>
        <Tab
          isSelected={selectedTabIndex === TAB_INDEX.FIRST}
          htmlFor=""
          href={`/group?roomId=${roomId}`}
        >
          홈
        </Tab>
        <Tab
          isSelected={selectedTabIndex === TAB_INDEX.SECOND}
          htmlFor=""
          href={`/group/meeting?roomId=${roomId}`}
        >
          회의 시간
        </Tab>
        <Tab
          isSelected={selectedTabIndex === TAB_INDEX.THRID}
          htmlFor=""
          href={`/group/todo?roomId=${roomId}`}
        >
          할 일
        </Tab>
        <Tab
          isSelected={selectedTabIndex === TAB_INDEX.FOURTH}
          htmlFor=""
          // TODO: 초대 코드 복사 페이지로 이동시키기.
          href={`/group/invite?roomId=${roomId}`}
        >
          초대하기
        </Tab>
      </NavigationBox>
      <ContentBox>{children}</ContentBox>
    </Background>
  );
};

export default GroupPage;
