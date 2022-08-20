import React, { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import styled from '@emotion/styled';

import { AppleLoginButton, KakaoLoginButton } from '../components/atoms';

const H1 = styled.h1`
  margin: 200px 0;
  font-size: 4rem;
  text-align: center;
`;

const AppleLoginButtonStyled = styled(AppleLoginButton)`
  margin-top: 20px;
`;

const Login = () => {
  useEffect(() => {
    // window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY as string);
  }, []);

  const handleLogin = () => {
    // Kakao.Auth.authorize({
    //   redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL
    // });
    Router.push('/home');
  };

  return (
    <>
      <Head>
        <title>GRoom | Login</title>
      </Head>
      <H1>GRoom</H1>
      <KakaoLoginButton onClick={handleLogin} width="100%" />
      <AppleLoginButtonStyled onClick={handleLogin} width="100%" />
    </>
  );
};

export default Login;
