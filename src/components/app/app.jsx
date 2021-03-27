import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {Routes} from "../../routes";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertyScreen from "../property-screen/property-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";
import LoadingScreen from "../loading-screen/loading-screen";
import {fetchHotelsList} from "../../store/api-actions";

const App = ({isDataLoaded, onLoadData}) => {

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.MAIN}>
          <MainScreen />
        </Route>
        <Route exact path={Routes.LOGIN}>
          <LoginScreen />
        </Route>
        <Route exact path={Routes.FAVORITES}>
          <FavoritesScreen />
        </Route>
        <Route exact path={Routes.HOTELS}>
          <PropertyScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.cities.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchHotelsList());
  },
});

App.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
