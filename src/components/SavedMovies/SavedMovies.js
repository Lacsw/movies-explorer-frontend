import { useCallback, useEffect, useMemo, useState } from 'react';

import './SavedMovies.scss';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import mainApi from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';

import { errors } from '../../utils/constants';

function SavedMovies() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [isShort, setIsShort] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const fetchMovies = await mainApi.getSavedMovies();
      setSavedMovies(fetchMovies);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    setHasError(false);

    fetchMovies();
  }, [fetchMovies]);

  const handleDeleteMovie = async (movie) => {
    try {
      await mainApi.deleteMovie(movie);

      setSavedMovies((state) =>
        state.filter((i) => i.movieId !== movie.movieId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleIsShortCheckbox = (value) => {
    setIsShort(value);
  };

  const handleSearch = useCallback((inputValue) => {
    setSearchString(inputValue);
  }, []);

  const filteredMovies = useMemo(() => {
    if (!searchString.length) {
      return savedMovies;
    }
    const filtered = savedMovies.filter((movie) => {
      const nameRU = movie.nameRU.toLowerCase();
      const nameEN = movie.nameEN.toLowerCase();
      const str = searchString.toLowerCase();

      if (isShort && movie.duration > 40) {
        return false;
      }

      return nameRU.includes(str) || nameEN.includes(str);
    });

    return filtered;
  }, [searchString, savedMovies, isShort]);

  return (
    <main className='saved-movies'>
      <SearchForm
        isShort={isShort}
        searchString={searchString}
        handleSearch={handleSearch}
        handleIsShortCheckbox={handleIsShortCheckbox}
      />
      {hasError && (
        <p className='movies__search-error'>{errors.SERVER_CONNECTION}</p>
      )}

      {isLoading ? (
        <Preloader />
      ) : !filteredMovies.length && searchString ? (
        <p className='movies__search-error'>{errors.FILMS_NOT_FOUND}</p>
      ) : (
        <MoviesCardList
          movies={filteredMovies}
          onDeleteMovie={handleDeleteMovie}
        />
      )}
    </main>
  );
}

export default SavedMovies;
