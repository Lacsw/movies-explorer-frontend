import './SavedMovies.scss';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <section className='saved-movies'>
      <Header />
      <SearchForm />
      <div className='saved-movies__content'>
        <MoviesCardList />
      </div>

      <Footer />
    </section>
  );
}

export default SavedMovies;
