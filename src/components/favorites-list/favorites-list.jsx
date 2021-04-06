import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import LoadingScreen from '../loading-screen/loading-screen';
import FavoritesListEmpty from '../favorites-list-empty/favorites-list-empty';
import FavoriteCityList from '../favorite-city-list/favorite-city-list';

import {PropsValidator} from '../../utils/props-validator';
import {sortHotelsByCities} from '../../utils/sort-hotels-by-cities';
import {checkAuthorizationStatus} from '../../utils/check-authorization-status';
import {fetchFavoriteHotels} from '../../store/api-actions';

const FavoritesList = ({favoriteHotels, isFavoriteHotelsLoading, isAuthorized, onLoadData}) => {
  useEffect(() => {
    if (!isFavoriteHotelsLoading) {
      onLoadData();
    }
  }, []);

  if (isFavoriteHotelsLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (!favoriteHotels.length) {
    return (
      <FavoritesListEmpty />
    );
  }

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(sortHotelsByCities(favoriteHotels)).map(([city, cityHotels]) => <FavoriteCityList
          key={city}
          city={city}
          hotels={cityHotels}
          isAuthorized={isAuthorized}
        />
        )}
      </ul>
    </section>
  );
};

FavoritesList.propTypes = {
  favoriteHotels: PropTypes.arrayOf(PropsValidator.HOTEL),
  isFavoriteHotelsLoading: PropTypes.bool.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    favoriteHotels: state.favoriteHotels,
    isFavoriteHotelsLoading: state.isFavoriteHotelsLoading,
    isAuthorized: checkAuthorizationStatus(state.authorizationStatus)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFavoriteHotels());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
