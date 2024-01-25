import { useContext } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  ThemeEnum,
} from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: ThemeEnum;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const selectedTheme =
      theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;
    setTheme(selectedTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, selectedTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
