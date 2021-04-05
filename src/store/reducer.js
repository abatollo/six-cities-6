import {ActionType} from './action';
import {SORT_TYPES, AuthorizationStatus} from '../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  currentCity: `Paris`,
  currentSort: SORT_TYPES.POPULAR,

  hotels: [],
  isHotelsLoading: false,

  activeId: null,

  isSettingFavoriteList: false,

  hotel: null,
  isHotelLoading: false,

  isSettingFavorite: false,

  comments: [],
  isCommentsLoading: false,

  isSendingComment: false,

  nearbyHotels: [],
  isNearbyHotelsLoading: false,
  isSettingFavoriteNearby: false,

  favoriteHotels: [],
  isFavoriteHotelsLoading: false,
  isSettingFavoriteFavorites: false,

  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.CHANGE_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload
      };

    case ActionType.CHANGE_SORT:
      return {
        ...state,
        currentSort: action.payload
      };

      // FETCH_HOTELS

    case ActionType.FETCH_HOTELS_START:
      return {
        ...state,
        isHotelsLoading: true
      };

    case ActionType.FETCH_HOTELS_SUCCESS:
      return {
        ...state,
        hotels: action.payload,
        isHotelsLoading: false
      };

    case ActionType.FETCH_HOTELS_FAIL:
      return {
        ...state,
        isHotelsLoading: false,
        isError: true
      };

      // CHANGE_ACTIVE_HOTEL

    case ActionType.CHANGE_ACTIVE_HOTEL:
      return {
        ...state,
        activeId: action.payload
      };

      // SET_FAVORITE_LIST

    case ActionType.SET_FAVORITE_LIST_START:
      return {
        ...state,
        isSettingFavoriteList: true
      };

    case ActionType.SET_FAVORITE_LIST_SUCCESS:
      return {
        ...state,
        hotels: action.payload,
        isSettingFavoriteList: false
      };

    case ActionType.SET_FAVORITE_LIST_FAIL:
      return {
        ...state,
        isSettingFavoriteList: false,
        isError: true
      };

      // FETCH_HOTEL

    case ActionType.FETCH_HOTEL_START:
      return {
        ...state,
        isHotelLoading: true
      };

    case ActionType.FETCH_HOTEL_SUCCESS:
      return {
        ...state,
        hotel: action.payload,
        isHotelLoading: false
      };

    case ActionType.FETCH_HOTEL_FAIL:
      return {
        ...state,
        isHotelLoading: false,
        isError: true
      };

      // SET_FAVORITE

    case ActionType.SET_FAVORITE_START:
      return {
        ...state,
        isSettingFavorite: true
      };

    case ActionType.SET_FAVORITE_SUCCESS:
      return {
        ...state,
        hotel: {
          ...state.hotel,
          isFavorite: action.payload.is_favorite
        },
        isSettingFavorite: false
      };

    case ActionType.SET_FAVORITE_FAIL:
      return {
        ...state,
        isSettingFavorite: false,
        isError: true
      };

      // FETCH_COMMENTS

    case ActionType.FETCH_COMMENTS_START:
      return {
        ...state,
        isCommentsLoading: true
      };

    case ActionType.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoading: false
      };

    case ActionType.FETCH_COMMENTS_FAIL:
      return {
        ...state,
        isCommentsLoading: false,
        isError: true
      };

      // SEND_COMMENT

    case ActionType.SEND_COMMENT_START:
      return {
        ...state,
        isSendingComment: true
      };

    case ActionType.SEND_COMMENT_SUCCESS:
      return {
        ...state,
        isSendingComment: false
      };

    case ActionType.SEND_COMMENT_FAIL:
      return {
        ...state,
        isSendingComment: false,
        isError: true
      };

      // FETCH_NEARBY

    case ActionType.FETCH_NEARBY_HOTELS_START:
      return {
        ...state,
        isNearbyHotelsLoading: true
      };

    case ActionType.FETCH_NEARBY_HOTELS_SUCCESS:
      return {
        ...state,
        nearbyHotels: action.payload,
        isNearbyHotelsLoading: false
      };

    case ActionType.FETCH_NEARBY_HOTELS_FAIL:
      return {
        ...state,
        isNearbyHotelsLoading: false,
        isError: true
      };

      // SET_FAVORITE_NEARBY

    case ActionType.SET_FAVORITE_NEARBY_START:
      return {
        ...state,
        isSettingFavoriteNearby: true
      };

    case ActionType.SET_FAVORITE_NEARBY_SUCCESS:
      return {
        ...state,
        nearbyHotels: action.payload,
        isSettingFavoriteNearby: false
      };

    case ActionType.SET_FAVORITE_NEARBY_FAIL:
      return {
        ...state,
        isSettingFavoriteNearby: false,
        isError: true
      };

      // FETCH_FAVORITE_HOTELS

    case ActionType.FETCH_FAVORITE_HOTELS_START:
      return {
        ...state,
        isFavoriteHotelsLoading: true
      };

    case ActionType.FETCH_FAVORITE_HOTELS_SUCCESS:
      return {
        ...state,
        favoriteHotels: action.payload,
        isFavoriteHotelsLoading: false
      };

    case ActionType.FETCH_FAVORITE_HOTELS_FAIL:
      return {
        ...state,
        isFavoriteHotelsLoading: false,
        isError: true
      };

      // SET_FAVORITE_FAVORITES

    case ActionType.SET_FAVORITE_FAVORITES_START:
      return {
        ...state,
        isSettingFavoriteFavorites: true
      };

    case ActionType.SET_FAVORITE_FAVORITES_SUCCESS:
      return {
        ...state,
        favoriteHotels: action.payload,
        isSettingFavoriteFavorites: false
      };

    case ActionType.SET_FAVORITE_FAVORITES_FAIL:
      return {
        ...state,
        isSettingFavoriteFavorites: false,
        isError: true
      };

      // ERROR

    case ActionType.SHOW_ERROR:
      return {
        ...state,
        isError: true
      };

    case ActionType.REMOVE_ERROR:
      return {
        ...state,
        isError: false
      };

    default:
      return state;
  }
};

export {reducer};
