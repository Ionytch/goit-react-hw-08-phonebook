import { UserMenu } from '../usermenu/UserMenu';
import {AuthNav}  from '../authnavigation/AuthNav';
import { useAuth } from 'hooks';
// import css from './AppBar.module.css';
import { Navigation } from '../navigation/Navigation';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
