import { SET_LOGGED_IN } from '../../actions/actionTypes';

const initialState = {
  loggedIn: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return {
        ...state,
        loggedIn: action.bool
      }
    default:
      return state;
  }
}

export default appReducer;