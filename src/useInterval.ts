import { useEffect } from 'react';
import useLatest from './useLatest';

function useInterval(
  fn: () => void,
  delay: number | undefined,
) {
  const callbackRef = useLatest(fn);
  useEffect(() => {
    const timer = setInterval(() => {
      callbackRef.current()
    }, delay);

    return () => {
      clearInterval(timer)
    }
  }, [callbackRef, delay])
}

export default useInterval;
