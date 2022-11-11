import styled from '@emotion/styled';

import { MeetingCard } from '../../components/molecules';
import { GroupPage } from '../../components/templates';
import useGetDetailWithRoomId from '../../hooks/api/room/getDetailWithRoomId';
import useGetTeamSchedules from '../../hooks/api/teamSchedule/getSchedules';
import useRoomIdParams from '../../hooks/useRoomIdParams';
import colors from '../../styles/colors';
import { semiBold16 } from '../../styles/typography';

export type Participant = {
  id: number;
  URL: string;
};

const SubTitle = styled.h2`
  ${semiBold16};
  color: ${colors.grayScale.gray04};
`;

const Home = () => {
  const roomId = useRoomIdParams();
  const {
    data: schedules,
    isLoading: isSchedulesLoading,
    isError: isSchedulesError
  } = useGetTeamSchedules({ roomId });
  const {
    data: groupDetail,
    isLoading: isGroupDetailLoading,
    isError: isGroupDetailError
  } = useGetDetailWithRoomId(roomId);

  if (isSchedulesLoading) return <div>스케쥴 로딩중...</div>;
  if (isSchedulesError) return <div>스케쥴 로딩 에러!</div>;
  if (schedules === undefined) return <div>스케쥴 데이터 오류!</div>;
  if (isGroupDetailLoading) return <div>그룹 상세 로딩중...</div>;
  if (isGroupDetailError) return <div>그룹 상세 로딩 에러!</div>;
  if (groupDetail === undefined) return <div>그룹 상세 데이터 오류!</div>;

  const { teamScheduleList } = schedules;

  return (
    <GroupPage
      roomId={roomId}
      selectedTabIndex={0}
      groupName={groupDetail.name}
    >
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
