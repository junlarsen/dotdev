import { createContext, Dispatch, SetStateAction } from 'react';
import { ColorTheme } from './usePreferredTheme';

export type AppContextState = {
  theme: ColorTheme;
  setTheme: Dispatch<SetStateAction<ColorTheme>>;
};

// @ts-expect-error -- not in use
export const AppContext = createContext<AppContextState>({});
