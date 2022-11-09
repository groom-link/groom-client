import { useMutation } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';

type AddParticipantRequest = {
  roomId: number;
  userId: number;
};

type AddParticipantResponse = GroomApiResponse<number>;

type AddParticipant = (
  body: AddParticipantRequest
) => Promise<AddParticipantResponse>;

const addParticipant: AddParticipant = async (body) => {
  const { data } = await customAxios.post('/room/participant', body);
  return data;
};

const useAddParticipant = () =>
  useMutation((body: AddParticipantRequest) => addParticipant(body));

export default useAddParticipant;
