import './Movies.scss';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function Movies() {
  return (
    <main className='movies'>
      <section className='movies__content'>
        <SearchForm />
        <MoviesCardList />
      </section>
    </main>
  );
}

export default Movies;
