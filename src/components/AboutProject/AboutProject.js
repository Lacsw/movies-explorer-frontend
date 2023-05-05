import './AboutProject.scss';

function AboutProject() {
  return (
    <section className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <hr className='about-project__title-underline' />
      <div className='about-project__info'>
        <div>
          <h3 className='about-project__subtitle'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3 className='about-project__subtitle'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__progress'>
        <p className='about-project__weeks about-project__weeks_backend'>
          1 неделя
        </p>
        <p className='about-project__weeks about-project__weeks_frontend'>
          4 недели
        </p>
        <p className='about-project__sub'>Back-end</p>
        <p className='about-project__sub'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;