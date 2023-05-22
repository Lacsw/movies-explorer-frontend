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
import InfoTooltip from '../InfoTooltip/InfoTooltip';

import { errors } from '../../utils/constants';

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isAppInit, setIsAppInit] = useState(false);
  const [infoTooltipState, setInfoTooltipState] = useState({
    opened: false,
    status: 'fail',
    text: '',
  });

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
      })
      .finally(() => {
        setIsAppInit(true);
      });
  }, [navigate, pathname]);

  const handleLogin = (formValue) => {
    auth
      .login(formValue)
      .then(() => {
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch((error) => {
        if (error === 'Ошибка 409') {
          setInfoTooltipState({
            opened: true,
            status: 'fail',
            text: errors.FAIL_LOGIN,
          });
        } else {
          setInfoTooltipState({
            opened: true,
            status: 'fail',
            text: errors.FAIL_SERVER,
          });
        }
      });
  };

  const handleReigster = (data) => {
    auth
      .signup(data)
      .then(() => {
        handleLogin({ email: data.email, password: data.password });
      })
      .catch((error) => {
        if (error === 'Ошибка 409') {
          setInfoTooltipState({
            opened: true,
            status: 'fail',
            text: errors.EMAIL_DUPLICATE,
          });
        } else if (error === 'Ошибка 400') {
          setInfoTooltipState({
            opened: true,
            status: 'fail',
            text: errors.EMAIL_DUPLICATE,
          });
        } else {
          setInfoTooltipState({
            opened: true,
            status: 'fail',
            text: errors.FAIL_SERVER,
          });
        }
      });
  };

  const handleLogout = () => {
    auth
      .signout()
      .then(() => {
        localStorage.clear();
        setLoggedIn(false);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!isAppInit) {
    return null;
  }

  const closePopup = () => {
    setInfoTooltipState({
      opened: false,
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
      <InfoTooltip state={infoTooltipState} onClose={closePopup} />
    </CurrentUserContext.Provider>
  );
}

export default App;
