import { useLocation } from 'react-router';
import { useCallback } from 'react';

import './MoviesCard.scss';

function MoviesCard({ movie, onLikeMovie, onDeleteMovie }) {
  const { pathname } = useLocation();

  const cardLikeButtonClassName = `card__like-btn ${
    movie.isLiked && 'card__like-btn_active'
  }`;

  const convertedDuration = (minutes) => {
    const minutesInHour = 60;
    return `${Math.floor(minutes / minutesInHour)}ч  ${
      minutes % minutesInHour
    }м`;
  };

  const handleLikeClick = useCallback(() => {
    onLikeMovie(movie);
  }, [movie, onLikeMovie]);

  const handleDeleteClick = () => {
    onDeleteMovie(movie);
  };

  return (
    <article className='card'>
      <a href={movie.trailerLink} target='_blank' rel='noreferrer noopener'>
        <img
          className='card__image'
          src={
            movie.image.url
              ? `https://api.nomoreparties.co/${movie.image.url}`
              : movie.image
          }
          alt={`Изображение ${movie.name}`}
        />
      </a>

      <div className='card__caption'>
        <h2 className='card__title'>{movie.nameRU}</h2>
        {pathname === '/movies' ? (
          <button
            onClick={handleLikeClick}
            className={cardLikeButtonClassName}
            type='button'
            aria-label='кнопка лайк'
          />
        ) : (
          <button
            className='card__delete'
            type='button'
            aria-label='кнопка удаления'
            onClick={handleDeleteClick}
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
