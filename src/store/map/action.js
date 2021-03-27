export const MapActionTypes = {
  SET_ACTIVE_POINT: `SET_ACTIVE_POINT`
};

export const MapActionCreator = {
  setActiveId: (payload) => ({
    type: MapActionTypes.SET_ACTIVE_POINT,
    payload,
  })
};
