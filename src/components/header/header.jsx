import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {AppRoutes} from '../../routes';
import {checkAuthorizationStatus} from '../../utils/check-authorization-status';

const Header = ({isAuthorized, userEmail}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoutes.MAIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={isAuthorized ? AppRoutes.FAVORITES : AppRoutes.LOGIN}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {isAuthorized ?
                    <span className="header__user-name user__name">{userEmail}</span> :
                    <span className="header__login">Sign in</span>}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  userEmail: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    isAuthorized: checkAuthorizationStatus(state.authorizationStatus),
    userEmail: state.userEmail
  };
};

export default connect(mapStateToProps, null)(Header);
