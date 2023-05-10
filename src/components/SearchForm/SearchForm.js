import './SearchForm.scss';
import search from '../../images/search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form className='search-form'>
      <div className='search-form__container'>
        <div className='search-form__wrap'>
          <img
            className='search-form__img'
            src={search}
            alt='лупа'
          />
          <input
            className='search-form__input'
            placeholder='Фильм'
            required
          />
          <button className='search-form__btn' />
        </div>

        <FilterCheckbox />
      </div>
    </form>
  );
}

export default SearchForm;
