import React from 'react';
import PropTypes from 'prop-types';

const MapNearby = ({mapRef}) => {
  return (
    <section id="map" className="property__map map" ref={mapRef} />
  );
};

MapNearby.propTypes = {
  mapRef: PropTypes.object.isRequired
};

export default MapNearby;
