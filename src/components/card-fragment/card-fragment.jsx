import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import BookmarkButtonFragment from '../bookmark-button-fragment/bookmark-button-fragment';

import {PropsValidator} from '../../utils/props-validator';
import {Routes} from '../../routes';

const CardFragment = ({hotel, isAuthorized, onButtonClick}) => {
  const {
    price,
    isFavorite,
    rating,
    title,
    id,
    type
  } = hotel;

  return (
    <>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro; {price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <BookmarkButtonFragment isFavorite={isFavorite} id={id} onButtonClick={onButtonClick} isAuthorized={isAuthorized} />
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
  hotel: PropsValidator.HOTEL,
  isAuthorized: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default CardFragment;
