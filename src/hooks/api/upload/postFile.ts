import { useMutation } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';

type PostFileRequest = FormData;

type PostFileResponse = string;

type PostFile = (body: PostFileRequest) => Promise<PostFileResponse>;

const postFile: PostFile = async (body: PostFileRequest) => {
  const { data } = await customAxios.post('/upload', body, {
    headers: {
      'Content-Type':
        'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
    }
  });
  return data;
};

const usePostFile = () => useMutation(postFile);

export default usePostFile;
