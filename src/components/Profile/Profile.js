import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Profile.scss';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import mainApi from '../../utils/MainApi';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

import { EMAIL_REGEXP, errors as err } from '../../utils/constants';

const Profile = ({ onLogout }) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, setValues, handleChange, isValid } = useFormWithValidation();
  const [infoTooltipState, setInfoTooltipState] = useState({
    opened: false,
    status: 'fail',
    text: '',
  });
  const hasChange =
    currentUser.name === values.name && currentUser.email === values.email;

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email });
  }, [currentUser.name, currentUser.email, setValues]);

  const handleSubmit = (event) => {
    event.preventDefault();
    mainApi
      .updateUserInfo(values)
      .then(() => {
        setInfoTooltipState({
          opened: true,
          status: 'success',
          text: err.USER_INFO_UPDATE,
        });
      })
      .catch((error) => {
        if (error === 'Ошибка 409') {
          setInfoTooltipState({
            opened: true,
            status: 'fail',
            text: err.EMAIL_DUPLICATE,
          });
        } else {
          setInfoTooltipState({
            opened: true,
            status: 'fail',
            text: err.FAIL_SERVER,
          });
        }
      });
  };

  const closePopup = () => {
    setInfoTooltipState({
      opened: false,
    });
  };

  return (
    <main className='profile'>
      <section className='profile__content'>
        <div className='profile__wrap'>
          <h2 className='profile__title'>{`Привет, ${values.name || ''}!`}</h2>
          <form className='profile__form' onSubmit={handleSubmit}>
            <fieldset className='profile__fieldset'>
              <div className='profile__info'>
                <label htmlFor='name' className='profile__label'>
                  Имя
                </label>
                <input
                  name='name'
                  className='profile__input'
                  type='text'
                  id='name'
                  required
                  minLength='2'
                  maxLength='30'
                  placeholder='Имя'
                  value={values['name'] || ''}
                  onChange={handleChange}
                />
                <span
                  className={`profile__input-error name-input-error ${
                    errors.name ? 'profile__input-error_active' : ''
                  }`}>
                  {errors.name}
                </span>
              </div>
              <div className='profile__info'>
                <label htmlFor='email' className='profile__label'>
                  E-mail
                </label>
                <input
                  name='email'
                  className='profile__input'
                  type='email'
                  id='email'
                  placeholder='Email'
                  value={values['email'] || ''}
                  onChange={handleChange}
                  pattern={EMAIL_REGEXP}
                />
                <span
                  className={`profile__input-error email-input-error ${
                    errors.email ? 'profile__input-error_active' : ''
                  }`}>
                  {errors.email}
                </span>
              </div>
            </fieldset>
            <div className='profile__tooltip'>
              <button
                disabled={hasChange}
                type='submit'
                className={`profile__link profile__link_type_edit ${
                  hasChange || !isValid ? 'profile__link_disabled' : ''
                }`}>
                Редактировать
              </button>
              <Link
                onClick={onLogout}
                className='profile__link profile__link_type_logout'>
                Выйти из аккаунта
              </Link>
            </div>
          </form>
        </div>
      </section>
      <InfoTooltip state={infoTooltipState} onClose={closePopup} />
    </main>
  );
};

export default Profile;
