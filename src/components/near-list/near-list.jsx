import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import NearCard from '../near-card/near-card';

import {PropsValidator} from '../../utils/props-validator';
import {setFavoriteNearby} from '../../store/api-actions';

const NearList = ({hotels, onButtonClick}) => {
  return (
    <div className="near-places__list places__list">
      {hotels.map((hotel) =>
        <NearCard
          key={hotel.id}
          hotel={hotel}
          onButtonClick={onButtonClick}
        />)}
    </div>
  );
};

NearList.propTypes = {
  hotels: PropTypes.arrayOf(PropsValidator.HOTEL).isRequired,
  onButtonClick: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onButtonClick(id, isFavorite) {
    dispatch(setFavoriteNearby(id, isFavorite));
  }
});

export default connect(null, mapDispatchToProps)(NearList);
