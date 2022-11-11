import Router from 'next/router';

import { MeetingCard } from '../../../components/molecules';
import ButtonFooter from '../../../components/molecules/ButtonFooter';
import { GroupPage } from '../../../components/templates';
import useGetDetailWithRoomId from '../../../hooks/api/room/getDetailWithRoomId';
import useDeleteTeamSchedule from '../../../hooks/api/teamSchedule/deleteSchedule';
import useGetTeamSchedules from '../../../hooks/api/teamSchedule/getSchedules';
import useRoomIdParams from '../../../hooks/useRoomIdParams';
import { queryClient } from '../../_app';

const Meeting = () => {
  const roomId = useRoomIdParams();
  const { mutate } = useDeleteTeamSchedule();
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

  const handleClickFooterButton = () =>
    Router.push(`./meeting/suggestion?roomId=${roomId}`);

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
      groupName={groupDetail?.name}
      selectedTabIndex={1}
    >
      {teamScheduleList.map(
        ({ id, title, meetingLocation: { address }, startTime, profiles }) => (
          <MeetingCard
            key={id}
            onDeleteClick={() =>
              mutate(id, {
                onSuccess: () =>
                  queryClient.invalidateQueries(['getTeamSchedules'])
              })
            }
            {...{
              id,
              title,
              address,
              startTime,
              profiles
            }}
            editLink=" "
          />
        )
      )}
      <ButtonFooter disabled={false} onClick={handleClickFooterButton}>
        회의 만들기
      </ButtonFooter>
    </GroupPage>
  );
};

export default Meeting;
