import { useMutation } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';

type PostTodoRequest = {
  title: string;
  content: string;
  todoOwnerId: number;
  roomId: number;
};

export type TodoDetail = {
  id: number;
  title: string;
  content: string;
  fileUrl?: string;
  roomSlot: 'todo';
  todoOwner: {
    id: number;
    nickname: '최현오';
    profileImageUrl: 'http://k.kakaocdn.net/dn/lDgMG/btryQBZNP1S/cRVK40KmhpcD4XOcVCBf70/img_640x640.jpg';
  };
};

type PostTodoResponse = GroomApiResponse<TodoDetail>;

type PostTodo = (body: PostTodoRequest) => Promise<PostTodoResponse>;

const postTodo: PostTodo = async (body) => {
  const { data } = await customAxios.post('/todo', body);
  return data;
};

const usePostTodo = () => useMutation(postTodo);

export default usePostTodo;
