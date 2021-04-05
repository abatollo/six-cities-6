import React from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';

import {CITIES} from '../../const.js';

const CitiesList = ({currentCity, changeCurrentCity}) => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) =>
          <li key={city.id} className="locations__item">
            <a
              className={`${currentCity === city.title ? `tabs__item--active` : ``} locations__item-link tabs__item`}
              href="#"
              onClick={() => {
                changeCurrentCity(city.title);
              }}
            >
              <span>{city.title}</span>
            </a>
          </li>)}
      </ul>
    </section>
  );
};

CitiesList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  changeCurrentCity: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    currentCity: state.currentCity
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentCity(value) {
    dispatch(ActionCreator.changeCurrentCity(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
