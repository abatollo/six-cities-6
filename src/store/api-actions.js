import {AuthorizationActionCreator} from './authorization/action';
import {CitiesActionCreator} from './cities/action';
import {RoomActionCreator} from './room/action';
import {DataActionCreator, getComments, setComments} from './data/action';
import {AuthorizationStatus} from '../utils';
import {APIRoutes, APIRouteMethods, Routes} from '../routes';

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.HOTELS)
    .then(({data}) => {
      dispatch(CitiesActionCreator.setCitiesList(data));
      dispatch(DataActionCreator.setHotelsLoaded(true));
    })
);

export const fetchRoom = (id) => (dispatch, _getState, api) => (
  api.get(APIRouteMethods.getHotel(id))
    .then(({data}) => {
      dispatch(RoomActionCreator.setCurrentRoom(data));
      dispatch(DataActionCreator.setRoomLoaded(true));
    })
    .catch(() => {
      dispatch(DataActionCreator.setRoomLoaded(true));
    })
);

export const fetchComments = (id) => (dispatch, _getState, api) => {
  dispatch(getComments());

  api.get(APIRouteMethods.getHotelComments(id))
    .then(({data}) => {
      dispatch(setComments(data));
    });
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.LOGIN)
    .then(() => dispatch(AuthorizationActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoutes.LOGIN, {email, password})
    .then(() => dispatch(AuthorizationActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(AuthorizationActionCreator.redirectToRoute(Routes.FAVORITES)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.LOGOUT)
    .then(() => dispatch(AuthorizationActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(AuthorizationActionCreator.redirectToRoute(Routes.LOGIN)))
);
