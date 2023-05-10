import { Link } from 'react-router-dom';

import logo from '../../images/header-logo.svg';

const Logo = () => {
  return (
    <Link
      to='/'
      className='logo'>
      <img
        src={logo}
        alt='логотип'
      />
    </Link>
  );
};

export default Logo;
