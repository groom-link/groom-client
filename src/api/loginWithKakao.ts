import { setCookie } from 'cookies-next';

import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY
} from '../constants/authentication';
import customAxios from './customAxios';

const parseConfirmationCode = () => {
  const url = window.location.href;
  const code = url.split('code=')[1];

  return code;
};

const getServerToken = async (
  code: string
): Promise<{
  accessToken: string;
  refreshToken: string;
}> => {
  const response = await customAxios.get('/api/auth/kakao/login', {
    params: { code }
  });
  const { accessToken, refreshToken } = response.data.data;

  return { accessToken, refreshToken };
};

const loginWithKakao = async () => {
  const code = parseConfirmationCode();
  try {
    const { accessToken, refreshToken } = await getServerToken(code);
    if (!accessToken || !refreshToken) throw Error();
    setCookie(ACCESS_TOKEN_KEY, accessToken);
    setCookie(REFRESH_TOKEN_KEY, refreshToken);

    return 'success';
  } catch (error) {
    return 'fail';
  }
};

export default loginWithKakao;
