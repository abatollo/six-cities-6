import {ActionCreator} from './action';
import {AuthorizationStatus} from '../const';
import {APIRoutes, APIRouteMethods, Routes} from '../routes';
import {adaptHotelsToClient, adaptHotelToClient, adaptCommentsToClient} from '../utils/adapter';

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  // dispatch(ActionCreator.setHotelsLoading(true));
  api.get(APIRoutes.HOTELS)
    .then(({data}) => {
      dispatch(ActionCreator.setCitiesList(adaptHotelsToClient(data)));
      dispatch(ActionCreator.setHotelsLoaded(true));
      // dispatch(ActionCreator.setHotelsLoading(false));
    }).catch(() => {
      // dispatch(ActionCreator.setHotelsLoading(false));
    })
);

export const fetchHotel = (id) => (dispatch, _getState, api) => (
  api.get(APIRouteMethods.getHotel(id))
    .then(({data}) => {
      dispatch(ActionCreator.setCurrentHotel(adaptHotelToClient(data)));
      dispatch(ActionCreator.setHotelLoaded(true));
    })
    .catch(() => {
      dispatch(ActionCreator.setHotelLoaded(true));
    })
);

export const fetchComments = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.getComments());

  api.get(APIRouteMethods.getHotelComments(id))
    .then(({data}) => {
      dispatch(ActionCreator.setComments(adaptCommentsToClient(data)));
    });
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoutes.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(Routes.FAVORITES)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.LOGOUT)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(Routes.LOGIN)))
);
