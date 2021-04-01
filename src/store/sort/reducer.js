import {SortActionTypes} from './action';

import {SORT_TYPES} from '../../const';

const initialState = {
  currentSort: SORT_TYPES.POPULAR
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SortActionTypes.SET_SORT:
      return {
        ...state,
        currentSort: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
