import { useMutation } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';
import { queryClient } from '../../../pages/_app';

type DeleteRoomResponse = GroomApiResponse<number>;

type DeleteRoom = (id: number) => Promise<DeleteRoomResponse>;

const deleteRoom: DeleteRoom = async (id) => {
  const { data } = await customAxios.delete(`/room/${id}`);
  return data;
};

const useDeleteRoom = () =>
  useMutation(deleteRoom, {
    onSuccess: () => {
      queryClient.invalidateQueries(['getMyRoom']);
    }
  });

export default useDeleteRoom;
