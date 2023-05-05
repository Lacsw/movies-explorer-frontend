import './Techs.scss';

function Techs() {
  return (
    <section className='techs'>
      <h2 className='techs__title'>Технологии</h2>
      <hr className='techs__title-underline' />
      <div className='techs__info'>
        <h3 className='techs__subtitle'>7 технологий</h3>
        <p className='techs__text'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className='techs__list'>
          <li className='techs__tech'>HTML</li>
          <li className='techs__tech'>CSS</li>
          <li className='techs__tech'>JS</li>
          <li className='techs__tech'>React</li>
          <li className='techs__tech'>Git</li>
          <li className='techs__tech'>Express.js</li>
          <li className='techs__tech'>mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;