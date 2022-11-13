import { useMutation } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';
import { queryClient } from '../../../pages/_app';
import { RoomDetail } from './getDetailWithRoomId';

type PatchRoomRequest = {
  id: number;
  name: string;
  description: string;
  mainImageUrl: string;
  maxPeople: number;
};

type PatchRoomResponse = GroomApiResponse<RoomDetail>;

type PatchRoom = (body: PatchRoomRequest) => Promise<PatchRoomResponse>;

const patchRoom: PatchRoom = async (body) => {
  const { data } = await customAxios.patch('/room', body);
  return data;
};

const usePatchRoom = () =>
  useMutation(patchRoom, {
    onSuccess: () => {
      queryClient.invalidateQueries(['getDetail']);
    }
  });

export default usePatchRoom;
