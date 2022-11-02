import { useMutation } from '@tanstack/react-query';

import customAxios, { requestIntercepter } from '../../../../api/customAxios';

type PostNewRoomScheduleBody = {
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

type PostNewRoomScheduleResponse = {
  success: boolean;
  data: Omit<PostNewRoomScheduleBody, 'participantsIds' | 'roomId'>;
};

type PostNewRoomSchedule = (
  body: PostNewRoomScheduleBody
) => Promise<PostNewRoomScheduleResponse>;

// access token 검증 오류가 해결될 때까지 토큰을 싣지 않고 요청.
customAxios.interceptors.request.eject(requestIntercepter);

const postNewRoomSchedule: PostNewRoomSchedule = async (body) =>
  customAxios.post('/room/schedule', body);

const usePostNewRoomSchedule = () => useMutation(postNewRoomSchedule);

export default usePostNewRoomSchedule;
