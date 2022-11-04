import styled from '@emotion/styled';

import { MeetingCard } from '../../components/molecules';
import { GroupPage } from '../../components/templates';
import useGetTeamSchedules from '../../hooks/api/teamSchedule/getSchedules';
import colors from '../../styles/colors';
import { semiBold16 } from '../../styles/typography';

const GROUP_NAME_MOCK = 'SW마에스트로 그룹';

export type Participant = {
  id: number;
  URL: string;
};

const SubTitle = styled.h2`
  ${semiBold16};
  color: ${colors.grayScale.gray04};
`;

const Home = () => {
  const {
    data: schedules,
    isLoading: isSchedulesLoading,
    isError: isSchedulesError
  } = useGetTeamSchedules({ roomId: 66 });

  if (isSchedulesLoading) return <div>스케쥴 로딩중...</div>;
  if (isSchedulesError) return <div>스케쥴 로딩 에러!</div>;
  if (schedules === undefined) return <div>스케쥴 데이터 오류!</div>;

  const { teamScheduleList } = schedules;

  return (
    <GroupPage selectedTabIndex={0} groupName={GROUP_NAME_MOCK}>
      <SubTitle>가까운 회의 일정</SubTitle>
      {teamScheduleList.map(
        ({ id, title, meetingLocation: { address }, startTime, profiles }) => (
          <MeetingCard key={id} {...{ title, address, startTime, profiles }} />
        )
      )}
    </GroupPage>
  );
};

export default Home;
