import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {PropsValidator} from '../../utils/props-validator';
import FavoriteCard from '../favorite-card/favorite-card';

import {setFavoriteFavorites} from '../../store/api-actions';

const FavoriteCityList = ({city, hotels, onButtonClick}) => {
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
            onButtonClick={onButtonClick}
          />)}
      </div>
    </li>
  );
};

FavoriteCityList.propTypes = {
  hotels: PropTypes.arrayOf(PropsValidator.HOTEL).isRequired,
  city: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onButtonClick(id, isFavorite) {
    dispatch(setFavoriteFavorites(id, isFavorite));
  }
});

export default connect(null, mapDispatchToProps)(FavoriteCityList);
