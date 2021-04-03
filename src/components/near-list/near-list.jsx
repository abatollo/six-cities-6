import React from 'react';
import PropTypes from 'prop-types';

import NearCard from '../near-card/near-card';

import {PropsValidator} from '../../utils/props-validator';

const NearList = ({hotels}) => {
  return (
    <div className="near-places__list places__list">
      {hotels.map((hotel) =>
        <NearCard
          key={hotel.id}
          hotel={hotel}
        />)}
    </div>
  );
};

NearList.propTypes = {
  hotels: PropTypes.arrayOf(PropsValidator.HOTEL).isRequired
};

export default NearList;
