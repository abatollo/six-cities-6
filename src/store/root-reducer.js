import {combineReducers} from 'redux';
import cities from './cities/reducer';
import sort from './sort/reducer';

export const rootReducer = combineReducers({
  cities,
  sort
});
