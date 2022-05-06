import { useEffect, useState } from 'react';

export type ColorTheme = 'dark' | 'light';

export const usePreferredTheme = (): ColorTheme => {
  const isDarkPreferred =
    typeof window === 'object' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState<ColorTheme>(() => (isDarkPreferred ? 'dark' : 'light'));

  useEffect(() => {
    const handler = (event: MediaQueryListEvent): void => {
      setTheme(event.matches ? 'dark' : 'light');
    };
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handler);
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handler);
    };
  }, []);

  return theme;
};
