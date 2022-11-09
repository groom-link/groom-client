import { useQuery } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';

type GetRecommendTimeRequest = {
  query: { date: string };
  roomId: number;
};

type GetRecommendTimeData = {
  startTime: string;
  endTime: string;
}[];

type GetRecommendTime = (
  query: GetRecommendTimeRequest
) => Promise<GroomApiResponse<GetRecommendTimeData>>;

const getRecommandTime: GetRecommendTime = async ({ roomId, query }) => {
  const { data } = await customAxios.get(`/room/${roomId}/schedule/recommend`, {
    params: query
  });
  return data;
};

const useGetRecommendTime = (query: GetRecommendTimeRequest) =>
  useQuery(['getRecommendTime'], () => getRecommandTime(query), {
    select: (data) => data.data,
    enabled: query.roomId !== 0
  });

export default useGetRecommendTime;
