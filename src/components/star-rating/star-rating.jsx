import React from 'react';
import PropTypes from 'prop-types';

const StarRating = ({rating}) => {
  const style = {
    width: `${Math.min(Math.round(rating) * 100 / 5, 100)}%`
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
