import { Link, Route, Routes } from 'react-router-dom';

import './Header.scss';
import logo from '../../images/header-logo.svg';

function Header() {
  return (
    <header className='header'>
      <Link
        to='/'
        className='header__logo'>
        <img
          src={logo}
          alt='header-logo'
        />
      </Link>
      <div className='header__auth'>
        <Link
          to='/signup'
          className='header__signup'>
          Регистрация
        </Link>
        <button className='header__signin-btn'>
          <Link
            to='/signin'
            className='header__signin'>
            Войти
          </Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
