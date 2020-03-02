import { GET_ME } from '../../actions/actionTypes';

const initialState = {
  user: {
    username: null,
    photo: null
  }
}

const getMeReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_ME:
      return {
        ...state,
        user: { username: action.name, photo: action.photo }
      }
    default:
      return state;
  }
}

export default getMeReducer;