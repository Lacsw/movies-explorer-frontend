import { useLocation } from 'react-router-dom';

import './Header.scss';

import Navigation from '../Navigation/Navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import Logo from '../Logo/Logo';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header({ isLoggedIn }) {
  const { pathname } = useLocation();

  const isHasHeader =
    pathname === '/' ||
    pathname === '/movies' ||
    pathname === '/saved-movies' ||
    pathname === '/profile';

  return (
    isHasHeader && (
      <header className={`header ${pathname !== '/' ? 'header_logged' : ''}`}>
        <Logo />
        {/* {pathname !== '/' ? (
          <>
            <Navigation />
            <BurgerMenu />
          </>
        ) : (
          <AuthNavigation />
        )} */}

        {isLoggedIn ? (
          <>
            <Navigation /> <BurgerMenu />
          </>
        ) : (
          <AuthNavigation />
        )}
      </header>
    )
  );
}

export default Header;
