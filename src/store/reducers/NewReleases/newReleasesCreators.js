import { spotifyWebApi } from '../../../spotifyWebApi/spotifyWebApi';

export const getNewReleasesSuccess = res => ({
  type: 'GET_NEW_RELEASES',
  res
})

export const getNewReleases = () => {
  return dispatch => {
    spotifyWebApi.getNewReleases({ limit: 10 })
      .then(res => dispatch(getNewReleasesSuccess(res.albums.items)))
      .catch(err => console.log(err));
  }
}