import { useCallback, useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';

import './Movies.scss';

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

import moviesApi from '../../utils/MoviesApi';
import MoreMovies from '../MoreMovies/MoreMovies';
import Preloader from '../Preloader/Preloader';
import mainApi from '../../utils/MainApi';

import { errors } from '../../utils/constants';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [isShort, setIsShort] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [page, setPage] = useState(0);
  const [hasError, setHasError] = useState(false);

  const fetchMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const [initialMovies, savedMovies] = await Promise.all([
        moviesApi.getMovies(),
        mainApi.getSavedMovies(),
      ]);

      setMovies(initialMovies);
      setSavedMovies(savedMovies);

      localStorage.setItem('beatMovies', JSON.stringify(initialMovies));
      localStorage.setItem('savedUserMovies', JSON.stringify(savedMovies));
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleResize = debounce(() => {
    setScreenWidth(window.innerWidth);
  }, 150);

  useEffect(() => {
    const savedSearch = localStorage.getItem('search');
    const savedIsShort = localStorage.getItem('isShort');
    const savedBeatMovies = JSON.parse(localStorage.getItem('beatMovies'));
    const savedUserMovies = JSON.parse(localStorage.getItem('savedUserMovies'));

    if (savedSearch) {
      setSearchString(savedSearch);
    }
    if (savedIsShort) {
      setIsShort(savedIsShort === 'true');
    }
    if (savedBeatMovies) {
      setMovies(savedBeatMovies);
    }
    if (savedUserMovies) {
      setSavedMovies(savedUserMovies);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const handleSearch = useCallback(
    (inputValue) => {
      setHasError(false);
      fetchMovies();
      setSearchString(inputValue);
    },
    [fetchMovies]
  );

  const filteredMovies = useMemo(() => {
    if (!searchString) {
      return [];
    }

    const filtered = movies.filter((movie) => {
      const nameRU = movie.nameRU.toLowerCase();
      const nameEN = movie.nameEN.toLowerCase();
      const str = searchString.toLowerCase();

      if (isShort && movie.duration > 40) {
        return false;
      }

      return nameRU.includes(str) || nameEN.includes(str);
    });

    localStorage.setItem('search', searchString);
    localStorage.setItem('isShort', String(isShort));

    return filtered;
  }, [searchString, movies, isShort]);

  const moviesToRender = useMemo(() => {
    const countToRender = screenWidth < 768 ? 5 : screenWidth < 1280 ? 8 : 12;
    const moreMovies = screenWidth < 1280 ? 2 : 3;

    return filteredMovies
      .slice(0, countToRender + page * moreMovies)
      .map((movie) => ({
        ...movie,
        isLiked: savedMovies.some((i) => i.movieId === movie.id),
      }));
  }, [screenWidth, savedMovies, filteredMovies, page]);

  const handleIsShortCheckbox = (value) => {
    setIsShort(value);
  };

  const handleMoreBtnClick = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const handleSaveMovie = async (movie) => {
    try {
      if (!movie.isLiked) {
        const savedMovie = await mainApi.saveMovie(movie);

        setSavedMovies((prev) => [savedMovie, ...prev]);
      } else {
        await handleDeleteMovie(movie);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteMovie = async (movie) => {
    try {
      const deletedMovie = savedMovies.find((i) => i.movieId === movie.id);

      await mainApi.deleteMovie(deletedMovie);
      setSavedMovies((state) => state.filter((i) => i.movieId !== movie.id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className='movies'>
      <section className='movies__content'>
        <SearchForm
          handleSearch={handleSearch}
          handleIsShortCheckbox={handleIsShortCheckbox}
          searchString={searchString}
          isShort={isShort}
        />

        {hasError && (
          <p className='movies__search-error'>{errors.SERVER_CONNECTION}</p>
        )}

        {isLoading ? (
          <Preloader />
        ) : !moviesToRender.length && searchString ? (
          <p className='movies__search-error'>{errors.FILMS_NOT_FOUND}</p>
        ) : (
          <MoviesCardList
            movies={moviesToRender}
            savedMovies={savedMovies}
            onLikeMovie={handleSaveMovie}
          />
        )}

        {filteredMovies > moviesToRender && (
          <MoreMovies handleMoreBtnClick={handleMoreBtnClick} />
        )}
      </section>
    </main>
  );
}

export default Movies;
