import { useEffect } from 'react';
import Router from 'next/router';

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
      // TODO: 엑세스 토큰, 리프레시 토큰 받아서 쿠키에 저장.
      Router.push('/home');
      return;
    }
    // TODO: API 서버에 회원가입 요청
    // TODO: 엑세스 토큰, 리프레시 토큰 받아서 쿠키에 저장.
    Router.push('/home');
  }, []);

  return <div>로그인중</div>;
};

export default Kakao;
