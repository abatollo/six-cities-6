import {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import {PropsValidator} from '../../utils/props-validator';
import {MAP_CDN_URL, MAP_ATTRIBUTION} from '../../const';

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
      .tileLayer(MAP_CDN_URL, {
        attribution: MAP_ATTRIBUTION
      })
      .addTo(mapRef.current);

    // return () => {
    //   console.log(mapRef.current);
    //   mapRef.current.remove();
    // };
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
    // return () => map.clearLayers();
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
