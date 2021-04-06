import {MapActionTypes} from './action';

const initialState = {
  activeId: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MapActionTypes.SET_ACTIVE_POINT:
      return {
        ...state,
        activeId: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
