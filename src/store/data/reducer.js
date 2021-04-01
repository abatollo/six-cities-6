import {DataActionTypes} from './action';

const initialState = {
  isHotelsLoaded: false,
  isRoomLoaded: false,
  comments: [],
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
    case DataActionTypes.GET_COMMENTS:
      return {
        ...state,
        isCommentsLoading: true,
      };
    case DataActionTypes.SET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
