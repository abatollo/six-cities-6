import {ActionType} from './action';
import {SORT_TYPES, AuthorizationStatus} from '../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  currentCity: `Paris`,
  hotels: [],
  isHotelsLoaded: false,
  isRoomLoaded: false,
  comments: [],
  isCommentsLoaded: false,
  activeId: null,
  currentHotel: null,
  currentSort: SORT_TYPES.POPULAR,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.SET_CITIES_LIST:
      return {
        ...state,
        hotels: action.payload,
        isHotelsLoaded: true
      };
    case ActionType.SET_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload
      };

    case ActionType.SET_HOTEL_LOADED:
      return {
        ...state,
        isRoomLoaded: action.payload
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        isCommentsLoading: true,
      };
    case ActionType.SET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoading: false,
      };

    case ActionType.SET_ACTIVE_POINT:
      return {
        ...state,
        activeId: action.payload
      };

    case ActionType.SET_CURRENT_HOTEL:
      return {
        ...state,
        currentHotel: action.payload
      };

    case ActionType.SET_SORT:
      return {
        ...state,
        currentSort: action.payload
      };

    default:
      return state;
  }
};

export {reducer};
