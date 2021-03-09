import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from "prop-types";
import {PropsValidator} from "../../utils";
import 'leaflet/dist/leaflet.css';

const Map = ({hotels}) => {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: [
        hotels[0].city.location.latitude,
        hotels[0].city.location.longitude
      ],
      zoom: hotels[0].city.location.zoom,
      zoomControl: false
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    hotels.forEach((hotel) => {
      const customIcon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [27, 39]
      });

      leaflet.marker([
        hotel.location.latitude,
        hotel.location.longitude
      ],
      {
        icon: customIcon
      })
      .addTo(mapRef.current);
    });
  }, []);

  return (
    <section id="map" className="cities__map map" ref={mapRef} />
  );
};

Map.propTypes = {
  hotels: PropTypes.arrayOf(PropsValidator.HOTEL).isRequired
};

export default Map;
