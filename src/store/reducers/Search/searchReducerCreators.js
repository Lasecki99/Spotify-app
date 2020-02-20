import { spotifyWebApi } from '../../../spotifyWebApi/spotifyWebApi';
import { GET_SEARCH_LIST } from '../../actions/actionTypes';

const updateState = res => {
  return {
    type: GET_SEARCH_LIST,
    res
  }
}

export const getSearchList = inputValue => {
  return dispatch => {
    spotifyWebApi.search(inputValue, ["album", "artist", "playlist", "track"], { limit: 10 })
      .then(res => {
        const arr = [
          { type: 'Albums', data: res.albums },
          { type: 'Artists', data: res.artists },
          { type: 'Playlists', data: res.playlists },
          { type: 'Tracks', data: res.tracks }];
        dispatch(updateState(arr));
      }).catch(err => console.log(err))
  }
}