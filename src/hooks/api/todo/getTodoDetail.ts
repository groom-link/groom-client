import { useQuery } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';
import { TodoDetail } from './postTodo';

type GetTodoDetailResponse = GroomApiResponse<TodoDetail>;

type GetTodoDetail = (id: number) => Promise<GetTodoDetailResponse>;

const getTodoDetail: GetTodoDetail = async (id) => {
  const { data } = await customAxios.get(`/todo/${id}`);
  return data;
};

const useGetTodoDetail = (id: number) =>
  useQuery(['todoDetail', {todoId: id}], () => getTodoDetail(id), {
    select: (data) => data.data,
    enabled: !!id
  });

export default useGetTodoDetail;
