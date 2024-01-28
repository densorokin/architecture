import { classNames } from 'shared/lib/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar)}>
      <ThemeSwitcher />
      <div className={classNames(cls.links)}>
        <AppLink
          to="/"
          theme={AppLinkTheme.SECONDARY}
          className={classNames(cls.mainLink)}
        >
          Main page
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          About page
        </AppLink>
      </div>
    </div>
  );
};
