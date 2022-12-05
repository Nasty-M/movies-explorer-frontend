class Api {
  constructor(options) {
    this._options = options;
  }

  _checkResponseStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  getUser() {
    return fetch(`${this._options.baseUrl}/users/me`, {
      headers: this._options.headers,
      credentials: this._options.credentials,
    })
    .then(this._checkResponseStatus)
  }

  editProfile(data) {
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._options.headers,
      body: JSON.stringify(data),
      credentials: this._options.credentials,
    })
    .then(this._checkResponseStatus);
  }

  toggleSave(movie, isSaved, mov) {
    if (!isSaved) {
      console.log(!isSaved);
      return fetch(`${this._options.baseUrl}/movies`, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: this._options.headers,
        credentials: this._options.credentials,
      })
      .then(this._checkResponseStatus);
    } else {
      return fetch(`${this._options.baseUrl}/movies/${mov._id}`, {
        method: 'DELETE',
        headers: this._options.headers,
        credentials: this._options.credentials,
      })
      .then(this._checkResponseStatus);
    } 
  }

  getMovies() {
    return fetch(`${this._options.baseUrl}/movies`, {
      headers: this._options.headers,
      credentials: this._options.credentials,
    })
    .then(this._checkResponseStatus);
  }

  register(data) {
    return fetch(`${this._options.baseUrl}/signup`, {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify(data)
    })
    .then(this._checkResponseStatus)
  }

  authorize(data) {
    return fetch(`${this._options.baseUrl}/signin`, {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify(data),
      credentials: this._options.credentials,
    })
    .then(this._checkResponseStatus)
  }

  logout() {
    return fetch(`${this._options.baseUrl}/signout`, {
      headers: this._options.headers,
      credentials: this._options.credentials,
    })
    .then(this._checkResponseStatus)
  }

}

const api = new Api({
  //baseUrl: 'http://localhost:3001',
  baseUrl: 'https://api.nastiakor.diploma.nomoredomains.icu',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
});

export default api;