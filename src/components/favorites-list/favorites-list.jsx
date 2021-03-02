import React from "react";
import {PropsValidator} from "../../utils";
import PropTypes from "prop-types";
import FavoriteCard from "../favorite-card/favorite-card";

const FavoritesList = ({hotels}) => {
  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {hotels.map((hotel) =>
            <FavoriteCard
              key={hotel.id}
              hotel={hotel}
            />)}
        </div>
      </li>
    </ul>
  );
};

FavoritesList.propTypes = {
  hotels: PropTypes.arrayOf(PropsValidator.HOTEL).isRequired
};

export default FavoritesList;
