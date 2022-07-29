import { useEffect } from 'react';
import Router from 'next/router';

import { USER_INFORMATION_REQUEST_URL } from '../../constants/kakao';

const KAKAO_JAVASCRIPT_KEY = '248c0f042143239e8aff41927befcf0a';

const Kakao = () => {
  useEffect(() => {
    window.Kakao.init(KAKAO_JAVASCRIPT_KEY);
    const fullURL = window.location.href;
    const kakaoConfirmationCode = fullURL.split('?code=')[1];
    console.log(kakaoConfirmationCode);
    // TODO: 인가 코드 전송 후 회원가입 여부 반환받기
    const isJoined = false;
    if (isJoined) {
      // TODO: 우리 서비스 로그인 토큰 발급 요청
      Router.push('/home');
      return;
    }
    window.Kakao.Auth.setAccessToken('');
    window.Kakao.API.request({
      url: USER_INFORMATION_REQUEST_URL,
      success: (response) => {
        // TODO: 우리 서비스 회원가입 요청 보내기
        console.log(response);
        // TODO: 우리 서비스에 로그인 요청 보내기
        Router.push('/home');
        return;
      },
      fail: (error) => {
        console.log(error);
      }
    });
  }, []);

  return <div>로그인중</div>;
};

export default Kakao;
