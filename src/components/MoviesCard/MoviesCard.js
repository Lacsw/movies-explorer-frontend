import { useLocation } from 'react-router';
import './MoviesCard.scss';

function MoviesCard({ movie }) {
  const { pathname } = useLocation();
  const isLiked = movie.like || false;
  const cardLikeButtonClassName = `card__like-btn ${
    isLiked && 'card__like-btn_active'
  }`;

  return (
    <article className='card'>
      <img
        className='card__image'
        src={movie.image}
        alt={`Изображение`}
      />
      <div className='card__caption'>
        <h2 className='card__title'>{movie.name}</h2>
        {pathname === '/movies' ? (
          <button
            className={cardLikeButtonClassName}
            type='button'
            aria-label='кнопка лайк'
          />
        ) : (
          <button
            className='card__delete'
            type='button'
            aria-label='кнопка удаления'
          />
        )}
      </div>

      <div className='card__movie-time'>
        <span>{movie.duration}</span>
      </div>
    </article>
  );
}

export default MoviesCard;
