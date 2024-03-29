import { KeyboardEventHandler, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import { Avatar } from '../../../components/atoms';
import { GroupPage } from '../../../components/templates';
import useGetMyInformation from '../../../hooks/api/auth/getMyInformation';
import useGetDetailWithRoomId from '../../../hooks/api/room/getDetailWithRoomId';
import useGetTodo from '../../../hooks/api/todo/getTodo';
import { Todo } from '../../../hooks/api/todo/getTodo';
import usePatchOnlySlot from '../../../hooks/api/todo/patchOnlySlot';
import usePostTodo from '../../../hooks/api/todo/postTodo';
import useRoomIdParams from '../../../hooks/useRoomIdParams';
import colors from '../../../styles/colors';
import { medium12, regular16, semiBold16 } from '../../../styles/typography';
import { queryClient } from '../../_app';

type TodoColorKeys = keyof typeof colors.toDoColor;

type TodoColor = 'red' | 'green' | 'gray';

type TOdoBoardData = {
  color: TodoColor;
  title: string;
  description: string;
}[];

const TODO_BOARD_DATA: TOdoBoardData = [
  {
    color: 'red',
    title: '하기 전',
    description: '터치해서 할 일을 만들어보세요.'
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

const TodoTitle = styled.h2<{ color: TodoColor }>`
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

const TodoBoardContainer = styled.div<{ color: TodoColor }>`
  box-sizing: border-box;
  min-height: 110px;
  margin-bottom: 16px;
  padding: 16px;
  background-color: ${({ color }) =>
    colors.toDoColor[`${color}Light` as TodoColorKeys]};
  border: 1px solid ${({ color }) => colors.toDoColor[color as TodoColorKeys]};
  border-radius: 8px;

  &:last-of-type {
    margin-bottom: 39px;
  }
`;

const TodoItemContainer = styled.div`
  box-sizing: border-box;
  margin-bottom: 8px;
  background-color: ${colors.grayScale.white};
  border-radius: 8px;
  text-decoration: none;
  text-align: left;
`;

const MainContainer = styled.div`
  display: flex;
  padding: 12px 16px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.grayScale.gray01};
`;

const TodoOwnerAvatar = styled(Avatar)`
  margin-right: 12px;
`;

const TodoOwnerName = styled.span`
  ${medium12};
  display: block;
  margin-bottom: 1px;
  color: ${colors.grayScale.gray03};
`;

const TodoName = styled.span`
  ${regular16}
  color: ${colors.grayScale.gray05};
`;

const TodoInput = styled.input`
  ${regular16};
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 8px;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  color: ${colors.grayScale.gray05};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${colors.grayScale.gray03};
  }
`;

const MoveButton = styled.button<{ color: TodoColor }>`
  ${medium12};
  padding: 10px;
  background-color: ${colors.grayScale.gray01};
  color: ${({ color }) => {
    if (color === 'gray') return colors.grayScale.gray04;
    return colors.toDoColor[`${color}Text` as TodoColorKeys];
  }};
  border-radius: 10px;
`;

const ContentContainer = styled.a`
  display: flex;
  flex: 1;
  align-items: center;
  text-decoration: none;
`;

const AttachLink = styled.a`
  ${semiBold16};
  display: block;
  padding: 14px 0;
  color: ${colors.grayScale.gray04};
  text-decoration: none;
  text-align: center;
`;

type TodoBoardProps = {
  userId: number;
  color: TodoColor;
  title: string;
  description: string;
  todos: Todo[];
  roomId: number;
};

const TodoBoard = ({
  color,
  title,
  description,
  todos,
  userId,
  roomId
}: TodoBoardProps) => {
  const router = useRouter();
  const [todoTitle, setTodoTitle] = useState('');
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const { mutate } = usePostTodo();
  const { mutate: patchOnlySlot } = usePatchOnlySlot();

  useEffect(() => {
    const filteredTodos = getTodoData(todos, color);
    setFilteredTodos(filteredTodos);
  }, [todos, color]);

  const getTodoData = (todos: Todo[], color: TodoColor) => {
    const filterdTodo = todos.filter(({ roomSlot }) => {
      if (color === 'red') return roomSlot === 'todo';
      if (color === 'green') return roomSlot === 'doing';
      return roomSlot === 'done';
    });

    return filterdTodo;
  };

  const getButtonName = (color: TodoColor) => {
    if (color === 'red') return '시작';
    if (color === 'green') return '마치기';
    return '다시 하기';
  };

  const getSlotName = (color: TodoColor) => {
    if (color === 'red') return 'doing';
    if (color === 'green') return 'done';
    return 'doing';
  };

  const handleTodoSubmit: KeyboardEventHandler = ({
    key,
    nativeEvent: { isComposing }
  }) => {
    if (!todoTitle || isComposing) return;
    if (key !== 'Enter') return;
    const newTodo = {
      title: todoTitle,
      content: '',
      todoOwnerId: userId,
      roomId
    };
    mutate(newTodo, {
      onSuccess: () => {
        queryClient.invalidateQueries(['todo']);
        setTodoTitle('');
      }
    });
  };

  return (
    <TodoBoardContainer key={title} color={color}>
      <TodoTitle color={color}>{title}</TodoTitle>
      {filteredTodos.length
        ? filteredTodos.map(
            ({ id, title, profileImage, nickname, todoOwnerId }) => (
              <div key={id}>
                <TodoItemContainer>
                  <MainContainer>
                    <Link
                      passHref
                      href={
                        todoOwnerId === userId
                          ? `./todo/edit?roomId=${roomId}&todoId=${id}`
                          : router.asPath
                      }
                    >
                      <ContentContainer>
                        <TodoOwnerAvatar proptype="image" src={profileImage} />
                        <div>
                          <TodoOwnerName>
                            {nickname || '담당자 없음'}
                          </TodoOwnerName>
                          <TodoName>{title}</TodoName>
                        </div>
                      </ContentContainer>
                    </Link>
                    {todoOwnerId === userId && (
                      <MoveButton
                        color={color}
                        onClick={(e) => {
                          e.stopPropagation();
                          patchOnlySlot({
                            id,
                            roomSlot: getSlotName(color)
                          });
                        }}
                      >
                        {getButtonName(color)}
                      </MoveButton>
                    )}
                  </MainContainer>
                  {color === 'gray' && (
                    <Link
                      passHref
                      href={`./todo/attachment?roomId=${roomId}&todoId=${id}`}
                    >
                      <AttachLink>
                        {todoOwnerId === userId ? '산출물 등록' : '산출물 보기'}
                      </AttachLink>
                    </Link>
                  )}
                </TodoItemContainer>
              </div>
            )
          )
        : color === 'red' || <TodoDescription>{description}</TodoDescription>}
      {color === 'red' && (
        <TodoInput
          placeholder="할 일이 있나요?"
          type="text"
          value={todoTitle}
          onChange={({ target: { value } }) => setTodoTitle(value)}
          onKeyDown={handleTodoSubmit}
        />
      )}
    </TodoBoardContainer>
  );
};

const Todo = () => {
  const roomId = useRoomIdParams();
  const {
    data: myInformatin,
    isLoading: isMyInformatinLoading,
    isError: isMyInformationError
  } = useGetMyInformation();
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

  if (isGroupDetailLoading) return <div>그룹 상세 로딩중...</div>;
  if (isGroupDetailError) return <div>그룹 상세 로딩 에러!</div>;
  if (groupDetail === undefined) return <div>그룹 상세 데이터 오류!</div>;
  if (isTodoLoading) return <div>할 일 로딩중...</div>;
  if (isTodoError) return <div>할 일 로딩 에러!</div>;
  if (todoData === undefined) return <div>할 일 데이터 오류!</div>;
  if (isMyInformatinLoading) return <div>내 정보 로딩중...</div>;
  if (isMyInformationError) return <div>내 정보 로딩 에러!</div>;
  if (myInformatin === undefined) return <div>내 정보 데이터 오류!</div>;

  return (
    <GroupPage
      roomName={groupDetail.name}
      roomId={roomId}
      selectedTabIndex={2}
      // TODO: TabIndex constant로 빼기
    >
      {/* TODO: 할 일 서랍 만들어지면 SubTitle 빼기 */}
      <SubTitle>할 일 보드</SubTitle>
      {TODO_BOARD_DATA.map(({ color, title, description }) => (
        <TodoBoard
          key={color}
          userId={myInformatin.id}
          todos={todoData.todoList}
          {...{ color, title, description, roomId }}
        />
      ))}
    </GroupPage>
  );
};

export default Todo;
