import React, { useEffect } from 'react';
import Head from 'next/head';

const Login = () => {
  useEffect(() => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY as string);
  }, []);

  const handleLogin = () => {
    Kakao.Auth.authorize({
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL
    });
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
