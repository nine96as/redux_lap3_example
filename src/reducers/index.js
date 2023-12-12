import { combineReducers } from 'redux';
import doggoReducer from './doggoReducer';

const allReducers = combineReducers({
  doggo: doggoReducer
});

export default allReducers;
