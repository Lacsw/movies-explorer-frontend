import { useLocation } from 'react-router';
import './MoviesCard.scss';

function MoviesCard({ movie }) {
  const { pathname } = useLocation();

  const isLiked = movie.like || false;
  const cardLikeButtonClassName = `card__like-btn ${
    isLiked && 'card__like-btn_active'
  }`;

  const convertedDuration = (minutes) => {
    const minutesInHour = 60;
    return `${Math.floor(minutes / minutesInHour)}ч  ${
      minutes % minutesInHour
    }м`;
  };

  return (
    <article className='card'>
      <a href={movie.trailerLink} target='_blank' rel='noreferrer noopener'>
        <img
          className='card__image'
          src={`https://api.nomoreparties.co/${movie.image.url}`}
          alt={`Изображение ${movie.name}`}
        />
      </a>

      <div className='card__caption'>
        <h2 className='card__title'>{movie.nameRU}</h2>
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
        <span>{convertedDuration(movie.duration)}</span>
      </div>
    </article>
  );
}

export default MoviesCard;
