import styled from '@emotion/styled';

import { CheckCircle } from '../../components/atoms/icons';
import { MeetingCard } from '../../components/molecules';
import { GroupPage } from '../../components/templates';
import Image from '../../components/utils/Image';
import { useRoomIdParams } from '../../hooks';
import useGetDetailWithRoomId from '../../hooks/api/room/getDetailWithRoomId';
import useGetTeamSchedules from '../../hooks/api/teamSchedule/getSchedules';
import useGetTodo from '../../hooks/api/todo/getTodo';
import usePatchTodo from '../../hooks/api/todo/patchTodo';
import colors from '../../styles/colors';
import { regular16, semiBold16 } from '../../styles/typography';

export type Participant = {
  id: number;
  URL: string;
};

const SubTitle = styled.h2`
  ${semiBold16};
  color: ${colors.grayScale.gray04};

  &:not(:first-of-type) {
    margin-top: 16px;
  }
`;

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

const MyTodo = styled.div`
  ${regular16}
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  color: ${colors.grayScale.gray05};
  background-color: ${colors.grayScale.white};
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
  const {
    data: todoData,
    isLoading: isTodoLoading,
    isError: isTodoError
  } = useGetTodo({ roomId });
  const { mutate: patchTodo } = usePatchTodo();

  if (isSchedulesLoading) return <div>스케쥴 로딩중...</div>;
  if (isSchedulesError) return <div>스케쥴 로딩 에러!</div>;
  if (schedules === undefined) return <div>스케쥴 데이터 오류!</div>;
  if (isGroupDetailLoading) return <div>그룹 상세 로딩중...</div>;
  if (isGroupDetailError) return <div>그룹 상세 로딩 에러!</div>;
  if (groupDetail === undefined) return <div>그룹 상세 데이터 오류!</div>;
  if (isTodoLoading) return <div>할 일 로딩중...</div>;
  if (isTodoError) return <div>할 일 로딩 에러!</div>;
  if (todoData === undefined) return <div>할 일 데이터 오류!</div>;

  const { teamScheduleList } = schedules;

  return (
    <GroupPage roomId={roomId} selectedTabIndex={0}>
      {!!todoData.todoList.length && (
        <>
          <SubTitle>내 할 일</SubTitle>
          {todoData.todoList.map(({ id, title }) => (
            <MyTodo key={id}>
              <span>{title}</span>
              <CheckCircle width="30px" color={colors.mainColor.purple} />
            </MyTodo>
          ))}
        </>
      )}
      {!!teamScheduleList.length && (
        <>
          <SubTitle>가까운 회의 일정</SubTitle>
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
                {...{ id, title, address, startTime, profiles }}
              />
            )
          )}
        </>
      )}
      {!!teamScheduleList.length || !!todoData.todoList.length || (
        <>
          <LogoContainer>
            <Image
              src="/illustrations/Ghost.png"
              width="150"
              height="150"
              alt="유령 그림"
            />
          </LogoContainer>
          <EmptyDescription>
            할 일도 없고 회의도 없어요.
            <br />
            뭐라도 해보세요!
          </EmptyDescription>
        </>
      )}
    </GroupPage>
  );
};

export default Home;
