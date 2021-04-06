import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import MainListSorting from '../main-list-sorting/main-list-sorting';
import MainCard from '../main-card/main-card';
import Map from '../map/map';
import MainMap from '../map-main/map-main';

import {PropsValidator} from '../../utils/props-validator';
import {checkAuthorizationStatus} from '../../utils/check-authorization-status';
import {setFavoriteList} from '../../store/api-actions';
import {ActionCreator} from '../../store/action';

const MainList = ({sortedFilteredHotels, currentCity, isAuthorized, onMouseOver, onButtonClick}) => {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{sortedFilteredHotels.length} places to stay in {currentCity}</b>
        <MainListSorting />
        <div className="cities__places-list places__list tabs__content">
          {sortedFilteredHotels.map((hotel) =>
            <MainCard
              key={hotel.id}
              hotel={hotel}
              isAuthorized={isAuthorized}
              onMouseOver={() => onMouseOver(hotel.id)}
              onButtonClick={onButtonClick}
            />)}
        </div>
      </section>
      <div className="cities__right-section">
        {
          sortedFilteredHotels.length ?
            <Map
              points={sortedFilteredHotels}
              render={(ref) => {
                return (<MainMap mapRef={ref} />);
              }}
            /> :
            ``
        }
      </div>
    </div>
  );
};

MainList.propTypes = {
  sortedFilteredHotels: PropTypes.arrayOf(PropsValidator.HOTEL).isRequired,
  currentCity: PropTypes.string.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onMouseOver(id) {
    dispatch(ActionCreator.changeActiveHotel(id));
  },
  onButtonClick(id, isFavorite, isAuthorized) {
    dispatch(setFavoriteList(id, isFavorite, isAuthorized));
  }
});

const mapStateToProps = (state) => {
  return {
    currentCity: state.currentCity,
    isAuthorized: checkAuthorizationStatus(state.authorizationStatus)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainList);
