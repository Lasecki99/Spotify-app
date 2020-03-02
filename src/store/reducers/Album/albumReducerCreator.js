import { spotifyWebApi } from '../../../spotifyWebApi/spotifyWebApi';
import { SET_MUSIC_ARR } from '../../actions/actionTypes';

const getTrack = track => ({
  author: track.artists[0].name,
  name: track.name,
  audio: new Audio(track.preview_url)
});

const updateState = res => ({
  type: SET_MUSIC_ARR,
  value: res
})

export const checkAndReturnSongs = clickedSong => {
  return dispatch => {
    if (clickedSong) {
      const { type, id } = clickedSong;
      switch (type) {
        case 'album':
          spotifyWebApi.getAlbumTracks(id)
            .then(res => {
              let track = res.items.filter(item => item.preview_url !== null);
              track = track.map(r => getTrack(r));
              dispatch(updateState(track));
            })
            .catch(err => console.log(err));
          break;
        case 'artist':
          spotifyWebApi.getArtistTopTracks(id, "PL")
            .then(res => {
              let track = res.tracks.filter(item => item.preview_url !== null);
              track = track.map(r => getTrack(r))
              dispatch(updateState(track));
            })
            .catch(err => console.log(err));
          break;
        case 'playlist':
          spotifyWebApi.getPlaylistTracks(id, { limit: 15 })
            .then(res => {
              let track = res.items.filter(item => item.track.preview_url !== null);
              track = track.map(r => getTrack(r.track));
              dispatch(updateState(track));
            })
            .catch(err => console.log(err))
          break;
        case 'track':
          spotifyWebApi.getTrack(id)
            .then(res => {
              let track = {};
              if (res.preview_url) track = [getTrack(res)];
              dispatch(updateState(track));
            })
            .catch(err => console.log(err))
          break;
        default:
          break;
      }
    }
  }
}