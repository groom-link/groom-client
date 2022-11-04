import { useMutation } from '@tanstack/react-query';

import customAxios, { requestIntercepter } from '../../../api/customAxios';

type PostUnableScheduleRequest = {
  roomId: number;
  startTime: string;
  endTime: string;
};

type PostUnableSchedule = (
  body: PostUnableScheduleRequest
) => Promise<GroomApiResponse<PostUnableScheduleRequest>>;

// access token 검증 오류가 해결될 때까지 토큰을 싣지 않고 요청.
customAxios.interceptors.request.eject(requestIntercepter);

const postUnableSchedule: PostUnableSchedule = async (body) => {
  const { data } = await customAxios.post('/room/unableSchedule', body);
  return data;
};

const usePostUnableSchedule = () => useMutation(postUnableSchedule);

export default usePostUnableSchedule;
