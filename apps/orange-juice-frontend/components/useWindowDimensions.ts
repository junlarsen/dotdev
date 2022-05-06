import { useEffect, useState } from 'react';

export type WindowDimensions = {
  width: number;
  height: number;
};

export const useWindowDimensions = (): WindowDimensions => {
  const [windowSize, setWindowSize] = useState<WindowDimensions>({
    width: undefined as unknown as number,
    height: undefined as unknown as number,
  });

  useEffect(() => {
    const onResize = (): void => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', onResize);
    onResize();
    return (): void => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return windowSize;
};
