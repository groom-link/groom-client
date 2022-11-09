import { useMutation } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';

type PostUnableScheduleRequest = {
  roomId: number;
  startTime: string;
  endTime: string;
};

type PostUnableSchedule = (
  body: PostUnableScheduleRequest
) => Promise<GroomApiResponse<PostUnableScheduleRequest>>;

const postUnableSchedule: PostUnableSchedule = async (body) => {
  const { data } = await customAxios.post('/room/unableSchedule', body);
  return data;
};

const usePostUnableSchedule = () => useMutation(postUnableSchedule);

export default usePostUnableSchedule;
