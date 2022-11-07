import { useQuery } from '@tanstack/react-query';

import customAxios, { requestIntercepter } from '../../../api/customAxios';

type GetTeamSchedulesRequest = {
  page?: number;
  size?: number;
  sort?: string[];
  userId?: number;
  roomId?: number;
  startTime?: string;
  endTime?: string;
};

type GetTeamSchedulesData = {
  teamScheduleList: {
    id: number;
    title: string;
    startTime: string;
    meetingLocation: {
      address: string;
      longitude: string;
      latitude: string;
    };
    profiles: string[];
  }[];
  page: number;
  last: boolean;
};

type GetSearchRoomSchedules = (
  query: GetTeamSchedulesRequest
) => Promise<GroomApiResponse<GetTeamSchedulesData>>;

// access token 검증 오류가 해결될 때까지 토큰을 싣지 않고 요청.
customAxios.interceptors.request.eject(requestIntercepter);

const getTeamSchedules: GetSearchRoomSchedules = async (query) => {
  const { data } = await customAxios.get('/team-schedule', {
    params: query
  });
  return data;
};

const useGetTeamSchedules = (query: GetTeamSchedulesRequest) =>
  useQuery(['getTeamSchedules'], () => getTeamSchedules(query), {
    select: (data) => data.data
  });

export default useGetTeamSchedules;
