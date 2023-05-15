import './FilterCheckbox.scss';

function FilterCheckbox() {
  return (
    <div className='filter-checkbox__wrap'>
      <div className='filter-checkbox__container'>
        <label
          className='filter-checkbox__switch'
          for='checkbox'>
          <input
            type='checkbox'
            id='checkbox'
            className='filter-checkbox__input'
          />
          <div className='filter-checkbox__slider filter-checkbox__slider_round' />
        </label>
      </div>
      <p className='filter-checkbox__quote'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
