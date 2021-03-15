import React from "react";
import CardFragment from "../card-fragment/card-fragment";
import {PropsValidator} from "../../utils";

const FavoriteCard = ({hotel}) => {
  const {previewImage} = hotel;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <CardFragment hotel={hotel} />
      </div>
    </article>
  );
};

FavoriteCard.propTypes = {
  hotel: PropsValidator.HOTEL
};

export default FavoriteCard;
