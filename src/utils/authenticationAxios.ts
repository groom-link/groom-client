import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';

import {
  ACCESS_TOKEN_KEY,
  BASE_URL,
  REFRESH_TOKEN_KEY
} from '../constants/authentication';

const authenticationAxios = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
});

authenticationAxios.interceptors.response.use((config) => {
  const accessToken = getCookie(ACCESS_TOKEN_KEY);
  config.headers.Autorization = accessToken ? `Bearer ${accessToken}` : '';
  return config;
});

authenticationAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const {
      config,
      response: {
        status,
        data: { message }
      }
    } = error;
    if (status === '401') {
      if (message === 'TokenExpiredError') {
        const originalRequest = config;
        const refreshToken = getCookie('X-Refresh-Token');
        const { data } = await authenticationAxios.post('sample', {
          refreshToken
        });
        const {
          ACCESS_TOKEN_KEY: newAccessToken,
          REFRESH_TOKEN_KEY: newRefreshToken
        } = data;
        setCookie(ACCESS_TOKEN_KEY, newAccessToken);
        setCookie(REFRESH_TOKEN_KEY, newRefreshToken);
        originalRequest.headers.authentication = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

export default authenticationAxios;
