import { Link, useLocation } from 'react-router-dom';

import './Navigation.scss';
import profile from '../../images/profile-btn.svg';

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className='navigation'>
      <Link
        to='/movies'
        className={`navigation__link navigation__link_movies ${
          pathname !== '/' ? 'navigation__link_logged' : ''
        }`}>
        Фильмы
      </Link>
      <Link
        to='/saved-movies'
        className={`navigation__link navigation__link_saved-movies ${
          pathname !== '/' ? 'navigation__link_logged' : ''
        }`}>
        Сохраненные фильмы
      </Link>

      <button className='navigation__profile-btn'>
        <Link
          to='/profile'
          className='navigation__profile'>
          Аккаунт
        </Link>
        <img
          src={profile}
          alt='профиль'
          className='navigation__profile-img'
        />
      </button>
    </nav>
  );
};

export default Navigation;
