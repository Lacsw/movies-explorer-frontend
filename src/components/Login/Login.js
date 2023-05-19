import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import './Login.scss';

import Logo from '../Logo/Logo';
import useFormWithValidation from '../../hooks/useFormWithValidation';

import { EMAIL_REGEXP } from '../../utils/constants';

function Login({ onLogin }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    onLogin(values);
  };

  return (
    <section className='signup'>
      <div className='signin__container'>
        <div className='signin__header'>
          <Logo />
          <h1 className='signin__title'>Рады видеть!</h1>
        </div>

        <form
          className='signin__form'
          name='register-form'
          onSubmit={handleSubmit}>
          <fieldset className='signin__set'>
            <label className='signin__field'>
              E-mail
              <input
                className='signin__input signin__input_type_register-name'
                type='email'
                name='email'
                placeholder='E-mail'
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

            <label className='signin__field'>
              Пароль
              <input
                className='signin__input signin__input_type_password'
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
            className={`signin__submit-btn ${
              !isValid ? 'signin__submit-btn_disabled' : ''
            }`}
            type='submit'
            disabled={!isValid}>
            Войти
          </button>
          <p className='signin__already'>
            Еще не зарегистрированы?
            <Link className='signin__link' to={'/signup'}>
              Регистрация
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
