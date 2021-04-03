import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import MainCard from '../main-card/main-card';

import {filterOffersByCity} from '../../utils/filter-offers-by-city';
import {sortOffers} from '../../utils/sort-offers';
import {PropsValidator} from '../../utils/props-validator';
import PlacesSorting from '../places-sorting/places-sorting';

const MainList = ({hotels, currentCity}) => {
  const [idActive, setIdActive] = useState(hotels[0].id);

  const filteredHotels = hotels.filter((hotel) => hotel.city.name === currentCity);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{filteredHotels.length} places to stay in {currentCity}</b>
      <PlacesSorting />
      <div className="cities__places-list places__list tabs__content" data-active-hotel={idActive}>
        {filteredHotels.map((hotel) =>
          <MainCard
            key={hotel.id}
            hotel={hotel}
            onMouseOver={setIdActive}
          />)}
      </div>
    </section>
  );
};

MainList.propTypes = {
  hotels: PropTypes.arrayOf(PropsValidator.HOTEL).isRequired,
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    hotels: sortOffers(state.currentSort, filterOffersByCity(state.currentCity, state.hotels)),
    currentCity: state.currentCity
  };
};

export default connect(mapStateToProps, null)(MainList);
