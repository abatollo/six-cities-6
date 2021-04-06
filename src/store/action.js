const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  CHANGE_CURRENT_CITY: `CHANGE_CURRENT_CITY`,
  CHANGE_SORT: `CHANGE_SORT`,

  FETCH_HOTELS_START: `FETCH_HOTELS_START`,
  FETCH_HOTELS_SUCCESS: `FETCH_HOTELS_SUCCESS`,
  FETCH_HOTELS_FAIL: `FETCH_HOTELS_FAIL`,

  CHANGE_ACTIVE_HOTEL: `CHANGE_ACTIVE_HOTEL`,

  SET_FAVORITE_LIST_START: `SET_FAVORITE_LIST_START`,
  SET_FAVORITE_LIST_SUCCESS: `SET_FAVORITE_LIST_SUCCESS`,
  SET_FAVORITE_LIST_FAIL: `SET_FAVORITE_LIST_FAIL`,

  FETCH_HOTEL_START: `FETCH_HOTEL_START`,
  FETCH_HOTEL_SUCCESS: `FETCH_HOTEL_SUCCESS`,
  FETCH_HOTEL_FAIL: `FETCH_HOTEL_FAIL`,

  SET_FAVORITE_START: `SET_FAVORITE_START`,
  SET_FAVORITE_SUCCESS: `SET_FAVORITE_SUCCESS`,
  SET_FAVORITE_FAIL: `SET_FAVORITE_FAIL`,

  FETCH_COMMENTS_START: `FETCH_COMMENTS_START`,
  FETCH_COMMENTS_SUCCESS: `FETCH_COMMENTS_SUCCESS`,
  FETCH_COMMENTS_FAIL: `FETCH_COMMENTS_FAIL`,

  SEND_COMMENT_START: `SEND_COMMENT_START`,
  SEND_COMMENT_SUCCESS: `SEND_COMMENT_SUCCESS`,
  SEND_COMMENT_FAIL: `SEND_COMMENT_FAIL`,

  FETCH_NEARBY_HOTELS_START: `FETCH_NEARBY_HOTELS_START`,
  FETCH_NEARBY_HOTELS_SUCCESS: `FETCH_NEARBY_HOTELS_SUCCESS`,
  FETCH_NEARBY_HOTELS_FAIL: `FETCH_NEARBY_HOTELS_FAIL`,

  SET_FAVORITE_NEARBY_START: `SET_FAVORITE_NEARBY_START`,
  SET_FAVORITE_NEARBY_SUCCESS: `SET_FAVORITE_NEARBY_SUCCESS`,
  SET_FAVORITE_NEARBY_FAIL: `SET_FAVORITE_NEARBY_FAIL`,

  FETCH_FAVORITE_HOTELS_START: `FETCH_FAVORITE_HOTELS_START`,
  FETCH_FAVORITE_HOTELS_SUCCESS: `FETCH_FAVORITE_HOTELS_SUCCESS`,
  FETCH_FAVORITE_HOTELS_FAIL: `FETCH_FAVORITE_HOTELS_FAIL`,

  SET_FAVORITE_FAVORITES_START: `SET_FAVORITE_FAVORITES_START`,
  SET_FAVORITE_FAVORITES_SUCCESS: `SET_FAVORITE_FAVORITES_SUCCESS`,
  SET_FAVORITE_FAVORITES_FAIL: `SET_FAVORITE_FAVORITES_FAIL`,

  SHOW_ERROR: `SHOW_ERROR`,
  REMOVE_ERROR: `REMOVE_ERROR`,

  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

