import React from "react";
import {connect} from 'react-redux';
import Header from "../header/header";
import MainList from "../main-list/main-list";
import Map from "../map/map";
import CitiesList from '../cities-list/cities-list';
import MainListEmpty from "../main-list-empty/main-list-empty";
import PropTypes from "prop-types";
import {PropsValidator, sortOffers, filterOffersByCity} from "../../utils";

const MainScreen = ({hotels, currentCity}) => {
  const filteredHotels = hotels.filter((hotel) => hotel.city.name === currentCity);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            {
              hotels.length ?
                <MainList hotels={hotels} /> :
                <MainListEmpty />
            }
            <div className="cities__right-section">
              <Map hotels={filteredHotels} size="auto" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  hotels: PropTypes.arrayOf(PropsValidator.HOTEL).isRequired,
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    hotels: sortOffers(state.sort.currentSort, filterOffersByCity(state.cities.currentCity, state.cities.hotels)),
    currentCity: state.cities.currentCity
  };
};

export default connect(mapStateToProps, null)(MainScreen);
