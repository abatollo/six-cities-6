import {DataActionTypes} from './action';

const initialState = {
  isHotelsLoaded: false,
  isRoomLoaded: false,
  isCommentsLoaded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DataActionTypes.SET_HOTELS_LOADED:
      return {
        ...state,
        isHotelsLoaded: action.payload
      };
    case DataActionTypes.SET_ROOM_LOADED:
      return {
        ...state,
        isRoomLoaded: action.payload
      };
    case DataActionTypes.SET_COMMENTS_LOADED:
      return {
        ...state,
        isCommentsLoaded: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
