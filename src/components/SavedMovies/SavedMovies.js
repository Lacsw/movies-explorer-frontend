import { useEffect, useState } from 'react';

import './SavedMovies.scss';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import mainApi from '../../utils/MainApi';

function SavedMovies() {
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDeleteMovie = async (movie) => {
    try {
      await mainApi.deleteMovie(movie);
      setSavedMovies((state) => state.filter((i) => i.id !== movie.movieId));
    } catch (error) {}
  };

  return (
    <main className='saved-movies'>
      <SearchForm />
      <div className='saved-movies__content'>
        <MoviesCardList
          movies={savedMovies}
          onDeleteMovie={handleDeleteMovie}
        />
      </div>
    </main>
  );
}

export default SavedMovies;
