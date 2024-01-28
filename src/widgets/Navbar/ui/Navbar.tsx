import { classNames } from 'shared/lib/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar)}>
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
