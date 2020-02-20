const initialState = {
  clickedSong: null,
  musicArr: []
}

const albumReducer = (state = initialState, action) => {

  switch (action.type) {

    case 'SET_CLICKED_SONG':
      return {
        ...state,
        clickedSong: action.clicked
      }
    case 'SET_MUSIC_ARR':
      return {
        ...state,
        musicArr: action.value
      }

    default:
      return state;
  }
}

export default albumReducer;