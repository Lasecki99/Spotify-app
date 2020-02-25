
const initialState = {
  playlist: []
}

const playlistReducer = (state = initialState, action) => {

  switch (action.type) {

    case 'ADD_TO_PLAYLIST':
      return {
        ...state,
        playlist: state.playlist.concat(action.song)
      }
    case 'REMOVE_FROM_PLAYLIST':
      return {
        ...state,
        playlist: state.playlist.filter(item => item.id !== action.id)
      }

    default:
      return state;
  }
}

export default playlistReducer;