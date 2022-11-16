import { useMutation } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';

type DeleteFileRequest = string;

type DeleteFileResponse = string;

type DeleteFile = (filename: DeleteFileRequest) => Promise<DeleteFileResponse>;

const DeleteFile: DeleteFile = async (filename: DeleteFileRequest) => {
  const { data } = await customAxios.delete(`/upload/${filename}`);
  return data;
};

const useDeleteFile = () => useMutation(DeleteFile);

export default useDeleteFile;
