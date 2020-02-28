import { spotifyWebApi } from '../../../spotifyWebApi/spotifyWebApi';
const randomUser = 'https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png';

const getMeFetchSuccess = (name, photo) => ({
  type: 'GET_ME',
  name,
  photo
})

export const getMeFetch = () => dispatch => {

  spotifyWebApi.getMe()
    .then(res => dispatch(getMeFetchSuccess(res.display_name, res.images.length ? res.images[0].url : randomUser)))
    .catch(err => console.log(err))
}