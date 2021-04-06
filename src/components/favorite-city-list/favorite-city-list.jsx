import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import FavoriteCard from '../favorite-card/favorite-card';

import {PropsValidator} from '../../utils/props-validator';
import {setFavoriteFavorites} from '../../store/api-actions';

const FavoriteCityList = ({hotels, city, isAuthorized, onButtonClick}) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {hotels.map((hotel) =>
          <FavoriteCard
            key={hotel.id}
            hotel={hotel}
            isAuthorized={isAuthorized}
            onButtonClick={onButtonClick}
          />)}
      </div>
    </li>
  );
};

FavoriteCityList.propTypes = {
  hotels: PropTypes.arrayOf(PropsValidator.HOTEL).isRequired,
  city: PropTypes.string.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onButtonClick(id, isFavorite, isAuthorized) {
    dispatch(setFavoriteFavorites(id, isFavorite, isAuthorized));
  }
});

export default connect(null, mapDispatchToProps)(FavoriteCityList);
