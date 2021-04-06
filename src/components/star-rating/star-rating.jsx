import React from 'react';
import PropTypes from 'prop-types';

import {calculateRatingScalePercentage} from '../../utils/calculate-rating-scale-percentage';

const StarRating = ({rating}) => {
  const style = {
    width: `${calculateRatingScalePercentage(rating)}%`
  };
  return (
    <>
      <span style={style} />
    </>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired
};

export default StarRating;
