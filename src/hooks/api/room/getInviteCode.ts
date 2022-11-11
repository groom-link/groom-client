import { useQuery } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';

type GetInviteCodeRespones = GroomApiResponse<{
  code: string;
}>;

type GetInviteCode = (roomId: number) => Promise<GetInviteCodeRespones>;

const getInviteCode: GetInviteCode = async (roomId) => {
  const { data } = await customAxios.get(`/room/${roomId}/code`);
  return data;
};

const useGetInviteCode = (roomId: number) =>
  useQuery(['inviteCode'], () => getInviteCode(roomId), {
    enabled: !!roomId,
    select: (data) => data.data.code
  });

export default useGetInviteCode;
