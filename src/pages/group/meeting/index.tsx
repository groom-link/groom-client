import { useEffect, useState } from 'react';
import Router from 'next/router';

import { GROUP_NAME_MOCK } from '../../../__mocks__';
import { MeetingCard } from '../../../components/molecules';
import ButtonFooter from '../../../components/molecules/ButtonFooter';
import { GroupPage } from '../../../components/templates';
import useDeleteTeamSchedule from '../../../hooks/api/teamSchedule/deleteSchedule';
import useGetTeamSchedules from '../../../hooks/api/teamSchedule/getSchedules';
import { queryClient } from '../../_app';

const Meeting = () => {
  const [roomId, setRoomId] = useState(0);
  const { mutate } = useDeleteTeamSchedule();
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
  });

  const handleClickFooterButton = () =>
    Router.push(`./meeting/suggestion?roomId=${roomId}`);

  if (isSchedulesLoading) return <div>스케쥴 로딩중...</div>;
  if (isSchedulesError) return <div>스케쥴 로딩 에러!</div>;
  if (schedules === undefined) return <div>스케쥴 데이터 오류!</div>;

  const { teamScheduleList } = schedules;

  return (
    <>
      <GroupPage
        roomId={roomId}
        groupName={GROUP_NAME_MOCK}
        selectedTabIndex={1}
      >
        {teamScheduleList.map(
          ({
            id,
            title,
            meetingLocation: { address },
            startTime,
            profiles
          }) => (
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
    </>
  );
};

export default Meeting;
