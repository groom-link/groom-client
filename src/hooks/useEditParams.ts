import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useEditParams = () => {
  const [edit, setEdit] = useState('loading');
  const router = useRouter();

  useEffect(() => {
    const { edit } = router.query;
    if (!edit) return;
    if (typeof edit !== 'string') return;
    setEdit(edit);
  }, [router.query]);

  return edit;
};

export default useEditParams;
