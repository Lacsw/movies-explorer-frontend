import './Portfolio.scss';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a
            href='https://lacsw.github.io/how-to-learn/'
            target='_blank'
            rel='noopener noreferrer'
            className='portfolio__link'>
            Статичный сайт
          </a>
        </li>
        <li className='portfolio__item'>
          <a
            href='https://lacsw.github.io/russian-travel/'
            target='_blank'
            rel='noopener noreferrer'
            className='portfolio__link'>
            Адаптивный сайт
          </a>
        </li>
        <li className='portfolio__item'>
          <a
            href='https://github.com/Lacsw/react-mesto-api-full-gha'
            target='_blank'
            rel='noopener noreferrer'
            className='portfolio__link'>
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
