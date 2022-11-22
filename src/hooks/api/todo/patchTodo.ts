import { useMutation, useQueryClient } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';
import { TodoDetail } from './postTodo';

type Roomslot = 'todo' | 'doing' | 'done';

type PatchTodoRequest = {
  id: number;
  title: string;
  content: string;
  roomSlot: Roomslot;
  todoOwnerId: number;
  fileUrl?: string;
  fileName?: string;
};

type PatchTodoResponse = GroomApiResponse<TodoDetail>;

type PatchTodo = (body: PatchTodoRequest) => Promise<PatchTodoResponse>;

const patchTodo: PatchTodo = async (body) => {
  const { data } = await customAxios.patch('/todo', body);
  return data;
};

const usePatchTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(patchTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todo']);
      queryClient.invalidateQueries(['todoDetail']);
    }
  });
};

export default usePatchTodo;
