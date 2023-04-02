import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {AppRoutes} from '../../routes';
import {checkAuthorizationStatus} from '../../utils/check-authorization-status';


const PrivateRoute = ({render, path, exact, isAuthorized}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          isAuthorized
            ? render(routeProps)
            : <Redirect to={AppRoutes.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorized: checkAuthorizationStatus(state.authorizationStatus),
});

export default connect(mapStateToProps)(PrivateRoute);
