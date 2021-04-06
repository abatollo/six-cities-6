import React from 'react';
import PropTypes from 'prop-types';

import CardFragment from '../card-fragment/card-fragment';

import {PropsValidator} from '../../utils/props-validator';

const NearCard = ({hotel, isAuthorized, onButtonClick}) => {
  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={hotel.previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <CardFragment hotel={hotel} onButtonClick={onButtonClick} isAuthorized={isAuthorized} />
      </div>
    </article>
  );
};

NearCard.propTypes = {
  hotel: PropsValidator.HOTEL,
  isAuthorized: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default NearCard;
