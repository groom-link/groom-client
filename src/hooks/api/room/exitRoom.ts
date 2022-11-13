import { useMutation } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';
import { queryClient } from '../../../pages/_app';

type ExitRoomRequest = {
  roomId: number;
};

type ExitRoomResponse = GroomApiResponse<number>;

type ExitRoom = (params: ExitRoomRequest) => Promise<ExitRoomResponse>;

const exitRoom: ExitRoom = async (params) => {
  const { data } = await customAxios.delete('/room/participant/me', { params });
  return data;
};

const useExitRoom = () =>
  useMutation(exitRoom, {
    onSuccess: () => {
      queryClient.invalidateQueries(['getMyRoom']);
    }
  });

export default useExitRoom;
