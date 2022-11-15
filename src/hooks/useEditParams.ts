import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useEditParams = () => {
  const [edit, setEdit] = useState('loading');
  const router = useRouter();

  useEffect(() => {
    const { edit } = router.query;
    if (!edit || typeof edit !== 'string') {
      setEdit('false');
      return;
    }
    setEdit(edit);
  }, [router.query]);

  return edit;
};

export default useEditParams;
