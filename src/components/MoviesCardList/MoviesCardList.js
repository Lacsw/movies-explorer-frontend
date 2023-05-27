import './MoviesCardList.scss';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, onLikeMovie, onDeleteMovie }) {
  return (
    <section className='movie-cardlist'>
      {movies.map((movie) => (
        <MoviesCard
          key={movie.id || movie._id}
          movie={movie}
          onLikeMovie={onLikeMovie}
          onDeleteMovie={onDeleteMovie}
        />
      ))}
    </section>
  );
}

export default MoviesCardList;
