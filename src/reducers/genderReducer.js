import { CHANGE_GENDER } from '../actions/types';

const initialState = {
  gender: 'women'
};

const genderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GENDER:
      return {
        ...state,
        gender: action.payload
      };
    default:
      return state;
  }
};

export default genderReducer;
