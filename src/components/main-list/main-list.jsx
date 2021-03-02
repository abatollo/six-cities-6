import React, {useState} from "react";
import MainCard from "../main-card/main-card";
import PropTypes from "prop-types";
import {PropsValidator} from "../../utils";

const MainList = ({hotels}) => {
  const [idActive, setIdActive] = useState(hotels[0].id);

  return (
    <div className="cities__places-list places__list tabs__content" data-active={idActive}>
      {hotels.map((hotel) =>
        <MainCard
          key={hotel.id}
          hotel={hotel}
          onMouseOver={setIdActive}
        />)}
    </div>
  );
};

MainList.propTypes = {
  hotels: PropTypes.arrayOf(PropsValidator.HOTEL).isRequired
};

export default MainList;
