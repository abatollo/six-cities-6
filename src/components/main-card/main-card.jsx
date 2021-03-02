import React from "react";
import {PropsValidator} from "../../utils";
import PropTypes from "prop-types";
import CardFragment from "../card-fragment/card-fragment";

const MainCard = (props) => {

  const hotel = props.hotel;
  const onMouseOver = props.onMouseOver;

  const {isPremium, previewImage, id} = hotel;

  const handleMouseOver = () => {
    onMouseOver(id);
  };

  return (
    <article className="cities__place-card place-card" onMouseOver={handleMouseOver}>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <CardFragment hotel={hotel} />
      </div>
    </article>
  );
};

MainCard.propTypes = {
  hotel: PropsValidator.HOTEL,
  onMouseOver: PropTypes.func.isRequired
};

export default MainCard;
