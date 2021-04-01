import PropTypes from 'prop-types';
import {SORT_TYPES} from './const';

const PropsValidator = {
  HOTEL: PropTypes.shape({
    bedrooms: PropTypes.number.isRequired,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired
      }),
      name: PropTypes.string.isRequired
    }),
    description: PropTypes.string.isRequired,
    goods: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ),
    host: PropTypes.shape({
      avatar_url: PropTypes.string,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool,
      name: PropTypes.string.isRequired
    }),
    id: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ),
    isFavorite: PropTypes.bool,
    isPremium: PropTypes.bool,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }),
    maxAdults: PropTypes.number,
    previewImage: PropTypes.string,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
  COMMENT: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    user: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      is_pro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

const filterOffersByCity = (city, offers) => offers.filter((offer) => offer.city.name === city);

const sortOffers = (currentSort, offers) => {
  switch (currentSort) {
    case SORT_TYPES.LOW_PRICE:
      return offers.sort((a, b) => a.price - b.price);
    case SORT_TYPES.HIGH_PRICE:
      return offers.sort((a, b) => b.price - a.price);
    case SORT_TYPES.TOP_RATED:
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

export {PropsValidator, filterOffersByCity, sortOffers};
