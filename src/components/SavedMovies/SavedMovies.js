import './SavedMovies.scss';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <main className='saved-movies'>
      <SearchForm />
      <div className='saved-movies__content'>
        <MoviesCardList />
      </div>
    </main>
  );
}

export default SavedMovies;
