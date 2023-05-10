import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Register.scss';

import Logo from '../Logo/Logo';

function Register({ onRegister }) {
  const [formValue, setFormValue] = useState({
    name: 'Roman',
    email: 'frolloff1@yandex.ru',
    password: 'testpass',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formValue);
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
                value={formValue.name}
                onChange={handleChange}
              />
              <span className='signup__input-error name-input-error'></span>
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
                value={formValue.email}
                onChange={handleChange}
              />
              <span className='signup__input-error name-input-error'></span>
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
                value={formValue.password}
                onChange={handleChange}
              />
              <span className='signup__input-error password-input-error'>
                Что-то пошло не так...
              </span>
            </label>
          </fieldset>

          <button
            className='signup__submit-btn'
            type='submit'>
            Зарегистрироваться
          </button>
          <p className='signup__already'>
            Уже зарегистрированы?
            <Link
              className='signup__link'
              to={'/signin'}>
              Войти
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Register;
