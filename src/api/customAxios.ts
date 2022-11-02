import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';

import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY
} from '../constants/authentication';

const customAxios = axios.create({
  timeout: 5000,
  baseURL: process.env.NEXT_PUBLIC_BASE_REQUEST_URL
});

export const requestIntercepter = customAxios.interceptors.request.use(
  (config) => {
    const accessToken = getCookie(ACCESS_TOKEN_KEY);
    if (!config.headers) return config;
    if (config.url !== 'auth/kakao/login')
      config.headers['x-access-token'] = accessToken ? accessToken : '';
    return config;
  }
);

customAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const {
      config,
      response: { status, data }
    } = error;
    if (status === '401') {
      if (data.message === 'TokenExpiredError') {
        const originalRequest = config;
        const refreshToken = getCookie('X-Refresh-Token');
        const { data } = await customAxios.post('sample', {
          refreshToken
        });
        const {
          ACCESS_TOKEN_KEY: newAccessToken,
          REFRESH_TOKEN_KEY: newRefreshToken
        } = data;
        setCookie(ACCESS_TOKEN_KEY, newAccessToken);
        setCookie(REFRESH_TOKEN_KEY, newRefreshToken);
        originalRequest.headers['x-access-token'] = newAccessToken;
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

export default customAxios;
