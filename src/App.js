import React from 'react';
import getHashParams from './params/getHashParams';
import { spotifyWebApi } from './spotifyWebApi/spotifyWebApi';
import LoginPage from './components/LoginPage';
import MusicBar from './components/MusicBar/MusicBar';
import { useSelector, useDispatch } from 'react-redux';
import { SET_LOGGED_IN } from './store/actions/actionTypes';
import GetMe from './components/GetMe/GetMe';

const App = () => {

   const loggedIn = useSelector(state => state.appReducer.loggedIn);
   const dispatch = useDispatch();

   if (localStorage.getItem('accessToken')) {
      spotifyWebApi.setAccessToken(JSON.parse(localStorage.getItem('accessToken')));
      if (!loggedIn) dispatch({ type: SET_LOGGED_IN, bool: true });
   } else {
      const params = getHashParams();
      if (Object.keys(params).length) {
         const store = JSON.stringify(params.access_token);
         localStorage.setItem('accessToken', store);
         spotifyWebApi.setAccessToken(params.access_token);
         if (!loggedIn) dispatch({ type: SET_LOGGED_IN, bool: true });
      }
   }

   return (
      <>
         {loggedIn ? <div className="App">
            <MusicBar />
            <GetMe />
         </div> : <LoginPage />}
      </>
   );
}

export default App;