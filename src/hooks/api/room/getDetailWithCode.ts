import { useQuery } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';

export type GetDetailWithCodeResponse = GroomApiResponse<
  Room & {
    roomParticipants: {
      id: number;
      nickname: string;
      profileImageUrl: string;
    }[];
  }
>;

type GetDetailWithCode = (code: string) => Promise<GetDetailWithCodeResponse>;

const getDetailWithCode: GetDetailWithCode = async (code) => {
  const { data } = await customAxios.get(`/room/code/${code}`);
  return data;
};

const useGetDetailWithCode = (code: string) =>
  useQuery(['groupDetail', code], () => getDetailWithCode(code), {
    select: (data) => data.data,
    enabled: code !== ''
  });

export default useGetDetailWithCode;
