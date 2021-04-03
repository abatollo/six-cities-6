const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SET_CITIES_LIST: `SET_CITIES_LIST`,
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
  SET_HOTELS_LOADED: `SET_HOTELS_LOADED`,
  SET_HOTEL_LOADED: `SET_HOTEL_LOADED`,
  GET_COMMENTS: `GET_COMMENTS`, // LOAD
  SET_COMMENTS: `SET_COMMENTS`,
  SET_COMMENTS_LOADED: `SET_COMMENTS_LOADED`,
  SET_ACTIVE_POINT: `SET_ACTIVE_POINT`,
  SET_CURRENT_HOTEL: `SET_CURRENT_HOTEL`,
  SET_SORT: `SET_SORT`
};

const ActionCreator = {
  requireAuthorization: (payload) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  setCitiesList: (payload) => ({
    type: ActionType.SET_CITIES_LIST,
    payload,
  }),
  setCurrentCity: (payload) => ({
    type: ActionType.SET_CURRENT_CITY,
    payload
  }),
  setHotelsLoaded: (isLoading) => ({
    type: ActionType.SET_HOTELS_LOADED,
    payload: isLoading,
  }),
  setHotelLoaded: (isLoading) => ({
    type: ActionType.SET_HOTEL_LOADED,
    payload: isLoading,
  }),
  setCommentsLoaded: (isLoading) => ({
    type: ActionType.SET_COMMENTS_LOADED,
    payload: isLoading,
  }),
  setActiveId: (payload) => ({
    type: ActionType.SET_ACTIVE_POINT,
    payload,
  }),
  setCurrentHotel: (payload) => ({
    type: ActionType.SET_CURRENT_HOTEL,
    payload,
  }),
  changeSort: (payload) => ({
    type: ActionType.SET_SORT,
    payload,
  }),
  getComments: () => ({
    type: ActionType.GET_COMMENTS
  }),
  setComments: (payload) => ({
    type: ActionType.SET_COMMENTS,
    payload
  })
};

export {ActionType, ActionCreator};
