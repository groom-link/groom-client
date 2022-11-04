import Router from 'next/router';

import { GROUP_NAME_MOCK } from '../../../__mocks__';
import { MeetingCard } from '../../../components/molecules';
import ButtonFooter from '../../../components/molecules/ButtonFooter';
import { GroupPage } from '../../../components/templates';
import useGetTeamSchedules from '../../../hooks/api/team-schedule/getSchedules';

const Meeting = () => {
  const handleClickFooterButton = () => Router.push('./meeting/suggestion');
  const {
    data: schedules,
    isLoading: isSchedulesLoading,
    isError: isSchedulesError
  } = useGetTeamSchedules({ roomId: 66 });
  // TODO: roomId 나중에 API로부터 받아오도록 수정합니다.

  if (isSchedulesLoading) return <div>스케쥴 로딩중...</div>;
  if (isSchedulesError) return <div>스케쥴 로딩 에러!</div>;
  if (schedules === undefined) return <div>스케쥴 데이터 오류!</div>;

  const { teamScheduleList } = schedules;

  return (
    <>
      <GroupPage groupName={GROUP_NAME_MOCK} selectedTabIndex={1}>
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
              {...{
                title,
                address,
                startTime,
                profiles
              }}
              editLink="./meeting"
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
