import {RoomActionTypes} from './action';

const initialState = {
  currentsRoom: null,
  commentsRoom: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RoomActionTypes.SET_CURRENT_ROOM:
      return {
        ...state,
        currentsRoom: action.payload
      };
    case RoomActionTypes.SET_COMMENTS_ROOM:
      return {
        ...state,
        commentsRoom: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
