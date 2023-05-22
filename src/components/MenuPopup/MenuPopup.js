import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

import './MenuPopup.scss';

import profile from '../../images/profile-btn.svg';

function MenuPopup({ isOpen, onClose }) {
  const activeLink = ({ isActive }) =>
    isActive ? 'menu-popup__link menu-popup__link_active' : 'menu-popup__link';

  useEffect(() => {
    if (isOpen) {
      const closeByEsc = (evt) => {
        if (evt.key === 'Escape') {
          onClose();
        }
      };
      document.addEventListener('keydown', closeByEsc);
      return () => document.removeEventListener('keydown', closeByEsc);
    }
  }, [isOpen, onClose]);

  const closeByOver = (evt) => {
    if (evt.target.classList.contains('menu-popup')) {
      onClose();
    }
  };

  return (
    <div
      className={`menu-popup ${isOpen && 'menu-popup_opened'}`}
      onClick={closeByOver}>
      <div className='menu-popup__container'>
        <button className='menu-popup__close-btn' onClick={onClose} />
        <div className='menu-popup__wrap'>
          <nav className='menu-popup__links'>
            <NavLink to='/' className={activeLink}>
              Главная
            </NavLink>
            <NavLink to='/movies' className={activeLink}>
              Фильмы
            </NavLink>
            <NavLink to='/saved-movies' className={activeLink}>
              Сохраненые фильмы
            </NavLink>
          </nav>

          <NavLink
            to='/profile'
            className={({ isActive }) =>
              isActive
                ? 'menu-popup__profile menu-popup__profile_active'
                : 'menu-popup__profile'
            }>
            <button className='menu-popup__profile-btn'>
              Аккаунт
              <img
                src={profile}
                alt='профиль'
                className='menu-popup__profile-img'
              />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default MenuPopup;
