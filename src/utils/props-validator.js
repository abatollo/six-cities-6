import PropTypes from 'prop-types';

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
      avatarURL: PropTypes.string,
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
      avatarURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export {PropsValidator};
