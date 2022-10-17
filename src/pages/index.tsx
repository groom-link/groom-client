import React, { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import styled from '@emotion/styled';

import { AppleLoginButton, KakaoLoginButton } from '../components/atoms';
import colors from '../styles/colors';

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  margin: 120px auto 120px;
  border: 1px solid ${colors.grayScale.gray04};
  color: ${colors.grayScale.gray04};
  font-size: 40px;
`;

const AppleLoginButtonStyled = styled(AppleLoginButton)`
  margin-top: 20px;
`;

const Login = () => {
  useEffect(() => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY as string);
  }, []);

  const handleKakaoLogin = () => {
    Kakao.Auth.authorize({
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL
    });
    Router.push('/home');
  };

  const handleAppleLogin = () => console.log('apple login is not supported.');

  return (
    <>
      <Head>
        <title>GRoom | Login</title>
      </Head>
      <Logo>GRoom</Logo>
      <KakaoLoginButton onClick={handleKakaoLogin} width="100%" />
      <AppleLoginButtonStyled onClick={handleAppleLogin} width="100%" />
    </>
  );
};

export default Login;
