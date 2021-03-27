const Routes = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  HOTELS: `/hotels/:id`
};

const APIRoutes = {
  HOTELS: `/hotels`,
  LOGIN: `/login`,
  LOGOUT: `/logout`
};

const APIRouteMethods = {
  getHotel: (id) => `${APIRoutes.HOTELS}/${id}`,
  getHotelNearby: (id) => `${APIRoutes.HOTELS}/${id}/nearby`,
  getHotelComments: (id) => `${APIRoutes.COMMENTS}/${id}`,
  setHotelComment: (id) => `${APIRoutes.COMMENTS}/${id}`,
  setFavoritesStatus: (id, isFavorite = FavoriteStatus.ON) => `${APIRoutes.FAVORITES}/${id}/${isFavorite}`
};

export {Routes, APIRoutes, APIRouteMethods};
