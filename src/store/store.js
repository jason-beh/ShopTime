import { createStore, combineReducers } from 'redux';
import genderReducer from '../reducers/genderReducer';
import favouriteReducer from '../reducers/favouriteReducer';

const rootReducer = combineReducers({
  gender: genderReducer,
  favourites: favouriteReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
