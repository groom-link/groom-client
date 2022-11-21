import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';

import { KakaoLoginButton } from '../components/atoms';
import Image from '../components/utils/Image';

const LogoContainer = styled.div`
  margin: 30vh auto 20vh;
  text-align: center;
`;

const AppleLoginButtonStyled = styled.button`
  display: block;
  margin: 20px auto;
`;

const KakaoLoginButtonStyled = styled(KakaoLoginButton)`
  display: block;
  margin: 0 auto;
`;

const Login = () => {
  const handleKakaoLogin = () => {
    const isAndroid = navigator.userAgent.includes('Android');
    if (isAndroid) {
      window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code`;
      return;
    }

    Kakao.Auth.authorize({
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL
    });
  };

  const handleAppleLoginClick = () =>
    (window.location.href =
      'https://appleid.apple.com/auth/authorize?client_id=link.groom.service.dev&redirect_uri=https://dev.service.groom.link/auth/apple/login&response_type=code&response_mode=query');

  return (
    <>
      <Head>
        <title>GRoom | Login</title>
      </Head>
      <LogoContainer>
        <Image
          src="/illustrations/Logo.png"
          alt="GRoom 로고"
          width="200"
          height="75.5"
        />
      </LogoContainer>
      <KakaoLoginButtonStyled onClick={handleKakaoLogin} width="100%" />
      <AppleLoginButtonStyled onClick={handleAppleLoginClick}>
        <Image
          src="https://appleid.cdn-apple.com/appleid/button?width=360&height=54&locale=ko_KR"
          width="360"
          height="53.89"
          alt="Sign in with Apple"
        />
      </AppleLoginButtonStyled>
    </>
  );
};

export default Login;
