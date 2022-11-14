import { useMutation } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';
import { queryClient } from '../../../pages/_app';
import { TeamScheduleDetail } from './postSchedule';

type PatchScheduleRequest = {
  id: number;
  participants: number[];
} & Omit<TeamScheduleDetail, 'participantsIds'>;

type PatchScheduleResponse = GroomApiResponse<number>;

type PatchSchedule = (
  body: PatchScheduleRequest
) => Promise<PatchScheduleResponse>;

const patchSchedule: PatchSchedule = async (body) => {
  const { data } = await customAxios.patch('/team-schedule', body);
  return data;
};

const usePatchSchedule = () =>
  useMutation(patchSchedule, {
    onSuccess: () => {
      queryClient.invalidateQueries(['getTeamSchedules']);
    }
  });

export default usePatchSchedule;
