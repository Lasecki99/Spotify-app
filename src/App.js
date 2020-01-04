import React, { Component, useState } from 'react';
import getHashParams from './params/getHashParams';
import { spotifyWebApi } from './spotifyWebApi/spotifyWebApi';
import LoginPage from './components/LoginPage';
import PlaybackView from './components/PlaybackView';
import MusicBar from './components/MusicBar';

const App = () => {
   const paramsToStore = getHashParams();
   let params = '';

   if (localStorage.getItem('params') === "{}") {
      localStorage.setItem('params', JSON.stringify(paramsToStore));
      params = JSON.parse(localStorage.getItem('params'));
   } else {
      params = JSON.parse(localStorage.getItem('params'));
   }

   params.access_token ? spotifyWebApi.setAccessToken(params.access_token) : alert('something went wrong');

   const [loggedIn, setLoggedIn] = useState(params.access_token ? true : false);
   return (
      <>
         {loggedIn ? null : <LoginPage />}
         <div className="App">
            <PlaybackView />
            <MusicBar />
         </div>
      </>
   );
}
export default App;