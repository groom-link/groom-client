import styled from '@emotion/styled';

import { DEMO_PROFILE_IMAGE_URL } from '../../__mocks__';
import { Avatar } from '../../components/atoms';
import { TopNavBar } from '../../components/molecules';
import colors from '../../styles/colors';
import { medium12, semiBold16, semiBold20 } from '../../styles/typography';

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

const NavigationButton = styled.button`
  ${semiBold16}

  &:enabled {
    color: ${colors.grayScale.gray05};
  }

  &:disabled {
    color: ${colors.grayScale.gray03};
  }
`;

const Card = styled.div`
  box-sizing: border-box;
  margin-top: 12px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${colors.grayScale.white};
`;

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
  margin: 0 8px 8px 0;
`;

const MeetingCard = () => {
  return (
    <Card>
      <MeetingTitle>회의 제목</MeetingTitle>
      <MeetingLocation>선릉역 SWM 센터 7층 회의실</MeetingLocation>
      <MeetingDate>2022.09.01 (목)</MeetingDate>
      <ProfileImageContainer>
        <ProfileImage src={DEMO_PROFILE_IMAGE_URL} />
        <ProfileImage src={DEMO_PROFILE_IMAGE_URL} />
        <ProfileImage src={DEMO_PROFILE_IMAGE_URL} />
        <ProfileImage src={DEMO_PROFILE_IMAGE_URL} />
      </ProfileImageContainer>
    </Card>
  );
};

const Home = () => {
  return (
    <Background>
      <TopNavBar backURL="/home" setting={true} settingURL="" />
      <GroupName>그룹 이름</GroupName>
      <NavigationBox>
        <NavigationButton>홈</NavigationButton>
        <NavigationButton>회의 시간</NavigationButton>
        <NavigationButton>초대하기</NavigationButton>
      </NavigationBox>
      <CardBox>
        <SubTitle>가까운 회의 일정</SubTitle>
        <MeetingCard />
      </CardBox>
    </Background>
  );
};

export default Home;
