import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import LoadingScreen from '../loading-screen/loading-screen';
import FavoritesListEmpty from '../favorites-list-empty/favorites-list-empty';
import FavoriteCityList from '../favorite-city-list/favorite-city-list';

import {fetchFavoriteHotels} from '../../store/api-actions';
import {PropsValidator} from '../../utils/props-validator';
import {sortHotelsByCities} from '../../utils/sort-hotels-by-cities';

const FavoritesList = ({favoriteHotels, isFavoriteHotelsLoading, onLoadData}) => {
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

  if (favoriteHotels.length === 0) {
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
        />
        )}
      </ul>
    </section>
  );
};

FavoritesList.propTypes = {
  favoriteHotels: PropTypes.arrayOf(PropsValidator.HOTEL),
  isFavoriteHotelsLoading: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    favoriteHotels: state.favoriteHotels,
    isFavoriteHotelsLoading: state.isFavoriteHotelsLoading
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFavoriteHotels());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
