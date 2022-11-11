import Router from 'next/router';
import styled from '@emotion/styled';

import { MeetingCard } from '../../../components/molecules';
import ButtonFooter from '../../../components/molecules/ButtonFooter';
import { GroupPage } from '../../../components/templates';
import Image from '../../../components/utils/Image';
import { useRoomIdParams } from '../../../hooks';
import useGetDetailWithRoomId from '../../../hooks/api/room/getDetailWithRoomId';
import useDeleteTeamSchedule from '../../../hooks/api/teamSchedule/deleteSchedule';
import useGetTeamSchedules from '../../../hooks/api/teamSchedule/getSchedules';
import colors from '../../../styles/colors';
import { regular16 } from '../../../styles/typography';
import { queryClient } from '../../_app';

const LogoContainer = styled.div`
  margin-top: 100px;
  text-align: center;
`;

const EmptyDescription = styled.span`
  ${regular16}
  display: block;
  text-align: center;
  color: ${colors.grayScale.gray04};
`;

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
    <GroupPage roomId={roomId} selectedTabIndex={1}>
      {teamScheduleList.length ? (
        teamScheduleList.map(
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
        )
      ) : (
        <>
          <LogoContainer>
            <Image
              src="/illustrations/Ghost.png"
              width="150"
              height="150"
              alt="유령 그림"
            />
          </LogoContainer>
          <EmptyDescription>아무 회의도 없어요.</EmptyDescription>
        </>
      )}

      <ButtonFooter disabled={false} onClick={handleClickFooterButton}>
        회의 만들기
      </ButtonFooter>
    </GroupPage>
  );
};

export default Meeting;
