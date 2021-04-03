import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import FavoriteCityList from '../favorite-city-list/favorite-city-list';

import {PropsValidator} from '../../utils/props-validator';
import {sortHotelsByCities} from '../../utils/sort-hotels-by-cities';

const FavoritesList = ({hotels}) => {
  return (
    <ul className="favorites__list">
      {Object.entries(sortHotelsByCities(hotels)).map(([city, cityHotels]) => <FavoriteCityList
        key={city}
        city={city}
        hotels={cityHotels}
      />
      )}
    </ul>
  );
};

FavoritesList.propTypes = {
  hotels: PropTypes.arrayOf(PropsValidator.HOTEL).isRequired
};

const mapStateToProps = (state) => {
  return {
    hotels: state.hotels
  };
};

export default connect(mapStateToProps, null)(FavoritesList);
