import { useMutation } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';
import { queryClient } from '../../../pages/_app';

type PostEvaluationRequest = {
  todoId: number;
  body: { score: string; comment: string };
};

type PostEvaluationResponse = GroomApiResponse<number>;

type PostEvaluation = (
  requestObject: PostEvaluationRequest
) => Promise<PostEvaluationResponse>;

const postEvaluation: PostEvaluation = async ({ todoId, body }) => {
  const { data } = await customAxios.post(`/todo/evaluation/${todoId}`, body);
  return data;
};

const usePostEvaluation = () => useMutation(postEvaluation, {
  onSuccess: () => {
    queryClient.invalidateQueries(['evaluation']);
  }
});

export default usePostEvaluation;
