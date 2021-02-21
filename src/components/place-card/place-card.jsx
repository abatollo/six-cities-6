import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {PropsValidator} from "../../utils";
import {Routes} from "../../routes";

const PlaceCard = ({
  id,
  isFavorite,
  isPremium,
  previewImage,
  price,
  rating,
  title,
  type,
  onMouseEnter,
  cardType
}) => {
  const handleMouseEnter = () => {
    onMouseEnter(id);
  };

  const imageWidths = {
    cities: 260,
    favorites: 150
  };

  const imageHeights = {
    cities: 200,
    favorites: 110
  };

  return (
    <article className={`${cardType === `cities` ? `cities__place-card` : `favorites__card`} place-card`} onMouseEnter={handleMouseEnter}>
      {isPremium && cardType === `cities` &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width={imageWidths[cardType]} height={imageHeights[cardType]} alt="Place image" />
        </a>
      </div>
      <div className={`${cardType === `favorites` ? `favorites__card-info ` : ``}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro; {price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`${isFavorite ? `place-card__bookmark-button--active` : ``} place-card__bookmark-button button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.min(Math.round(rating) * 100 / 5, 100)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={Routes.HOTELS.replace(`:id`, id)}>{title}</Link>
        </h2>
        <p className="place-card__type" style={{textTransform: `capitalize`}}>{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  ...PropsValidator.PLACE_CARD,
  onMouseEnter: PropTypes.func,
  cardType: PropTypes.string
};

export default PlaceCard;
