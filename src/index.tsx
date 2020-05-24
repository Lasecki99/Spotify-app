import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme/theme';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import newReleases from './store/reducers/NewReleases/newReleases';
import appReducer from './store/reducers/App/appReducer';
import searchReducer from './store/reducers/Search/searchReducer';
import albumReducer from './store/reducers/Album/albumReducer';
import playbackReducer from './store/reducers/Playback/playbackReducer';
import playlistReducer from './store/reducers/Playlist/playlistReducer';
import getMeReducer from './store/reducers/GetMe/getMeReducer';

const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const rootReducer = combineReducers({
  newReleases,
  appReducer,
  searchReducer,
  albumReducer,
  playbackReducer,
  playlistReducer,
  getMeReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
