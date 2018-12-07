import { ADD_FAVOURITE, REMOVE_FAVOURITE } from '../actions/types';

const initialState = {
  favourites: []
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [...state.favourites, action.favourites]
      };
    case REMOVE_FAVOURITE:
      return state.filter(item => item != state[action.favourites])
    default:
      return state;
  }
};

export default favouriteReducer;