import './AboutMe.scss';
import photo from '../../images/photo.jpeg';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <hr className='about-me__title-underline' />
      <div className='about-me__main'>
        <img
          src={photo}
          alt='главная фотография'
          className='about-me__photo'
        />
        <div className='about-me__info'>
          <h3 className='about-me__subtitle'>Роман Фролов</h3>
          <p className='about-me__quote'>Фронтенд-разработчик, 29 лет</p>
          <p className='about-me__text'>
            Я из Санкт-Петербуга, закончил Университет ИТМО по специальности
            "информационная безопасность". Работал по направлению в Комитете по
            градостроительству и архитектуре, на работе начал увлекатся
            разработкой и принял решение уйти в фронтенд, так как нравится
            делать красивые функциональные интерфейсы и сразу видеть результат работы.
          </p>

          <ul className='about-me__contact'>
            <li>
              <a
                className='about-me__link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/Lacsw'>
                Github
              </a>
            </li>
            <li>
              <a
                className='about-me__link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/Lacsw'>
                Telegram
              </a>
            </li>
            <li>
              <a
                className='about-me__link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/Lacsw'>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
