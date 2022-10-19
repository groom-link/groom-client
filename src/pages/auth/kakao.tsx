import { useEffect } from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';

import loginWithKakao from '../../api/loginWithKakao';
import { Spinner } from '../../components/atoms';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

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

  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default Kakao;
