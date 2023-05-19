import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import './Register.scss';

import Logo from '../Logo/Logo';
import useFormWithValidation from '../../hooks/useFormWithValidation';

import { EMAIL_REGEXP } from '../../utils/constants';

function Register({ onRegister }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  };

  return (
    <section className='signup'>
      <div className='signup__container'>
        <div className='signup__header'>
          <Logo />
          <h1 className='signup__title'>Добро пожаловать!</h1>
        </div>

        <form
          className='signup__form'
          name='register-form'
          onSubmit={handleSubmit}>
          <fieldset className='signup__set'>
            <label className='signup__field'>
              Имя
              <input
                className='signup__input signup__input_type_register-name'
                type='name'
                name='name'
                placeholder='Имя'
                id='register-name-input'
                minLength='2'
                maxLength='40'
                required
                value={values.name || ''}
                onChange={handleChange}
              />
              <span
                className={`signin__input-error name-input-error ${
                  errors.name ? 'signin__input-error_active' : ''
                }`}>
                {errors.name}
              </span>
            </label>

            <label className='signup__field'>
              E-mail
              <input
                className='signup__input signup__input_type_register-name'
                type='email'
                name='email'
                placeholder='Email'
                id='register-name-input'
                minLength='2'
                maxLength='40'
                required
                value={values.email || ''}
                onChange={handleChange}
                pattern={EMAIL_REGEXP}
              />
              <span
                className={`signin__input-error email-input-error ${
                  errors.email ? 'signin__input-error_active' : ''
                }`}>
                {errors.email}
              </span>
            </label>

            <label className='signup__field'>
              Пароль
              <input
                className='signup__input signup__input_type_password signup__input_error'
                type='password'
                name='password'
                placeholder='Пароль'
                id='password-input'
                minLength='2'
                maxLength='200'
                required
                value={values.password || ''}
                onChange={handleChange}
              />
              <span
                className={`signin__input-error password-input-error ${
                  errors.password ? 'signin__input-error_active' : ''
                }`}>
                {errors.password}
              </span>
            </label>
          </fieldset>

          <button
            className={`signup__submit-btn ${
              !isValid ? 'signup__submit-btn_disabled' : ''
            }`}
            type='submit'>
            Зарегистрироваться
          </button>
          <p className='signup__already'>
            Уже зарегистрированы?
            <Link className='signup__link' to={'/signin'}>
              Войти
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Register;
