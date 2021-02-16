import React from "react";
import FavoritesCard from "../favorites-card/favorites-card";
import {PropsValidator} from "../../utils";

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
            <FavoritesCard
              key={hotel.id}
              id={hotel.id}
              isFavorite={hotel.isFavorite}
              isPremium={hotel.isPremium}
              previewImage={hotel.previewImage}
              price={hotel.price}
              rating={hotel.rating}
              title={hotel.title}
              type={hotel.type}
            />)}
        </div>
      </li>
    </ul>
  );
};

FavoritesList.propTypes = {
  hotels: PropsValidator.HOTELS
};

export default FavoritesList;
