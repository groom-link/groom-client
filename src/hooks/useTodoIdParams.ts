import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useTodoIdParams = () => {
  const [todoId, setTodoId] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const { todoId } = router.query;
    if (!todoId) return;
    if (typeof todoId !== 'string') return;
    setTodoId(parseInt(todoId, 10));
  }, [router]);

  return todoId;
};

export default useTodoIdParams;
