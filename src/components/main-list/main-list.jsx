import React, {useState} from "react";
import {connect} from 'react-redux';
import MainCard from "../main-card/main-card";
import PropTypes from "prop-types";
import {PropsValidator} from "../../utils";

const MainList = ({hotels, currentCity}) => {
  const [idActive, setIdActive] = useState(hotels[0].id);

  const filteredHotels = hotels.filter((hotel) => hotel.city.name === currentCity);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{filteredHotels.length} places to stay in {currentCity}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width={7} height={4}>
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li className="places__option" tabIndex={0}>Price: low to high</li>
          <li className="places__option" tabIndex={0}>Price: high to low</li>
          <li className="places__option" tabIndex={0}>Top rated first</li>
        </ul>
      </form>
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
    hotels: state.cities.hotels,
    currentCity: state.cities.currentCity
  };
};

export default connect(mapStateToProps, null)(MainList);
