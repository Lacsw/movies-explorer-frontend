import { useState } from 'react';

import './BurgerMenu.scss';
import MenuPopup from '../MenuPopup/MenuPopup';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <section className='burger'>
      <button
        className='burger__btn'
        onClick={handleClick}
      />
      <MenuPopup
        isOpen={isOpen}
        onClose={handleCloseClick}
      />
    </section>
  );
}

export default BurgerMenu;
