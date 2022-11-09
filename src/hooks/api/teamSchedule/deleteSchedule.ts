import { useMutation } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';

type DeleteTeamschedule = (id: number) => Promise<GroomApiResponse<number>>;

const deleteTeamSchedule: DeleteTeamschedule = async (id) => {
  const { data } = await customAxios.delete(`/team-schedule/${id}`);
  return data;
};

const useDeleteTeamSchedule = () =>
  useMutation((id: number) => deleteTeamSchedule(id));

export default useDeleteTeamSchedule;
