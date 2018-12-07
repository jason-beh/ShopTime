import { ADD_FAVOURITE } from './types';

export const addFAVOURITE = favourite => {
  return {
    type: ADD_FAVOURITE,
    payload: favourite
  };
};
