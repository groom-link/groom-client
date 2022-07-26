import React, { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';

const KAKAO_JAVASCRIPT_KEY = '248c0f042143239e8aff41927befcf0a';
const KAKAO_REDIRECT_URL = 'http://localhost:8080/auth/kakao';

const Login = () => {
  useEffect(() => {
    window.Kakao.init(KAKAO_JAVASCRIPT_KEY);
  }, []);

  const handleLogin = () => {
    Kakao.Auth.authorize({ redirectUri: KAKAO_REDIRECT_URL });
  };

  const fetchJWTToken = () => {
    const AccessToken = '111222333';
    const RefreshToken = '444555666';
  };

  return (
    <>
      <Head>
        <title>GRoom | Login</title>
      </Head>
      <div>Login page</div>
      <button onClick={handleLogin}>카카오 로그인</button>
    </>
  );
};

export default Login;
