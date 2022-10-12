import { useEffect } from 'react';
import Router from 'next/router';

import loginWithKakao from '../../api/loginWithKakao';

const Kakao = () => {
  useEffect(() => {
    const login = async () => {
      const status = await loginWithKakao();
      if (status === 'fail') {
        alert('로그인에 실패했습니다. 다시 시도해주세요.');
        Router.push('/');
        return;
      }
      Router.push('/home');
    };
    login();
  }, []);

  return <div>로그인중</div>;
};

export default Kakao;
