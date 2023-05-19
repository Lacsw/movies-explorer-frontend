import { useEffect, useState } from 'react';

import './SearchForm.scss';

import search from '../../images/search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  handleSearch,
  handleIsShortCheckbox,
  isShort,
  searchString,
}) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(searchString);
  }, [searchString]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(inputValue);
  };

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <div className='search-form__container'>
        <div className='search-form__wrap'>
          <img className='search-form__img' src={search} alt='лупа' />
          <input
            onChange={handleChange}
            className='search-form__input'
            placeholder='Фильм'
            autoComplete='off'
            value={inputValue}
            required
          />
          <button className='search-form__btn' />
        </div>

        <FilterCheckbox
          handleIsShortCheckbox={handleIsShortCheckbox}
          isShort={isShort}
        />
      </div>
    </form>
  );
}

export default SearchForm;
