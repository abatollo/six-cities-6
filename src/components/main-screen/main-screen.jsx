import React from "react";
import {connect} from 'react-redux';
import Header from "../header/header";
import MainList from "../main-list/main-list";
import Map from "../map/map";
import CitiesList from '../cities-list/cities-list';
import PropTypes from "prop-types";
import {PropsValidator} from "../../utils";

const MainScreen = ({hotels}) => {

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
            <MainList />
            <div className="cities__right-section">
              <Map hotels={hotels} size="auto" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  hotels: PropTypes.arrayOf(PropsValidator.HOTEL).isRequired
};

const mapStateToProps = (state) => {
  return {
    hotels: state.cities.hotels
  };
};

export default connect(mapStateToProps, null)(MainScreen);
