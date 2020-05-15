import React from 'react';
import getHashParams from './params/getHashParams';
import { spotifyWebApi } from './spotifyWebApi/spotifyWebApi';
import LoginPage from './components/LoginPage/LoginPage';
import MusicBar from './components/MusicBar/MusicBar';
import { useSelector, useDispatch } from 'react-redux';
import { SET_LOGGED_IN } from './store/actions/actionTypes';
import GetMe from './components/GetMe/GetMe';

const App = () => {
  const resetToken = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('expirationDate');
    alert('Please login again ;)');
    window.location.href = window.location.origin + window.location.pathname;
  };

  const loggedIn = useSelector(state => state.appReducer.loggedIn);
  const dispatch = useDispatch();

  if (localStorage.getItem('accessToken')) {
    spotifyWebApi.setAccessToken(
      JSON.parse(localStorage.getItem('accessToken'))
    );
    if (!loggedIn) dispatch({ type: SET_LOGGED_IN, bool: true });
  } else {
    const params = getHashParams();
    if (Object.keys(params).length) {
      const store = JSON.stringify(params.access_token);
      localStorage.setItem('accessToken', store);
      localStorage.setItem('expirationDate', Date.now() + 3600 * 1000);
      spotifyWebApi.setAccessToken(params.access_token);
      if (!loggedIn) dispatch({ type: SET_LOGGED_IN, bool: true });
    }
  }

  const expirationDate = Number(localStorage.getItem('expirationDate'));

  if (expirationDate && expirationDate < Date.now()) {
    resetToken();
  } else if (expirationDate) {
    const timeLeft = expirationDate - Date.now();
    setTimeout(resetToken, timeLeft);
  }

  return (
    <>
      {loggedIn ? (
        <div className="App">
          <MusicBar />
          <GetMe />
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default App;
