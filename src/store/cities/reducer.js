import {CitiesActionTypes} from './action';

import comments from '../../mock/comments';

const initialState = {
  currentCity: `Paris`,
  hotels: [],
  comments,
  isDataLoaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CitiesActionTypes.SET_CITIES_LIST:
      return {
        ...state,
        hotels: action.payload,
        isDataLoaded: true
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
