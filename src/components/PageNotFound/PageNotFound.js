import { useNavigate } from 'react-router';
import './PageNotFound.scss';

const PageNotFound = () => {
  let navigate = useNavigate();

  return (
    <section className='not-found'>
      <h2 className='not-found__title'>404</h2>
      <p className='not-found__subtitle'>Страница не найдена</p>

      <button
        className='not-found__button'
        onClick={() => navigate(-1)}>
        Назад
      </button>
    </section>
    
  );
};

export default PageNotFound;
