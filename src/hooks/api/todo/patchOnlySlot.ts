import { useMutation } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';
import { queryClient } from '../../../pages/_app';
import { RoomSlot } from './getTodo';
import { TodoDetail } from './postTodo';

type PatchOnlySlotRequest = {
  id: number;
  roomSlot: RoomSlot;
};

type PatchOnlySlotResponse = GroomApiResponse<TodoDetail>;

type PatchOnlySlot = (
  body: PatchOnlySlotRequest
) => Promise<PatchOnlySlotResponse>;

const patchOnlySlot: PatchOnlySlot = async (body) => {
  const { data } = await customAxios.patch('/todo/roomSlot', body);
  return data;
};

const usePatchOnlySlot = () =>
  useMutation(patchOnlySlot, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todo']);
    }
  });

export default usePatchOnlySlot;
