import './FilterCheckbox.scss';

function FilterCheckbox({ handleIsShortCheckbox, isShort }) {
  const handleChange = (event) => {
    handleIsShortCheckbox(event.target.checked);
  };

  return (
    <div className='filter-checkbox__wrap'>
      <div className='filter-checkbox__container'>
        <label className='filter-checkbox__switch' htmlFor='checkbox'>
          <input
            type='checkbox'
            id='checkbox'
            className='filter-checkbox__input'
            onChange={handleChange}
            checked={isShort}
          />
          <div className='filter-checkbox__slider filter-checkbox__slider_round' />
        </label>
      </div>
      <p className='filter-checkbox__quote'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
