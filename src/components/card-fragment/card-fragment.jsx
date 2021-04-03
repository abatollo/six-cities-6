import React from 'react';
import {Link} from 'react-router-dom';

import {PropsValidator} from '../../utils/props-validator';
import {Routes} from '../../routes';

const CardFragment = (props) => {
  const hotel = props.hotel;

  const {price, isFavorite, rating, title, id, type} = hotel;

  return (
    <>
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
    </>
  );
};

CardFragment.propTypes = {
  hotel: PropsValidator.HOTEL
};

export default CardFragment;