const ActionCreator = {
  requireAuthorization: (payload) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload,
  }),

  changeCurrentCity: (payload) => ({
    type: ActionType.CHANGE_CURRENT_CITY,
    payload
  }),

  changeSort: (payload) => ({
    type: ActionType.CHANGE_SORT,
    payload,
  }),

  // FETCH_HOTELS

  fetchHotelsStart: () => ({
    type: ActionType.FETCH_HOTELS_START
  }),

  fetchHotelsSuccess: (payload) => ({
    type: ActionType.FETCH_HOTELS_SUCCESS,
    payload
  }),

  fetchHotelsFail: () => ({
    type: ActionType.FETCH_HOTELS_FAIL
  }),

  // CHANGE_ACTIVE_HOTEL

  changeActiveHotel: (payload) => ({
    type: ActionType.CHANGE_ACTIVE_HOTEL,
    payload
  }),

  // SET_FAVORITE_LIST

  setFavoriteListStart: () => ({
    type: ActionType.SET_FAVORITE_LIST_START,
  }),

  setFavoriteListSuccess: (payload) => ({
    type: ActionType.SET_FAVORITE_LIST_SUCCESS,
    payload
  }),

  setFavoriteListFail: () => ({
    type: ActionType.SET_FAVORITE_LIST_FAIL
  }),

  // FETCH_HOTEL

  fetchHotelStart: () => ({
    type: ActionType.FETCH_HOTEL_START
  }),

  fetchHotelSuccess: (payload) => ({
    type: ActionType.FETCH_HOTEL_SUCCESS,
    payload
  }),

  fetchHotelFail: () => ({
    type: ActionType.FETCH_HOTEL_FAIL
  }),

  // SET_FAVORITE

  setFavoriteStart: () => ({
    type: ActionType.SET_FAVORITE_START,
  }),

  setFavoriteSuccess: (payload) => ({
    type: ActionType.SET_FAVORITE_SUCCESS,
    payload
  }),

  setFavoriteFail: () => ({
    type: ActionType.SET_FAVORITE_FAIL
  }),

  // FETCH_COMMENTS

  fetchCommentsStart: () => ({
    type: ActionType.FETCH_COMMENTS_START
  }),

  fetchCommentsSuccess: (payload) => ({
    type: ActionType.FETCH_COMMENTS_SUCCESS,
    payload
  }),

  fetchCommentsFail: () => ({
    type: ActionType.FETCH_COMMENTS_FAIL
  }),

  // SEND_COMMENT

  sendCommentStart: () => ({
    type: ActionType.SEND_COMMENT_START
  }),

  sendCommentSuccess: () => ({
    type: ActionType.SEND_COMMENT_SUCCESS
  }),

  sendCommentFail: () => ({
    type: ActionType.SEND_COMMENT_FAIL
  }),

  // FETCH_NEARBY_HOTELS

  fetchNearbyHotelsStart: () => ({
    type: ActionType.FETCH_NEARBY_HOTELS_START
  }),

  fetchNearbyHotelsSuccess: (payload) => ({
    type: ActionType.FETCH_NEARBY_HOTELS_SUCCESS,
    payload
  }),

  fetchNearbyHotelsFail: () => ({
    type: ActionType.FETCH_NEARBY_HOTELS_FAIL
  }),

  // SET_FAVORITE_NEARBY

  setFavoriteNearbyStart: () => ({
    type: ActionType.SET_FAVORITE_NEARBY_START,
  }),

  setFavoriteNearbySuccess: (payload) => ({
    type: ActionType.SET_FAVORITE_NEARBY_SUCCESS,
    payload
  }),

  setFavoriteNearbyFail: () => ({
    type: ActionType.SET_FAVORITE_NEARBY_FAIL
  }),

  // FETCH_FAVORITE_HOTELS

  fetchFavoriteHotelsStart: () => ({
    type: ActionType.FETCH_FAVORITE_HOTELS_START
  }),

  fetchFavoriteHotelsSuccess: (payload) => ({
    type: ActionType.FETCH_FAVORITE_HOTELS_SUCCESS,
    payload
  }),

  fetchFavoriteHotelsFail: () => ({
    type: ActionType.FETCH_FAVORITE_HOTELS_FAIL
  }),

  // SET_FAVORITE_FAVORITES

  setFavoriteFavoritesStart: () => ({
    type: ActionType.SET_FAVORITE_FAVORITES_START,
  }),

  setFavoriteFavoritesSuccess: (payload) => ({
    type: ActionType.SET_FAVORITE_FAVORITES_SUCCESS,
    payload
  }),

  setFavoriteFavoritesFail: () => ({
    type: ActionType.SET_FAVORITE_FAVORITES_FAIL
  }),

  // ERROR

  showError: () => ({
    type: ActionType.SHOW_ERROR
  }),
  removeError: () => ({
    type: ActionType.REMOVE_ERROR
  }),


  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  })
};

export {ActionType, ActionCreator};
