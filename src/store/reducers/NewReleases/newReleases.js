const initialState = {
  newReleases: []
}

const newReleases = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NEW_RELEASES':
      return {
        ...state,
        newReleases: state.newReleases.concat(action.res)
      }
    default:
      return state;
  }
}

export default newReleases;