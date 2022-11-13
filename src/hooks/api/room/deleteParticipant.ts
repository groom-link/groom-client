import { useMutation } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';
import { queryClient } from '../../../pages/_app';

type DeleteParticipantRequest = {
  roomId: number;
  userId: number;
};

type DeleteParticipantResponse = GroomApiResponse<number>;

type DeleteParticipant = (
  body: DeleteParticipantRequest
) => Promise<DeleteParticipantResponse>;

const deleteParticipant: DeleteParticipant = async (body) => {
  const { data } = await customAxios.delete('/room/participant', {
    data: body
  });
  return data;
};

const useDeleteParticipant = () =>
  useMutation(deleteParticipant, {
    onSuccess: () => {
      queryClient.invalidateQueries(['getDetail']);
    }
  });

export default useDeleteParticipant;
