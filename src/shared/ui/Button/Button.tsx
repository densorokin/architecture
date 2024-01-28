import { classNames } from 'shared/lib/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButtonEnum {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButtonEnum;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { className, children, theme, onClick, ...otherProps } = props;

  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
