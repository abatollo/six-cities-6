import React, {useState} from "react";
import PlaceCard from "../place-card/place-card";
import {PropsValidator} from "../../utils";

const PlacesList = ({hotels}) => {
  const [idActive, setIdActive] = useState(hotels[0].id);

  const handleMouseEnter = (id) => {
    setIdActive(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {hotels.map((hotel) =>
        <PlaceCard
          key={hotel.id}
          id={hotel.id}
          isFavorite={hotel.isFavorite}
          isPremium={hotel.isPremium}
          previewImage={hotel.previewImage}
          price={hotel.price}
          rating={hotel.rating}
          title={hotel.title}
          type={hotel.type}
          isActive={idActive === hotel.id}
          onMouseEnter={handleMouseEnter}
          cardType="cities"
        />)}
    </div>
  );
};

PlacesList.propTypes = {
  hotels: PropsValidator.HOTELS
};

export default PlacesList;
