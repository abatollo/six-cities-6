export const DataActionTypes = {
  SET_HOTELS_LOADED: `SET_HOTELS_LOADED`,
  SET_ROOM_LOADED: `SET_ROOM_LOADED`,
  SET_COMMENTS_LOADED: `SET_COMMENTS_LOADED`,
  GET_COMMENTS: `GET_COMMENTS`,
  SET_COMMENTS: `SET_COMMENTS`
};

export const DataActionCreator = {
  setHotelsLoaded: (isLoad) => ({
    type: DataActionTypes.SET_HOTELS_LOADED,
    payload: isLoad,
  }),
  setRoomLoaded: (isLoad) => ({
    type: DataActionTypes.SET_ROOM_LOADED,
    payload: isLoad,
  }),
  setCommentsLoaded: (isLoad) => ({
    type: DataActionTypes.SET_COMMENTS_LOADED,
    payload: isLoad,
  }),
};

export const getComments = () => ({
  type: DataActionTypes.GET_COMMENTS
});

export const setComments = (payload) => ({
  type: DataActionTypes.SET_COMMENTS,
  payload
});
