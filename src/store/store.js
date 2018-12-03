import { createStore, combineReducers } from 'redux';
import genderReducer from '../reducers/genderReducer';

const rootReducer = combineReducers({
  gender: genderReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
