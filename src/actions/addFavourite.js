import { ADD_FAVOURITE } from './types';

export const addFavourite = favourite => {
  return {
    type: ADD_FAVOURITE,
    payload: favourite
  };
};
