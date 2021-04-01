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
      avatarUrl: PropTypes.string,
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
      avatarUrl: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

const FavoriteStatus = {
  ON: 0.1,
  OFF: 0,
};

const MapSizes = {
  auto: `auto`,
  small: `579px`
};

const CITIES = [
  {
    title: `Paris`,
    url: `paris`,
    id: `1`
  },
  {
    title: `Cologne`,
    url: `cologne`,
    id: `2`
  },
  {
    title: `Brussels`,
    url: `brussels`,
    id: `3`
  },
  {
    title: `Amsterdam`,
    url: `amsterdam`,
    id: `4`
  },
  {
    title: `Hamburg`,
    url: `hamburg`,
    id: `5`
  },
  {
    title: `Dusseldorf`,
    url: `dusseldorf`,
    id: `6`
  }
];

const SORT_TYPES = {
  POPULAR: `popular`,
  LOW_PRICE: `low-price`,
  HIGH_PRICE: `high-price`,
  TOP_RATED: `top-rated`
};

const SORT_LIST = [
  {
    text: `Popular`,
    type: SORT_TYPES.POPULAR
  },
  {
    text: `Price: low to high`,
    type: SORT_TYPES.LOW_PRICE
  },
  {
    text: `Price: high to low`,
    type: SORT_TYPES.HIGH_PRICE
  },
  {
    text: `Top rated first`,
    type: SORT_TYPES.TOP_RATED
  },
];

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

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export {PropsValidator, FavoriteStatus, MapSizes, CITIES, SORT_TYPES, SORT_LIST, filterOffersByCity, sortOffers, AuthorizationStatus};
