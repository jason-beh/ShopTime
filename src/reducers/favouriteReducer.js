import { ADD_FAVOURITE, REMOVE_FAVOURITE } from '../actions/types';

const initialState = {
  favourites: []
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      if (state.favourites.indexOf(action.payload) === -1) {
        return {
          ...state,
          favourites: [...state.favourites, action.payload]
        };
      } else return state;
    case REMOVE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter(item => item != action.payload)
      };

    default:
      return state;
  }
};

export default favouriteReducer;
