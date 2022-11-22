import { useMutation } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';
import { queryClient } from '../../../pages/_app';

type DeleteEvaluationRequest = {
  todoId: number;
  evaluationId: number;
};

type DeleteEvaluationResponse = GroomApiResponse<number>;

type DeleteEvaluation = (
  requestObject: DeleteEvaluationRequest
) => Promise<DeleteEvaluationResponse>;

const deleteEvaluation: DeleteEvaluation = async ({ todoId, evaluationId }) => {
  const { data } = await customAxios.delete(
    `/todo/evaluation/${todoId}/${evaluationId}`
  );
  return data;
};

const useDeleteEvaluation = () =>
  useMutation(deleteEvaluation, {
    onSuccess: () => {
      queryClient.invalidateQueries(['evaluation']);
    }
  });

export default useDeleteEvaluation;
