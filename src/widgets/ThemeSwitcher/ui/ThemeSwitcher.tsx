import { classNames } from 'shared/lib/classNames';
import cls from './ThemeSwitcher.module.scss';
import { useTheme, ThemeEnum } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButtonEnum } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButtonEnum.CLEAR}
    >
      {theme === ThemeEnum.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
