import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import MainCard from '../main-card/main-card';

import {PropsValidator} from '../../utils/props-validator';
import PlacesSorting from '../places-sorting/places-sorting';

import {ActionCreator} from '../../store/action';

const MainList = ({sortedFilteredHotels, currentCity, onMouseOver}) => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{sortedFilteredHotels.length} places to stay in {currentCity}</b>
      <PlacesSorting />
      <div className="cities__places-list places__list tabs__content">
        {sortedFilteredHotels.map((hotel) =>
          <MainCard
            key={hotel.id}
            hotel={hotel}
            onMouseOver={() => onMouseOver(hotel.id)}
          />)}
      </div>
    </section>
  );
};

MainList.propTypes = {
  sortedFilteredHotels: PropTypes.arrayOf(PropsValidator.HOTEL).isRequired,
  currentCity: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onMouseOver(id) {
    dispatch(ActionCreator.changeActiveHotel(id));
  }
});

const mapStateToProps = (state) => {
  return {
    currentCity: state.currentCity
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainList);
