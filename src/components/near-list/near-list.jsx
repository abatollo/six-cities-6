import React from "react";
import {PropsValidator} from "../../utils";
import PropTypes from "prop-types";
import NearCard from "../near-card/near-card";

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
