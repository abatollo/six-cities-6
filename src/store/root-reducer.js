import {combineReducers} from 'redux';
import cities from './cities/reducer';
import map from './map/reducer';
import sort from './sort/reducer';
import authorization from './authorization/reducer';
import data from './data/reducer';
import room from './room/reducer';

export const rootReducer = combineReducers({
  cities,
  authorization,
  data,
  map,
  sort,
  room
});
