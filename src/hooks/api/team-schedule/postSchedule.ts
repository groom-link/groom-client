import { useMutation } from '@tanstack/react-query';

import customAxios, { requestIntercepter } from '../../../api/customAxios';

type PostTeamSchedulesReqeust = {
  title: string;
  startTime: string;
  endTime: string;
  meetingLocation: {
    address: string;
    longitude: string;
    latitude: string;
  };
  roomId: number;
  participantsIds: number[];
};

type PostTeamSchedulesResponse = {
  success: boolean;
  data: Omit<PostTeamSchedulesReqeust, 'participantsIds' | 'roomId'>;
};

type PostNewRoomSchedule = (
  body: PostTeamSchedulesReqeust
) => Promise<PostTeamSchedulesResponse>;

// access token 검증 오류가 해결될 때까지 토큰을 싣지 않고 요청.
customAxios.interceptors.request.eject(requestIntercepter);

const postTeamSchedules: PostNewRoomSchedule = async (body) =>
  customAxios.post('/team-schedule', body);

const usePostTeamSchedules = () => useMutation(postTeamSchedules);

export default usePostTeamSchedules;
