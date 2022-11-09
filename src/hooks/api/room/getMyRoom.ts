import { useQuery } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';

type GetMyRoomResponse = GroomApiResponse<{
  roomDtoList: Room[];
  page: number;
  last: true;
}>;

type GetMyRoom = () => Promise<GetMyRoomResponse>;

const GetMyRoom: GetMyRoom = async () => {
  const { data } = await customAxios.get('/room/me');
  return data;
};

const useGetMyRoom = () =>
  useQuery(['getMyRoom'], () => GetMyRoom(), { select: (data) => data.data });

export default useGetMyRoom;
