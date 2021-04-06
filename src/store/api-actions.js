import {AuthorizationActionTypes, AuthorizationActionCreator} from "./authorization/action";
import {CitiesActionCreator} from "./cities/action";
import {AuthorizationStatus} from "../utils";
import {Routes, APIRoutes} from "../routes";

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.HOTELS)
    .then(({data}) => dispatch(CitiesActionCreator.setCitiesList(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.LOGIN)
    .then(() => dispatch(AuthorizationActionTypes.requireAuthorization(AuthorizationStatus.AUTH)))
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
