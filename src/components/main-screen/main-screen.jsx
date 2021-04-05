import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../header/header';
import MainList from '../main-list/main-list';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import MainListEmpty from '../main-list-empty/main-list-empty';
import MainMap from '../map-main/map-main';
import LoadingScreen from '../loading-screen/loading-screen';

import {filterHotelsByCity} from '../../utils/filter-hotels-by-city';
import {sortHotels} from '../../utils/sort-hotels';
import {PropsValidator} from '../../utils/props-validator';
import {fetchHotels} from '../../store/api-actions';

const MainScreen = ({sortedFilteredHotels, isHotelsLoading, onLoadData}) => {
  useEffect(() => {
    onLoadData();
  }, []);

  if (isHotelsLoading || !sortedFilteredHotels.length) {
    return (
      <LoadingScreen />
    );
  }

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
              sortedFilteredHotels.length ?
                <MainList sortedFilteredHotels={sortedFilteredHotels} /> :
                <MainListEmpty />
            }
            <div className="cities__right-section">
              <Map
                points={sortedFilteredHotels}
                render={(ref) => {
                  return (<MainMap mapRef={ref} />);
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  sortedFilteredHotels: PropTypes.arrayOf(PropsValidator.HOTEL).isRequired,
  isHotelsLoading: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    sortedFilteredHotels: sortHotels(state.currentSort, filterHotelsByCity(state.currentCity, state.hotels)),
    isHotelsLoading: state.isHotelsLoading
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchHotels());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
