import { useEffect, useCallback, useRef } from 'react';
export const useCallBackIfClickOutsideRef = (callback: () => void) => {
  const ref = useRef<HTMLElement>(null);

  const handleClick = useCallback(
    (e: React.BaseSyntheticEvent | MouseEvent) => {
      if (!ref) return;
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    },
    [ref, callback]
  );

  useEffect(() => {
    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [handleClick]);

  return { ref };
};
