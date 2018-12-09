import { REMOVE_FAVOURITE } from './types';

export const removeFavourite = favourite => {
  return {
    type: REMOVE_FAVOURITE,
    payload: favourite
  };
};
