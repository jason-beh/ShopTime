import { CHANGE_GENDER } from './types';

export const changeGender = gender => {
  return {
    type: CHANGE_GENDER,
    payload: gender
  };
};
