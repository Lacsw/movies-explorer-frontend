import './MoviesCardList.scss';

import MoviesCard from '../MoviesCard/MoviesCard';
import MoreMovies from '../MoreMovies/MoreMovies';

import { movies } from '../../utils/constants';
import { useLocation } from 'react-router';

function MoviesCardList() {
  const { pathname } = useLocation();

  return (
    <section className='movie-cardlist'>
      {pathname === '/saved-movies'
        ? movies.slice(0, 3).map((movie) => <MoviesCard movie={movie} />)
        : movies.map((movie) => <MoviesCard movie={movie} />)}
      {pathname === '/movies' && <MoreMovies />}
    </section>
  );
}

export default MoviesCardList;
