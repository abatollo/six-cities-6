import React from 'react';
import PropTypes from 'prop-types';

const MapMain = ({mapRef}) => {
  return (
    <section id="map" className="cities__map map" style={{height: `100%`}} ref={mapRef} />
  );
};

MapMain.propTypes = {
  mapRef: PropTypes.object.isRequired
};

export default MapMain;
