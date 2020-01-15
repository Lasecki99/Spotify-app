import React, { Component, useState } from 'react';
import getHashParams from './params/getHashParams';
import { spotifyWebApi } from './spotifyWebApi/spotifyWebApi';
import LoginPage from './components/LoginPage';
import PlaybackView from './components/PlaybackView';
import MusicBar from './components/MusicBar';

const App = () => {
   const [paramsToStore, setParamsToStore] = useState(getHashParams());
   const [refreshToken, setRefreshToken] = useState('');
   const [loggedIn, setLoggedIn] = useState(paramsToStore.access_token ? true : false);

   const refreshAccessToken = () => {
      const refresh_token = JSON.parse(localStorage.getItem('access_token'));
      fetch(`http://localhost:8888/refresh_token?refresh_token=${refresh_token}`)
         .then(res => res.json())
         .then(data => {
            spotifyWebApi.setAccessToken(data.access_token);
            localStorage.setItem('access_token', JSON.stringify(data.access_token));
            setRefreshToken(data.access_token);
         })
         .catch(() => {
            alert("Couldn't refresh your access token. Please try to sign in once again.");
            setLoggedIn(false);
            window.location.reload();
         })
   }

   if (refreshToken || paramsToStore.access_token) {
      const localToken = JSON.parse(localStorage.getItem('access_token'));
      localStorage.setItem('access_token', JSON.stringify(refreshToken || paramsToStore.access_token));
      localStorage.setItem('refresh_token', JSON.stringify(refreshToken || paramsToStore.refresh_token));
      spotifyWebApi.setAccessToken(refreshToken || localToken);
      if (!loggedIn) setLoggedIn(true);
   }

   if (!localStorage.getItem("expirationDate")) {
      localStorage.setItem("expirationDate", Date.now() + 3600 * 1000);
   }

   const expirationDate = Number(localStorage.getItem("expirationDate"));
   if (expirationDate && expirationDate < Date.now()) {
      refreshAccessToken();
      localStorage.setItem("expirationDate", Date.now() + 3600 * 1000);
   }

   return (
      <>
         {loggedIn ? <div className="App">
            <MusicBar />
         </div> : <LoginPage />}
      </>
   );
}
export default App;