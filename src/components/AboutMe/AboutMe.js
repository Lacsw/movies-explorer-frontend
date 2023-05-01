import './AboutMe.scss';

function AboutMe() {
  return (
    <div>
      <h3>Студент</h3>
      <div>
        <h2>Роман Фролов</h2>
        <p>Фронтенд-разработчик, 29 лет</p>
        <p>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <img
          src='#'
          alt='aboutme'
        />
        <ul>
          <li>
            <a href='https://github.com/Lacsw'>GitHub</a>
          </li>
          <li>
            <a href='https://github.com/Lacsw'>Telegram</a>
          </li>
          <li>
            <a href='https://github.com/Lacsw'>LinkedIN</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
