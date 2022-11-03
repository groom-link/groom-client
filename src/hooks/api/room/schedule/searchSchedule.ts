import { useQuery } from '@tanstack/react-query';

import customAxios, { requestIntercepter } from '../../../../api/customAxios';

type SearchRoomScheduleRequest = {
  page?: number;
  size?: number;
  sort?: string[];
  userId?: number;
  roomId?: number;
  startTime?: string;
  endTime?: string;
};

type SearchRoomScheduleResponse = {
  success: boolean;
  teamScheduleList: {
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
  query: SearchRoomScheduleRequest
) => Promise<SearchRoomScheduleResponse>;

// access token 검증 오류가 해결될 때까지 토큰을 싣지 않고 요청.
customAxios.interceptors.request.eject(requestIntercepter);

const getSearchRoomSchedules: GetSearchRoomSchedules = async (query) => {
  const { data } = await customAxios.get('/room/schedule/search', {
    params: query
  });
  return data;
};

const useSearchRoomSchedules = (query: SearchRoomScheduleRequest) =>
  useQuery(['searchRoomSchedules'], () => getSearchRoomSchedules(query));

export default useSearchRoomSchedules;
