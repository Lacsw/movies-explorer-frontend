import { NavLink, useLocation } from 'react-router-dom';

import './Navigation.scss';
import profile from '../../images/profile-btn.svg';

const Navigation = () => {
  const { pathname } = useLocation();
  const activeLink = ({ isActive }) =>
    isActive
      ? `navigation__link navigation__link_active ${loggedLink}`
      : `navigation__link ${loggedLink}`;
  const loggedLink = `${pathname !== '/' ? 'navigation__link_logged' : ''}`;

  return (
    <nav className='navigation'>
      <NavLink to='/movies' className={activeLink}>
        Фильмы
      </NavLink>

      <NavLink to='/saved-movies' className={activeLink}>
        Сохраненные фильмы
      </NavLink>

      <NavLink
        to='/profile'
        className={({ isActive }) =>
          isActive
            ? 'navigation__profile navigation__profile_active'
            : 'navigation__profile'
        }>
        <button className='navigation__profile-btn'>
          Аккаунт
          <img
            src={profile}
            alt='профиль'
            className='navigation__profile-img'
          />
        </button>
      </NavLink>
    </nav>
  );
};

export default Navigation;
