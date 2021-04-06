import {FavoriteStatus} from './const';

const Routes = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  HOTELS: `/hotels/:id`
};

const APIRoutes = {
  HOTELS: `/hotels`,
  LOGIN: `/login`,
  COMMENTS: `/comments`,
  FAVORITE: `/favorite`,
};

const APIRouteMethods = {
  fetchHotel: (id) => `${APIRoutes.HOTELS}/${id}`,
  fetchHotelsNearby: (id) => `${APIRoutes.HOTELS}/${id}/nearby`,
  fetchHotelComments: (id) => `${APIRoutes.COMMENTS}/${id}`,
  sendHotelComment: (id) => `${APIRoutes.COMMENTS}/${id}`,
  setFavorite: (id, isFavorite = FavoriteStatus.ON) => `${APIRoutes.FAVORITE}/${id}/${isFavorite}`
};

export {Routes, APIRoutes, APIRouteMethods};
