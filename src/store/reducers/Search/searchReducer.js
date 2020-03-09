import { GET_SEARCH_LIST, RESET_LIST } from '../../actions/actionTypes';

const initialState = {
  searchList: [],
  isLoading: false
}

const searchReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_SEARCH_LIST:
      return {
        ...state,
        searchList: action.res,
        isLoading: false
      }
    case RESET_LIST:
      return {
        ...state,
        searchList: []
      }

    case 'SET_LOADER':
      return {
        ...state,
        isLoading: true
      }

    default:
      return state;
  }
}

export default searchReducer;