import './Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className='footer__info'>
        <p className='footer__copyright'>&copy; 2023</p>
        <ul className='footer__contact'>
          <li>
            <a
              className='footer__link'
              target='_blank'
              rel='noopener noreferrer'
              href='https://practicum.yandex.ru/'>
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              className='footer__link'
              href='https://github.com/Lacsw'>
              Github
            </a>
          </li>
          <li>
            <a
              className='footer__link'
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/Lacsw'>
              Telegram
            </a>
          </li>
          <li>
            <a
              className='footer__link'
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/Lacsw'>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
