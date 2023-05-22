import React, { useEffect } from 'react';

import './Popup.scss';

const Popup = ({ children, isOpen, onClose }) => {
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
    if (evt.target.classList.contains('popup')) {
      onClose();
    }
  };

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`} onClick={closeByOver}>
      <div className='popup__container'>
        <button
          onClick={onClose}
          className='popup__close-btn'
          type='button'
          aria-label='кнопка закрытия попапа'></button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
