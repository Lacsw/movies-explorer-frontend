import { Route, Routes, useLocation, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

import './App.scss';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import auth from '../../utils/auth';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    mainApi
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
        setLoggedIn(true);
        navigate(pathname);
      })
      .catch((error) => {
        setLoggedIn(false);
        console.log(error);
      });
  }, []);

  const handleLogin = (formValue) => {
    auth
      .login(formValue)
      .then(() => {
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleReigster = (data) => {
    auth.signup(data).then(() => {
      handleLogin({ email: data.email, password: data.password });
    });
  };

  const handleLogout = () => {
    auth.signout().then(() => {
      setLoggedIn(false);
      navigate('/');
    });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Header isLoggedIn={loggedIn} />
        <Routes>
          <Route element={<ProtectedRoute isLoggedIn={loggedIn} />}>
            <Route path='/movies' element={<Movies />} />
            <Route path='/saved-movies' element={<SavedMovies />} />
            <Route
              path='/profile'
              element={<Profile onLogout={handleLogout} />}
            />
          </Route>
          <Route path='/' element={<Main />} />
          <Route path='/signin' element={<Login onLogin={handleLogin} />} />
          <Route
            path='/signup'
            element={<Register onRegister={handleReigster} />}
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
