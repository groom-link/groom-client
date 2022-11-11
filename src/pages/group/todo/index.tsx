import styled from '@emotion/styled';

import { GroupPage } from '../../../components/templates';
import useGetDetailWithRoomId from '../../../hooks/api/room/getDetailWithRoomId';
import useRoomIdParams from '../../../hooks/useRoomIdParams';
import colors from '../../../styles/colors';
import { medium12, semiBold16 } from '../../../styles/typography';

type TodoColorKeys = keyof typeof colors.toDoColor;

type TodoColorProps = 'red' | 'green' | 'gray';

type TOdoBoardData = {
  color: TodoColorProps;
  title: string;
  description: string;
}[];

const TODO_BOARD_DATA: TOdoBoardData = [
  {
    color: 'red',
    title: '하기 전',
    description: '“할 일 서랍"에 할 일을 추가하세요.'
  },
  {
    color: 'green',
    title: '하는 중',
    description: '진행 중인 할 일이 없습니다.'
  },
  {
    color: 'gray',
    title: '끝난 일',
    description: '완료된 할 일이 없습니다.'
  }
];

const SubTitle = styled.h2`
  ${semiBold16};
  margin-bottom: 16px;
  color: ${colors.grayScale.gray04};
`;

const TodoTitle = styled.h2<{ color: TodoColorProps }>`
  ${medium12}
  display: block;
  margin-bottom: 8px;
  color: ${({ color }) => colors.toDoColor[`${color}Text` as TodoColorKeys]};
`;

const TodoDescription = styled.span`
  ${medium12}
  display: block;
  padding: 16px;
  text-align: center;
  color: ${colors.grayScale.gray03};
`;

const TodoBoard = styled.div<{ color: TodoColorProps }>`
  box-sizing: border-box;
  margin-bottom: 16px;
  padding: 16px;
  background-color: ${({ color }) =>
    colors.toDoColor[`${color}Light` as TodoColorKeys]};
  border: 1px solid ${({ color }) => colors.toDoColor[color as TodoColorKeys]};
  border-radius: 8px;
`;

const Todo = () => {
  const roomId = useRoomIdParams();
  const {
    data: groupDetail,
    isLoading: isGroupDetailLoading,
    isError: isGroupDetailError
  } = useGetDetailWithRoomId(roomId);

  if (isGroupDetailLoading) return <div>그룹 상세 로딩중...</div>;
  if (isGroupDetailError) return <div>그룹 상세 로딩 에러!</div>;
  if (groupDetail === undefined) return <div>그룹 상세 데이터 오류!</div>;

  return (
    <GroupPage
      roomId={roomId}
      groupName={groupDetail.name}
      selectedTabIndex={2}
      // TODO: TabIndex constant로 빼기
    >
      {/* TODO: 할 일 서랍 만들어지면 SubTitle 빼기 */}
      <SubTitle>할 일 보드</SubTitle>
      {TODO_BOARD_DATA.map(({ color, title, description }) => (
        <TodoBoard key={title} color={color}>
          <TodoTitle color={color}>시작 전</TodoTitle>
          <TodoDescription>{description}</TodoDescription>
        </TodoBoard>
      ))}
    </GroupPage>
  );
};

export default Todo;
