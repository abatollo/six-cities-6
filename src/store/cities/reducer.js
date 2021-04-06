import {CitiesActionTypes} from './action';

import hotels from '../../mock/hotels';
import comments from '../../mock/comments';

const initialState = {
  currentCity: `Paris`,
  hotels,
  comments
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CitiesActionTypes.SET_CITIES_LIST:
      return {
        ...state,
        hotels: action.payload
      };
    case CitiesActionTypes.SET_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
