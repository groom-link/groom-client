import { useMutation } from '@tanstack/react-query';

import customAxios from '../../../../api/customAxios';

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

const postNewRoomSchedule: PostNewRoomSchedule = async (body) =>
  customAxios.post('/room/schedule', body);

const usePostNewRoomSchedule = () => useMutation(postNewRoomSchedule);

export default usePostNewRoomSchedule;
