export const RoomActionTypes = {
  SET_CURRENT_ROOM: `SET_CURRENT_ROOM`,
  SET_COMMENTS_ROOM: `SET_COMMENTS_ROOM`
};

export const RoomActionCreator = {
  setCurrentRoom: (payload) => ({
    type: RoomActionTypes.SET_CURRENT_ROOM,
    payload,
  }),
  setCommentsRoom: (payload) => ({
    type: RoomActionTypes.SET_COMMENTS_ROOM,
    payload,
  })
};
