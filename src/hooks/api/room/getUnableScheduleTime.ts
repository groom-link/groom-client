import { useQuery } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';

type GetUnableScheduleTimeResponse = GroomApiResponse<
  {
    id: number;
    startTime: string;
    endTime: string;
  }[]
>;

type GetUnableScheduleTime = (
  roomId: number
) => Promise<GetUnableScheduleTimeResponse>;

const getUnableScheduleTime: GetUnableScheduleTime = async (roomId: number) => {
  const { data } = await customAxios.get(`/room/${roomId}/unable-schedule`);
  return data;
};

const useGetUnableScheduleTime = (roomId: number) => {
  return useQuery(
    ['getUnableScheduleTime', roomId],
    () => getUnableScheduleTime(roomId),
    {
      select: (data) => data.data,
      enabled: roomId !== 0
    }
  );
};

export default useGetUnableScheduleTime;
