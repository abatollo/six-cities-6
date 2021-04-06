import {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import {PropsValidator} from '../../utils/props-validator';

import 'leaflet/dist/leaflet.css';

const MapIcons = {
  MAIN: `./img/pin.svg`,
  ACTIVE: `./img/pin-active.svg`
};

const Map = ({points, render, activeId}) => {
  const mapRef = useRef();

  const city = points[0].city.location;

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.latitude,
        lng: city.longitude
      },
      zoom: city.zoom
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, [city]);

  useEffect(() => {
    const map = leaflet.layerGroup().addTo(mapRef.current);
    points.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: point.id === activeId ? MapIcons.ACTIVE : MapIcons.MAIN,
        iconSize: [27, 39]
      });

      leaflet.marker({
        lat: point.location.latitude,
        lng: point.location.longitude
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(point.title);
    });
    return () => map.clearLayers();
  }, [points, activeId]);

  return (
    render(mapRef)
  );
};

Map.propTypes = {
  city: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }),
  points: PropTypes.arrayOf(PropsValidator.HOTEL),
  activeId: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    activeId: state.activeId
  };
};

export default connect(mapStateToProps, null)(Map);
