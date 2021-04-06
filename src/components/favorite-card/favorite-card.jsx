import React from 'react';
import PropTypes from 'prop-types';

import CardFragment from '../card-fragment/card-fragment';

import {PropsValidator} from '../../utils/props-validator';

const FavoriteCard = ({hotel, isAuthorized, onButtonClick}) => {
  const {previewImage} = hotel;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <CardFragment hotel={hotel} onButtonClick={onButtonClick} isAuthorized={isAuthorized} />
      </div>
    </article>
  );
};

FavoriteCard.propTypes = {
  hotel: PropsValidator.HOTEL,
  isAuthorized: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default FavoriteCard;
