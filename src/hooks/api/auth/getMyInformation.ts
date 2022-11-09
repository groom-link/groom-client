import { useQuery } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';

type GetMyInformationResponse = GroomApiResponse<{
  id: number;
  nickname: string;
  profileImageUrl: string;
}>;

type GetMyInformation = () => Promise<GetMyInformationResponse>;

const getMyInformation: GetMyInformation = async () => {
  const { data } = await customAxios.get('/auth/me');
  return data;
};

const useGetMyInformation = () =>
  useQuery(['getMyInformation'], () => getMyInformation(), {
    select: (data) => data.data
  });

export default useGetMyInformation;
