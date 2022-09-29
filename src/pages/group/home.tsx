import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

import { DEMO_PROFILE_IMAGE_URL } from '../../__mocks__';
import { Avatar, Tab } from '../../components/atoms';
import { TopNavBar } from '../../components/molecules';
import colors from '../../styles/colors';
import { medium12, semiBold16, semiBold20 } from '../../styles/typography';

const MEETINGS = [
  {
    id: 1,
    title: '회의 제목',
    location: '선릉역 SWM 센터 7층 회의실',
    date: '2022.09.01 (목)',
    participants: [
      DEMO_PROFILE_IMAGE_URL,
      DEMO_PROFILE_IMAGE_URL,
      DEMO_PROFILE_IMAGE_URL,
      DEMO_PROFILE_IMAGE_URL,
      DEMO_PROFILE_IMAGE_URL,
      DEMO_PROFILE_IMAGE_URL,
      DEMO_PROFILE_IMAGE_URL
    ]
  },
  {
    id: 2,
    title: '회의 제목',
    location: '선릉역 SWM 센터 7층 회의실',
    date: '2022.09.01 (목)',
    participants: [
      DEMO_PROFILE_IMAGE_URL,
      DEMO_PROFILE_IMAGE_URL,
      DEMO_PROFILE_IMAGE_URL,
      DEMO_PROFILE_IMAGE_URL
    ]
  },
  {
    id: 3,
    title: '회의 제목',
    location: '선릉역 SWM 센터 7층 회의실',
    date: '2022.09.01 (목)',
    participants: [
      DEMO_PROFILE_IMAGE_URL,
      DEMO_PROFILE_IMAGE_URL,
      DEMO_PROFILE_IMAGE_URL,
      DEMO_PROFILE_IMAGE_URL,
      DEMO_PROFILE_IMAGE_URL,
      DEMO_PROFILE_IMAGE_URL,
      DEMO_PROFILE_IMAGE_URL,
      DEMO_PROFILE_IMAGE_URL,
      DEMO_PROFILE_IMAGE_URL,
      DEMO_PROFILE_IMAGE_URL,
      DEMO_PROFILE_IMAGE_URL,
      DEMO_PROFILE_IMAGE_URL,
      DEMO_PROFILE_IMAGE_URL
    ]
  }
];

type MeetingCardProps = {
  title: string;
  location: string;
  date: string;
  participants: string[];
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

const MoreProfile = styled.span`
  ${semiBold16}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: ${colors.mainColor.navy};
  background-color: ${colors.grayScale.gray01};
`;

const MeetingCard = ({
  title,
  location,
  date,
  participants
}: MeetingCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [numberOfOverflow, setNumberOfOverflow] = useState(0);
  const [participantsToShow, setParticipantsToShow] = useState<string[]>([]);

  useEffect(() => {
    const numberOfParticipants = participants.length;
    const profileImageWidth = 44 + 8; // 44px: width of profile image, 8px: margin-right
    const cardWidth = cardRef.current?.clientWidth ?? 0;
    const cardPadding = 24; // 24px: padding of card
    const numbeofCanbeShown = Math.floor(
      (cardWidth - cardPadding) / profileImageWidth
    );
    if (numberOfParticipants > numbeofCanbeShown) {
      const numberOfOverflow = numberOfParticipants - numbeofCanbeShown;
      setParticipantsToShow(participants.slice(0, numbeofCanbeShown - 1));
      setNumberOfOverflow(numberOfOverflow);
      return;
    }
    setParticipantsToShow(participants);
  }, [participants, numberOfOverflow, cardRef]);

  return (
    <Card>
      <MeetingTitle>{title}</MeetingTitle>
      <MeetingLocation>{location}</MeetingLocation>
      <MeetingDate>{date}</MeetingDate>
      <ProfileImageContainer ref={cardRef}>
        {participantsToShow.map((participant) => (
          <ProfileImage key={participant} src={participant} />
        ))}
        {numberOfOverflow !== 0 && (
          <MoreProfile>+{numberOfOverflow}</MoreProfile>
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
      <TopNavBar backURL="/home" setting={true} settingURL="" />
      <GroupName>그룹 이름</GroupName>
      <NavigationBox>
        <Tab isSelected={true}>홈</Tab>
        <Tab isSelected={false}>회의 시간</Tab>
        <Tab isSelected={false}>초대하기</Tab>
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
