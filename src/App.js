import React, { Component, useState } from 'react';
import getHashParams from './params/getHashParams';
import { spotifyWebApi } from './spotifyWebApi/spotifyWebApi';
import LoginPage from './components/LoginPage';
import PlaybackView from './components/PlaybackView';
import MusicBar from './components/MusicBar';

const App = () => {
   const paramsToStore = getHashParams();
   let refreshToken = '';

   const [loggedIn, setLoggedIn] = useState(false);

   const refreshAccessToken = () => {
      const refresh_token = JSON.parse(localStorage.getItem('access_token'));
      console.log(refresh_token);
      fetch(`http://localhost:8888/refresh_token?refresh_token=${refresh_token}`)
         .then(res => res.json())
         .then(data => {
            spotifyWebApi.setAccessToken(data.access_token);
            localStorage.setItem('access_token', JSON.stringify(data.access_token));
            refreshToken = data.access_token;
         })
         .catch(err => console.log(err))
   }

   if (refreshToken || paramsToStore.access_token) {
      const localToken = JSON.parse(localStorage.getItem('access_token'));
      localStorage.setItem('access_token', JSON.stringify(refreshToken || paramsToStore.access_token));
      localStorage.setItem('refresh_token', JSON.stringify(refreshToken || paramsToStore.refresh_token));
      localStorage.setItem("expirationDate", Date.now() + 3600 * 1000);
      spotifyWebApi.setAccessToken(refreshToken || localToken);
      if (!loggedIn) setLoggedIn(true);
   }

   const expirationDate = Number(localStorage.getItem("expirationDate"));
   if (expirationDate && expirationDate < Date.now()) {
      refreshAccessToken();
   }

   return (
      <>
         {loggedIn ? <div className="App">
            <button style={{ marginLeft: 230 }} onClick={refreshAccessToken}>1231231</button>
            <PlaybackView />
            <MusicBar />
         </div> : <LoginPage />}
      </>
   );
}
export default App;