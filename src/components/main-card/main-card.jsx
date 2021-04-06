import React from 'react';
import PropTypes from 'prop-types';

import CardFragment from '../card-fragment/card-fragment';

import {PropsValidator} from '../../utils/props-validator';

const MainCard = ({hotel, isAuthorized, onMouseOver, onButtonClick}) => {
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
        <CardFragment hotel={hotel} isAuthorized={isAuthorized} onButtonClick={onButtonClick} />
      </div>
    </article>
  );
};

MainCard.propTypes = {
  hotel: PropsValidator.HOTEL,
  isAuthorized: PropTypes.bool.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default MainCard;
