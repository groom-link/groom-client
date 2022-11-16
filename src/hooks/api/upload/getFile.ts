import { useQuery } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';

type GetFileRequest = string | undefined;

type GetFileResponse = Blob;

type GetFile = (filename: GetFileRequest) => Promise<GetFileResponse>;

const getFile: GetFile = async (filename: GetFileRequest) => {
  const { data } = await customAxios.get(`/upload/${filename}`, {
    headers: {
      Accept: 'multipart/form-data'
    },
    responseType: 'blob'
  });
  return data;
};

const useGetFile = (filename: GetFileRequest) =>
  useQuery(['file', filename], () => getFile(filename), {
    select: (data) => data,
    enabled: !!filename
  });

export default useGetFile;
