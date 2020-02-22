const initialState = {
  songToPlay: null,
  songBefore: null,
}

const playbackReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_SONG_BEFORE':
      return {
        ...state,
        songBefore: action.song
      }
    case 'SET_SONG_TO_PLAY':
      return {
        ...state,
        songToPlay: action.song
      }
    default:
      return state;
  }
}

export default playbackReducer;