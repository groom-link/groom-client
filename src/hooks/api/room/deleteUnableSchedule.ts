import { useMutation } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';

type DeleteUnableScheduleResponse = GroomApiResponse<number>;

type DeleteUnableSchedule = (
  id: number
) => Promise<DeleteUnableScheduleResponse>;

const deleteUnableSchedule: DeleteUnableSchedule = async (id) => {
  const { data } = await customAxios.delete(`/room/unableSchedule/${id}`);
  return data;
};

const useDeleteUnableSchedule = () => useMutation(deleteUnableSchedule);

export default useDeleteUnableSchedule;
