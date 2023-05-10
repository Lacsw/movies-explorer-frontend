import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.scss';

function Movies() {
  return (
    <section className='movies'>
      <Header />

      <div className='movies__content'>
        <SearchForm />
        <MoviesCardList />
      </div>

      <Footer />
    </section>
  );
}

export default Movies;
