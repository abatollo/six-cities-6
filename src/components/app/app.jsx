import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreen from '../property-screen/property-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Error from '../error/error';

import browserHistory from '../../browser-history';
import PrivateRoute from '../private-route/private-route';
import {Routes} from '../../routes';

const App = ({isError}) => {
  return (
    <>
      <Router history={browserHistory}>
        <Switch>
          <Route exact path={Routes.MAIN}>
            <MainScreen />
          </Route>
          <Route exact path={Routes.LOGIN}>
            <LoginScreen />
          </Route>
          <PrivateRoute
            exact
            path={Routes.FAVORITES}
            render={() => {
              return (
                <FavoritesScreen />
              );
            }}
          />
          <Route exact path={Routes.OFFER}>
            <PropertyScreen />
          </Route>
          <Route>
            <NotFoundScreen />
          </Route>
        </Switch>
      </Router>
      {isError && <Error />}
    </>
  );
};

const mapStateToProps = (state) => ({
  isError: state.isError
});

App.propTypes = {
  isError: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, null)(App);
