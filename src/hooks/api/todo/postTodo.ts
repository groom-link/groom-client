import { useMutation } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';
import { RoomSlot } from './getTodo';

type PostTodoRequest = {
  title: string;
  content: string;
  todoOwnerId: number;
  roomId: number;
};

type PostTodoResponse = GroomApiResponse<{
  id: number;
  title: string;
  content: string;
  fileUrl?: string;
  roomSlot: RoomSlot;
  todoOwner: {
    id: number;
    nickname: string;
    profileImageUrl: string;
  };
}>;

type PostTodo = (body: PostTodoRequest) => Promise<PostTodoResponse>;

const postTodo: PostTodo = async (body) => {
  const { data } = await customAxios.post('/todo', body);
  return data;
};

const usePostTodo = () => useMutation(postTodo);

export default usePostTodo;
