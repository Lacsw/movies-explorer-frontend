import './Profile.scss';

import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <section className='profile'>
      <Header />

      <div className='profile__content'>
        <div className='profile__wrap'>
          <h2 className='profile__title'>Привет, Роман!</h2>
          <form className='profile__form'>
            <fieldset className='profile__fieldset'>
              <div className='profile__info'>
                <label
                  for='name'
                  className='profile__label'>
                  Имя
                </label>
                <input
                  className='profile__input'
                  type='text'
                  id='name'
                  placeholder='Имя'
                  value='Роман'
                />
              </div>
              <div className='profile__info'>
                <label
                  for='email'
                  className='profile__label'>
                  E-mail
                </label>
                <input
                  className='profile__input'
                  type='email'
                  id='email'
                  placeholder='Email'
                  value='frolloff1@yandex.ru'
                />
              </div>
            </fieldset>
          </form>
        </div>
        <div className='profile__tooltip'>
          <Link className='profile__link profile__link_type_edit'>
            Редактировать
          </Link>
          <Link className='profile__link profile__link_type_logout'>
            Выйти из аккаунта
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Profile;
