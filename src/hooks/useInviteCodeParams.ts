import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useInviteCodeParams = () => {
  const [inviteCode, setInviteCode] = useState('');
  const router = useRouter();

  useEffect(() => {
    const { code } = router.query;
    if (!code) return;
    if (typeof code !== 'string') return;
    setInviteCode(code);
  }, [router]);

  return inviteCode;
};

export default useInviteCodeParams;
