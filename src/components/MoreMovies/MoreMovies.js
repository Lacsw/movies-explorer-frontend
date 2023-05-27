import './MoreMovies.scss';

const MoreMovies = ({ handleMoreBtnClick }) => {
  return (
    <section className='more-movies'>
      <button className='more-movies__btn' onClick={handleMoreBtnClick}>
        Ещё
      </button>
    </section>
  );
};

export default MoreMovies;
