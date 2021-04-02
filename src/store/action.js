const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  SET_CITIES_LIST: `SET_CITIES_LIST`,
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
  SET_HOTELS_LOADED: `SET_HOTELS_LOADED`,
  SET_ROOM_LOADED: `SET_ROOM_LOADED`,
  GET_COMMENTS: `GET_COMMENTS`,
  SET_COMMENTS: `SET_COMMENTS`,
  SET_COMMENTS_LOADED: `SET_COMMENTS_LOADED`,
  SET_ACTIVE_POINT: `SET_ACTIVE_POINT`,
  SET_CURRENT_ROOM: `SET_CURRENT_ROOM`,
  SET_COMMENTS_ROOM: `SET_COMMENTS_ROOM`,
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
  setHotelsLoaded: (isLoad) => ({
    type: ActionType.SET_HOTELS_LOADED,
    payload: isLoad,
  }),
  setRoomLoaded: (isLoad) => ({
    type: ActionType.SET_ROOM_LOADED,
    payload: isLoad,
  }),
  setCommentsLoaded: (isLoad) => ({
    type: ActionType.SET_COMMENTS_LOADED,
    payload: isLoad,
  }),
  setActiveId: (payload) => ({
    type: ActionType.SET_ACTIVE_POINT,
    payload,
  }),
  setCurrentRoom: (payload) => ({
    type: ActionType.SET_CURRENT_ROOM,
    payload,
  }),
  setCommentsRoom: (payload) => ({
    type: ActionType.SET_COMMENTS_ROOM,
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
