import { useMutation } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';
import { queryClient } from '../../../pages/_app';

type DeleteTodoResponse = GroomApiResponse<number>;

type DeleteTodo = (id: number) => Promise<DeleteTodoResponse>;

const deleteTodo: DeleteTodo = async (id) => {
  const { data } = await customAxios.delete(`/todo/${id}`);
  return data;
};

const useDeleteTodo = () => useMutation(deleteTodo, {
  onSuccess: () => queryClient.invalidateQueries(['todo']),
});

export default useDeleteTodo;
