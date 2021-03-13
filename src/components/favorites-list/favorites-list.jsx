import React from "react";
import {PropsValidator} from "../../utils";
import PropTypes from "prop-types";
import FavoriteCityList from "../favorite-city-list/favorite-city-list";

const FavoritesList = ({hotels}) => {
  const citiesWithHotels = {};

  for (const hotel of hotels) {
    if (hotel.city.name in citiesWithHotels) {
      citiesWithHotels[hotel.city.name].push(hotel);
    } else {
      citiesWithHotels[hotel.city.name] = [];
      citiesWithHotels[hotel.city.name].push(hotel);
    }
  }

  return (
    <ul className="favorites__list">
      {Object.values(citiesWithHotels).map((cityWithHotels, index) =>
        <FavoriteCityList
          key={index}
          hotels={cityWithHotels}
        />
      )}
    </ul>
  );
};

FavoritesList.propTypes = {
  hotels: PropTypes.arrayOf(PropsValidator.HOTEL).isRequired
};

export default FavoritesList;
