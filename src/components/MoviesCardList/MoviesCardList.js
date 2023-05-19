import { useLocation } from 'react-router';

import './MoviesCardList.scss';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies }) {
  const { pathname } = useLocation();

  return (
    <section className='movie-cardlist'>
      {pathname === '/saved-movies'
        ? movies
            .slice(0, 3)
            .map((movie) => <MoviesCard key={movie.id} movie={movie} />)
        : movies.map((movie) => <MoviesCard key={movie.id} movie={movie} />)}
    </section>
  );
}

export default MoviesCardList;
