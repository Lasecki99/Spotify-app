import React from 'react';
import getHashParams from './params/getHashParams';
import { spotifyWebApi } from './spotifyWebApi/spotifyWebApi';
import LoginPage from './components/LoginPage';
import MusicBar from './components/MusicBar/MusicBar';
import SearchContextProvider from './contexts/SearchContextProvider';
import PlaybackContextProvider from './contexts/PlaybackContextProvider';
import AlbumContextProvider from './contexts/AlbumContextProvider';
import { connect } from 'react-redux';

const App = props => {

   if (localStorage.getItem('accessToken')) {
      spotifyWebApi.setAccessToken(JSON.parse(localStorage.getItem('accessToken')));
      if (!props.loggedIn) props.setLoggedIn(true);
   } else {
      const params = getHashParams();
      if (Object.keys(params).length) {
         const store = JSON.stringify(params.access_token);
         localStorage.setItem('accessToken', store);
         spotifyWebApi.setAccessToken(params.access_token);
         if (!props.loggedIn) props.setLoggedIn(true);
      }
   }

   return (
      <>
         <SearchContextProvider>
            <AlbumContextProvider>
               <PlaybackContextProvider>
                  {props.loggedIn ? <div className="App">
                     <MusicBar />
                  </div> : <LoginPage />}
               </PlaybackContextProvider>
            </AlbumContextProvider>
         </SearchContextProvider>
      </>
   );
}

const mapStateToProps = state => ({
   loggedIn: state.appReducer.loggedIn
})

const mapDispatchToProps = dispatch => ({
   setLoggedIn: bool => dispatch({ type: 'SET_LOGGED_IN', bool })
})

export default connect(mapStateToProps, mapDispatchToProps)(App);