import { useLocation } from 'react-router-dom';

import './Header.scss';

import Navigation from '../Navigation/Navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import Logo from '../Logo/Logo';

function Header() {
  const { pathname } = useLocation();
  const isLoggedIn = true;

  return (
    <header className={`header ${pathname !== '/' ? 'header_logged' : ''}`}>
      <Logo />
      {isLoggedIn ? <Navigation /> : <AuthNavigation />}
    </header>
  );
}

export default Header;
