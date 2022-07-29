import React, { useEffect } from 'react';
import Head from 'next/head';

import { REDIRECT_URL } from '../constants/kakao';

const KAKAO_JAVASCRIPT_KEY = '248c0f042143239e8aff41927befcf0a';

const Login = () => {
  useEffect(() => {
    window.Kakao.init(KAKAO_JAVASCRIPT_KEY);
  }, []);

  const handleLogin = () => {
    Kakao.Auth.authorize({ redirectUri: REDIRECT_URL });
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
