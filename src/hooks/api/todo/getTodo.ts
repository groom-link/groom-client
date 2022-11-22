import { useQuery } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';

type GetTodoRequest = {
  userId?: number;
  roomId?: number;
};

export type RoomSlot = 'todo' | 'doing' | 'done';

export type Todo = {
  id: number;
  title: string;
  content: string;
  nickname: string;
  profileImage: string;
  roomSlot: RoomSlot;
  todoOwnerId: number;
};

type GetTodoResponse = GroomApiResponse<{
  todoList: Todo[];
  page: number;
  last: boolean;
}>;

type GetTodo = (params: GetTodoRequest) => Promise<GetTodoResponse>;

const getTodo: GetTodo = async (params) => {
  const { data } = await customAxios.get('/todo', { params });
  return data;
};

const useGetTodo = (params: GetTodoRequest) =>
  useQuery(['todo'], () => getTodo(params), {
    select: (data) => data.data,
    enabled: !!params.roomId
  });

export default useGetTodo;
