import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import MainCard from '../main-card/main-card';

import {filterHotelsByCity} from '../../utils/filter-hotels-by-city';
import {sortHotels} from '../../utils/sort-hotels';
import {PropsValidator} from '../../utils/props-validator';
import PlacesSorting from '../places-sorting/places-sorting';

const MainList = ({sortedFilteredHotels, currentCity}) => {
  const [idActive, setIdActive] = useState(sortedFilteredHotels[0].id);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{sortedFilteredHotels.length} places to stay in {currentCity}</b>
      <PlacesSorting />
      <div className="cities__places-list places__list tabs__content" data-active-hotel={idActive}>
        {sortedFilteredHotels.map((hotel) =>
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
  sortedFilteredHotels: PropTypes.arrayOf(PropsValidator.HOTEL).isRequired,
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    sortedFilteredHotels: sortHotels(state.currentSort, filterHotelsByCity(state.currentCity, state.hotels)),
    currentCity: state.currentCity
  };
};

export default connect(mapStateToProps, null)(MainList);
