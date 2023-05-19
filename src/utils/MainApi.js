class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  }

  async getUserInfo() {
    const response = await fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    });
    return this._checkResponse(response);
  }

  async updateUserInfo(data) {
    const response = await fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
      credentials: 'include',
    });
    return this._checkResponse(response);
  }

  async getSavedMovies() {
    const response = await fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    });
    return this._checkResponse(response);
  }

  async saveMovie(data) {
    const response = await fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: data['country'],
        director: data['director'],
        duration: data['duration'],
        description: data['description'],
        image: `https://api.nomoreparties.co/${data['image']['url']}`,
        trailerLink: data['trailerLink'],
        thumbnail: `https://api.nomoreparties.co/${data['image']['url']}`,
        movieId: data['id'],
        nameRU: data['nameRU'],
        nameEN: data['nameEN'],
        year: data['year'],
      }),
      credentials: 'include',
    });
    return this._checkResponse(response);
  }

  async deleteMovie(data) {
    const response = await fetch(`${this._baseUrl}/movies/${data._id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    });
    return this._checkResponse(response);
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.movies-tourer.nomoredomains.monster',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;
