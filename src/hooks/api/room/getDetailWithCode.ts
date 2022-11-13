import { useQuery } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';
import { RoomDetail } from './getDetailWithRoomId';

export type GetDetailWithCodeResponse = GroomApiResponse<RoomDetail>;

type GetDetailWithCode = (code: string) => Promise<GetDetailWithCodeResponse>;

const getDetailWithCode: GetDetailWithCode = async (code) => {
  const { data } = await customAxios.get(`/room/code/${code}`);
  return data;
};

const useGetDetailWithCode = (code: string, retry?: number) =>
  useQuery(['groupDetail', code], () => getDetailWithCode(code), {
    select: (data) => data.data,
    enabled: code !== '',
    retry
  });

export default useGetDetailWithCode;
