import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [code, setCode] = useState('');
  const router = useRouter();

  useEffect(() => {
    const { code } = router.query;
    if (!code) return;
    if (typeof code !== 'string') return;
    setCode(code);
  }, [router]);

  return <div>애플 로그인중...</div>;
};

export default Login;
