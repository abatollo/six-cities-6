import {combineReducers} from 'redux';
import cities from './cities/reducer';
import sort from './sort/reducer';
import authorization from './authorization/reducer';
import room from './room/reducer';
import map from './map/reducer';

export const rootReducer = combineReducers({
  cities,
  sort,
  authorization,
  room,
  map
});
