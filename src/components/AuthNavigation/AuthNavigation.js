import { Link, useLocation } from 'react-router-dom';

import './AuthNavigation.scss';

const AuthNavigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className='auth-navigation'>
      <Link
        to='/signup'
        className={`auth-navigation__signup  ${
          pathname !== '/' ? 'auth-navigation__signup_logged' : ''
        }`}>
        Регистрация
      </Link>
      <button className='auth-navigation__signin-btn'>
        <Link
          to='/signin'
          className='auth-navigation__signin'>
          Войти
        </Link>
      </button>
    </nav>
  );
};

export default AuthNavigation;
