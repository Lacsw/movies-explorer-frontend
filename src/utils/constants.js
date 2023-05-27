export const EMAIL_REGEXP = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
export const NAME_REGEXP = /^[a-zA-Z0-9-а-яА-Я\s]+$/;

export const errors = {
  SERVER_CONNECTION:
    'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
  FILMS_NOT_FOUND: 'Фильмы не найдены. Попробуйте изменить запрос.',
  EMAIL_DUPLICATE: 'Пользователь с такой почтой уже существует',
  USER_NOT_EXIST: 'Такого пользователя не существует.',
  FAIL_SERVER: 'Что-то пошло не так! Попробуйте ещё раз.',
  SUCCSESS_REGISTRATION: 'Вы успешно зарегистрировались!',
  SUCCSESS_LOGIN: 'Вы успешно вошли!',
  FAIL_LOGIN: 'Неправильные почта или пароль',
  USER_INFO_UPDATE: 'Данные успешно обновлены.',
};

export const SHORT_MOVIE_MAX_DURATION = 40;
export const MEDIUM_SIZE_SCREEN = 768;
export const BIG_SIZE_SCREEN = 1280;
export const CARDS_ON_SMALL_SCREEN = 5;
export const CARDS_ON_MEDIUM_SCREEN = 8;
export const CARDS_ON_BIG_SCREEN = 12;
export const PLUS_CARDS_ON_BIG_SCREEN = 3;
export const PLUS_CARDS_ON_MEDIUM_SCREEN = 2;
