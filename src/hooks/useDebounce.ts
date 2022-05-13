import { useEffect } from 'react';

export function useDebounce<T>(
  value: T,
  delay: number,
  delegate: (content: T) => void
) {
  useEffect(() => {
    const handler = setTimeout(() => {
      if (delegate && value) {
        delegate(value);
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
}
