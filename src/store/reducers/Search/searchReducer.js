import { GET_SEARCH_LIST, RESET_LIST } from '../../actions/actionTypes';

const initialState = {
  searchList: []
}

const searchReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_SEARCH_LIST:
      return {
        ...state,
        searchList: action.res
      }
    case RESET_LIST:
      return {
        ...state,
        searchList: []
      }

    default:
      return state;
  }
}

export default searchReducer;