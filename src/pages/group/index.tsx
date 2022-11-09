import { useEffect, useState } from 'react';
import Router from 'next/router';
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
  const [roomId, setRoomId] = useState(0);
  const {
    data: schedules,
    isLoading: isSchedulesLoading,
    isError: isSchedulesError
  } = useGetTeamSchedules({ roomId });

  useEffect(() => {
    const { roomId } = Router.query;
    if (!roomId) return;
    if (typeof roomId !== 'string') return;
    setRoomId(parseInt(roomId, 10));
  }, []);

  if (isSchedulesLoading) return <div>스케쥴 로딩중...</div>;
  if (isSchedulesError) return <div>스케쥴 로딩 에러!</div>;
  if (schedules === undefined) return <div>스케쥴 데이터 오류!</div>;

  const { teamScheduleList } = schedules;

  return (
    <GroupPage roomId={roomId} selectedTabIndex={0} groupName={GROUP_NAME_MOCK}>
      <SubTitle>가까운 회의 일정</SubTitle>
      {teamScheduleList.map(
        ({ id, title, meetingLocation: { address }, startTime, profiles }) => (
          <MeetingCard
            key={id}
            {...{ id, title, address, startTime, profiles }}
          />
        )
      )}
    </GroupPage>
  );
};

export default Home;
