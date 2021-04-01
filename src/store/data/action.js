export const DataActionTypes = {
  SET_HOTELS_LOADED: `SET_HOTELS_LOADED`,
  SET_ROOM_LOADED: `SET_ROOM_LOADED`,
  SET_COMMENTS_LOADED: `SET_COMMENTS_LOADED`
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
  type: 'GET_COMMENTS'
});

export const setComments = payload => ({
  type: 'SET_COMMENTS',
  payload
});
