import { useMutation } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';

export type TeamScheduleDetail = {
  title: string;
  startTime: string;
  endTime: string;
  meetingLocation: {
    address: string;
    longitude: string;
    latitude: string;
  };
  participantsIds: number[];
};

type PostTeamSchedulesReqeust = {
  roomId: number;
} & TeamScheduleDetail;

type PostTeamSchedulesData = Omit<
  PostTeamSchedulesReqeust,
  'participantsIds' | 'roomId'
>;

type PostNewRoomSchedule = (
  body: PostTeamSchedulesReqeust
) => Promise<GroomApiResponse<PostTeamSchedulesData>>;

const postTeamSchedules: PostNewRoomSchedule = async (body) =>
  customAxios.post('/team-schedule', body);

const usePostTeamSchedules = () => useMutation(postTeamSchedules);

export default usePostTeamSchedules;
