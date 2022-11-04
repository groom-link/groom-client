import { useQuery } from '@tanstack/react-query';

import customAxios, { requestIntercepter } from '../../../api/customAxios';

type GetRecommendTimeRequest = {
  query: { date: string };
  roomId: number;
};

type GetRecommendTimeResponse = {
  recommendTime: {
    startTime: string;
    endTime: string;
  }[];
};

type GetRecommendTime = (
  query: GetRecommendTimeRequest
) => Promise<GetRecommendTimeResponse>;

// access token 검증 오류가 해결될 때까지 토큰을 싣지 않고 요청.
customAxios.interceptors.request.eject(requestIntercepter);

const getRecommandTime: GetRecommendTime = async ({ roomId, query }) =>
  customAxios.get(`/room/${roomId}/schedule/recommend`, { params: query });

const useGetRecommendTime = (query: GetRecommendTimeRequest) =>
  useQuery(['getRecommendTime'], () => getRecommandTime(query));

export default useGetRecommendTime;
