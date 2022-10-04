import { useRef } from 'react';
import styled from '@emotion/styled';

import { DEMO_PROFILE_IMAGE_URL } from '../../__mocks__';
import { Avatar, Tab } from '../../components/atoms';
import { TopNavBar } from '../../components/molecules';
import { useAdjustNumberOfProfiles } from '../../hooks';
import colors from '../../styles/colors';
import { medium12, semiBold16, semiBold20 } from '../../styles/typography';

const MEETINGS = [
  {
    id: 1,
    title: '회의 제목',
    location: '선릉역 SWM 센터 7층 회의실',
    date: '2022.09.01 (목)',
    participants: [
      { id: 1, URL: DEMO_PROFILE_IMAGE_URL },
      { id: 2, URL: DEMO_PROFILE_IMAGE_URL },
      { id: 3, URL: DEMO_PROFILE_IMAGE_URL },
      { id: 4, URL: DEMO_PROFILE_IMAGE_URL },
      { id: 5, URL: DEMO_PROFILE_IMAGE_URL }
    ]
  },
  {
    id: 2,
    title: '회의 제목',
    location: '선릉역 SWM 센터 7층 회의실',
    date: '2022.09.01 (목)',
    participants: [
      { id: 6, URL: DEMO_PROFILE_IMAGE_URL },
      { id: 7, URL: DEMO_PROFILE_IMAGE_URL },
      { id: 8, URL: DEMO_PROFILE_IMAGE_URL },
      { id: 9, URL: DEMO_PROFILE_IMAGE_URL },
      { id: 10, URL: DEMO_PROFILE_IMAGE_URL },
      { id: 11, URL: DEMO_PROFILE_IMAGE_URL },
      { id: 12, URL: DEMO_PROFILE_IMAGE_URL },
      { id: 13, URL: DEMO_PROFILE_IMAGE_URL },
      { id: 14, URL: DEMO_PROFILE_IMAGE_URL },
      { id: 15, URL: DEMO_PROFILE_IMAGE_URL }
    ]
  },
  {
    id: 3,
    title: '회의 제목',
    location: '선릉역 SWM 센터 7층 회의실',
    date: '2022.09.01 (목)',
    participants: [
      { id: 16, URL: DEMO_PROFILE_IMAGE_URL },
      { id: 17, URL: DEMO_PROFILE_IMAGE_URL },
      { id: 18, URL: DEMO_PROFILE_IMAGE_URL }
    ]
  }
];

export type Participant = {
  id: number;
  URL: string;
};

type MeetingCardProps = {
  title: string;
  location: string;
  date: string;
  participants: Participant[];
};

const MeetingTitle = styled.h3`
  ${semiBold20}
  margin-bottom: 8px;
  color: ${colors.grayScale.gray05};
`;

const MeetingLocation = styled.span`
  ${medium12};
  display: block;
  margin-bottom: 4px;
  color: ${colors.grayScale.gray04};
`;

const MeetingDate = styled.time`
  ${medium12}
  color: ${colors.grayScale.gray03};
`;

const ProfileImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
`;

const ProfileImage = styled(Avatar)`
  margin-right: 8px;
`;

const MeetingCard = ({
  title,
  location,
  date,
  participants
}: MeetingCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { numberOfOverflow, participantsToShow } = useAdjustNumberOfProfiles({
    participants,
    cardWidth: cardRef.current?.clientWidth ?? 0
  });

  return (
    <Card>
      <MeetingTitle>{title}</MeetingTitle>
      <MeetingLocation>{location}</MeetingLocation>
      <MeetingDate>{date}</MeetingDate>
      <ProfileImageContainer ref={cardRef}>
        {participantsToShow.map(({ id, URL }) => (
          <ProfileImage proptype="image" key={id} src={URL} />
        ))}
        {numberOfOverflow !== 0 && (
          <ProfileImage proptype="more-profile" count={numberOfOverflow} />
        )}
      </ProfileImageContainer>
    </Card>
  );
};

const Background = styled.div`
  height: 100vh;
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

const CardBox = styled.div`
  padding: 16px 20px;
`;

const SubTitle = styled.h2`
  ${semiBold16};
  color: ${colors.grayScale.gray04};
`;

const Card = styled.div`
  box-sizing: border-box;
  margin-top: 12px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${colors.grayScale.white};
`;

const Home = () => {
  return (
    <Background>
      <TopNavBar backURL="/home" setting={true} settingURL="./setting" />
      <GroupName>그룹 이름</GroupName>
      <NavigationBox>
        <Tab isSelected={true} htmlFor="">
          홈
        </Tab>
        <Tab isSelected={false} htmlFor="">
          회의 시간
        </Tab>
        <Tab isSelected={false} htmlFor="">
          초대하기
        </Tab>
      </NavigationBox>
      <CardBox>
        <SubTitle>가까운 회의 일정</SubTitle>
        {MEETINGS.map(({ id, title, location, date, participants }) => (
          <MeetingCard key={id} {...{ title, location, date, participants }} />
        ))}
      </CardBox>
    </Background>
  );
};

export default Home;
