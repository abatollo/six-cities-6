import {FavoriteStatus} from './const';

const AppRoutes = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`
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

export {AppRoutes, APIRoutes, APIRouteMethods};
