import { useQuery } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';

type GetScheduleDetailResponse = GroomApiResponse<{
  title: string;
  startTime: string;
  endTime: string;
  meetingLocation: {
    address: string;
    longitude: string;
    latitude: string;
  };
  participants: {
    id: number;
    username: string;
    profileImage: string;
  }[];
}>;

type GetScheduleDetail = (
  scheduleId: number
) => Promise<GetScheduleDetailResponse>;

const getScheduleDetail: GetScheduleDetail = async (scheduleId: number) => {
  const { data } = await customAxios.get(`/team-schedule/${scheduleId}`);
  return data;
};

const useGetScheduleDetail = (scheduleId: number) =>
  useQuery(['getScheduleDetail'], () => getScheduleDetail(scheduleId), {
    select: (data) => data.data,
    enabled: !!scheduleId
  });

export default useGetScheduleDetail;
