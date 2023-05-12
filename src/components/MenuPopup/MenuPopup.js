import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import './MenuPopup.scss';

import profile from '../../images/profile-btn.svg';

function MenuPopup({ isOpen, onClose }) {
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
        <button
          className='menu-popup__close-btn'
          onClick={onClose}
        />
        <div className='menu-popup__wrap'>
          <nav className='menu-popup__links'>
            <Link
              to='/'
              className='menu-popup__link'>
              Главная
            </Link>
            <Link
              to='/movies'
              className='menu-popup__link menu-popup__link_active'>
              Фильмы
            </Link>
            <Link
              to='/saved-movies'
              className='menu-popup__link'>
              Сохраненые фильмы
            </Link>
          </nav>
          <button className='menu-popup__profile-btn'>
            <Link
              to='/profile'
              className='menu-popup__profile'>
              Аккаунт
            </Link>
            <img
              src={profile}
              alt='профиль'
              className='menu-popup__profile-img'
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuPopup;