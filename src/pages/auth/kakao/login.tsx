import { useEffect } from 'react';
import { setCookie } from 'cookies-next';

import customAxios from '../../../api/authenticationAxios';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY
} from '../../../constants/authentication';

const getToken = async (code: string) => {
  const response = await customAxios.get(
    //FIXME: response type 정의
    process.env.NEXT_PUBLIC_KAKAO_LOGIN_URL as string,
    {
      params: { code },
      withCredentials: true
    }
  );
  const { accessToken, refreshToken } = response.data.data;
  return { accessToken, refreshToken };
};

const Kakao = () => {
  useEffect(() => {
    const kakaoLogin = async () => {
      const fullURL = window.location.href;
      const kakaoConfirmationCode = fullURL.split('?code=')[1];
      try {
        const { accessToken, refreshToken } = await getToken(
          kakaoConfirmationCode
        );
        if (!accessToken || !refreshToken) throw Error('로그인 오류!');
        setCookie(ACCESS_TOKEN_KEY, accessToken); //FIXME: local storage, 쿠키 사용 가능한 webview
        setCookie(REFRESH_TOKEN_KEY, refreshToken);
      } catch (error) {
        console.log(error);
      }
    };
    const fullURL = window.location.href;
    const kakaoConfirmationCode = fullURL.split('?code=')[1];
    console.log(kakaoConfirmationCode);

    // kakaoLogin();
  }, []);

  return <div>로그인중</div>;
};

export default Kakao;
