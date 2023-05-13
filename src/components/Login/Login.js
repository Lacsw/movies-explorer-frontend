import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.scss';

import Logo from '../Logo/Logo';

function Login({ handleLogin }) {
  const [formValue, setFormValue] = useState({
    email: 'frolloff1@yandex.ru',
    password: '',
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
    if (!formValue.email || !formValue.password) {
      return;
    }
    handleLogin(formValue);
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
                value={formValue.email}
                onChange={handleChange}
              />
              <span className='signin__input-error name-input-error'></span>
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
                value={formValue.password}
                onChange={handleChange}
              />
              <span className='signin__input-error password-input-error'></span>
            </label>
          </fieldset>

          <button
            className='signin__submit-btn'
            type='submit'>
            Войти
          </button>
          <p className='signin__already'>
            Еще не зарегистрированы?
            <Link
              className='signin__link'
              to={'/signup'}>
              Регистрация
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
