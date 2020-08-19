import { useCallback, useLayoutEffect, useState } from 'react';

const getBox = (ref: any) => ref?.current?.getBoundingClientRect() || {};

export const useComponentBox = (ref: any) => {
  const [componentBox, setComponentBox] = useState(getBox(ref));

  const handleResize = useCallback(() => {
    if (ref.current) setComponentBox(getBox(ref));
  }, [ref]);

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    handleResize();

    // @ts-ignore
    if (typeof ResizeObserver === 'function') {
      // @ts-ignore
      let resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(ref.current);

      return () => {
        resizeObserver.disconnect(ref.current);
        resizeObserver = null;
      };
    } else {
      window.addEventListener('componentResize', handleResize);

      return () => {
        window.removeEventListener('componentResize', handleResize);
      };
    }
  }, [ref.current]);

  return componentBox;
};
