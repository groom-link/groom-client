import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';

import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY
} from '../constants/authentication';

const customAxios = axios.create({
  timeout: 4000,
  baseURL: process.env.NEXT_PUBLIC_BASE_REQUEST_URL
});

export const requestIntercepter = customAxios.interceptors.request.use(
  (config) => {
    const accessToken = getCookie(ACCESS_TOKEN_KEY);
    if (!accessToken) return config;
    if (config.url === 'auth/kakao/login') return config;
    if (!config.headers) config.headers = {};
    config.headers['x-access-token'] = accessToken;
    return config;
  }
);

const responseIntercepter = customAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const {
      config,
      response: { status }
    } = error;
    if (status === 500) {
      // TODO: Token error 명시하기
      if (config.url === '/auth/refresh') return Promise.reject(error);
      const originalRequest = config;
      const refreshToken = getCookie(REFRESH_TOKEN_KEY);
      const { data } = await customAxios.post('/auth/refresh', {
        refreshToken
      });
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        data.data;
      setCookie(ACCESS_TOKEN_KEY, newAccessToken);
      setCookie(REFRESH_TOKEN_KEY, newRefreshToken);
      originalRequest.headers['x-access-token'] = newAccessToken;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.eject(responseIntercepter);
// TODO: 토큰 에러가 나면 토큰 에러라고 명시해줘야 하는데 그냥 500 에러가 뜸.
// 불필요하게 토큰 리프레시가 일어나기 때문에 임시로 비활성화함.

export default customAxios;
