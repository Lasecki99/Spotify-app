import React, { useState } from 'react';
import getHashParams from './params/getHashParams';
import { spotifyWebApi } from './spotifyWebApi/spotifyWebApi';
import LoginPage from './components/LoginPage';
import MusicBar from './components/MusicBar/MusicBar';
import SearchContextProvider from './contexts/SearchContextProvider';
import PlaybackContextProvider from './contexts/PlaybackContextProvider';
import NewReleasesContextProvider from './contexts/NewReleasesContextProvider';
import AlbumContextProvider from './contexts/AlbumContextProvider';

const App = () => {
   const [loggedIn, setLoggedIn] = useState(false);


   if (localStorage.getItem('accessToken')) {
      spotifyWebApi.setAccessToken(JSON.parse(localStorage.getItem('accessToken')));
      if (!loggedIn) setLoggedIn(true);
   } else {
      const params = getHashParams();
      if (Object.keys(params).length) {
         const store = JSON.stringify(params.access_token);
         localStorage.setItem('accessToken', store);
         spotifyWebApi.setAccessToken(params.access_token);
         if (!loggedIn) setLoggedIn(true);
      }
   }

   return (
      <>
         <SearchContextProvider>
            <AlbumContextProvider>
               <PlaybackContextProvider>
                  <NewReleasesContextProvider isLogged={loggedIn}>
                     {loggedIn ? <div className="App">
                        <MusicBar />
                     </div> : <LoginPage />}
                  </NewReleasesContextProvider>
               </PlaybackContextProvider>
            </AlbumContextProvider>
         </SearchContextProvider>
      </>
   );
}
export default App;