import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import FavoriteCityList from '../favorite-city-list/favorite-city-list';

import {PropsValidator} from '../../utils';

const FavoritesList = ({hotels}) => {
  const citiesWithHotels = hotels.reduce((byCities, hotel) => {
    const isFavorite = hotel.is_favorite;
    if (isFavorite) {
      if (hotel.city.name in byCities) {
        byCities[hotel.city.name].push(hotel);
      } else {
        byCities[hotel.city.name] = [hotel];
      }
    }

    return byCities;
  }, {});

  return (
    <ul className="favorites__list">
      {Object.entries(citiesWithHotels).map(([city, cityHotels]) => <FavoriteCityList
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
