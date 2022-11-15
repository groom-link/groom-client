import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useTimeParams = () => {
  const [time, setTime] = useState(['', '']);
  const router = useRouter();

  useEffect(() => {
    const { startTime, endTime } = router.query;
    if (!startTime || !endTime) return;
    if (typeof startTime !== 'string' || typeof endTime !== 'string') return;
    setTime([startTime, endTime]);
  }, [router]);

  return time;
};

export default useTimeParams;
