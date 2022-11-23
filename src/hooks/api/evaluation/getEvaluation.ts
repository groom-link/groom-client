import { useQuery } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';

export type Evaluation = {
  ownerId: number;
  id: number;
  nickname: string;
  profileImage: string;
  score: string;
  comment: string;
};

type GetEvaluationResponse = GroomApiResponse<Evaluation[]>;

type GetEvaluation = (todoId: number) => Promise<GetEvaluationResponse>;

const getEvaluation: GetEvaluation = async (todoId) => {
  const { data } = await customAxios.get(`/todo/evaluation/${todoId}`);
  return data;
};

const useGetEvaluation = (todoId: number) =>
  useQuery(['evaluation'], () => getEvaluation(todoId), {
    select: (data) => data.data,
    enabled: !!todoId
  });

export default useGetEvaluation;
