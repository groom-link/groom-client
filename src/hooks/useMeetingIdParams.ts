import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useMeetingIdParams = () => {
  const [meetingId, setMeetingId] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const { meetingId } = router.query;
    if (!meetingId) return;
    if (typeof meetingId !== 'string') return;
    setMeetingId(parseInt(meetingId, 10));
  }, [router]);

  return meetingId;
};

export default useMeetingIdParams;
