import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import NearCard from '../near-card/near-card';

import {PropsValidator} from '../../utils/props-validator';
import {setFavoriteNearby} from '../../store/api-actions';

const NearList = ({hotels, isAuthorized, onButtonClick}) => {
  return (
    <div className="near-places__list places__list">
      {hotels.map((hotel) =>
        <NearCard
          key={hotel.id}
          hotel={hotel}
          onButtonClick={onButtonClick}
          isAuthorized={isAuthorized}
        />)}
    </div>
  );
};

NearList.propTypes = {
  hotels: PropTypes.arrayOf(PropsValidator.HOTEL).isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onButtonClick(id, isFavorite, isAuthorized) {
    dispatch(setFavoriteNearby(id, isFavorite, isAuthorized));
  }
});

export default connect(null, mapDispatchToProps)(NearList);
