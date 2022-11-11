import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useRoomIdParams = () => {
  const [roomId, setRoomId] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const { roomId } = router.query;
    if (!roomId) return;
    if (typeof roomId !== 'string') return;
    setRoomId(parseInt(roomId, 10));
  }, [router]);

  return roomId;
};

export default useRoomIdParams;
