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

const MAP_CDN_URL = `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`;

const MAP_ATTRIBUTION = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`;

const STAR_GRADING_LEVEL_AMOUNT = 5;

const DISPLAYED_COMMENTS_AMOUNT = 10;

const MIN_USER_REVIEW_TEXT_LENGTH = 30;

const MAX_USER_REVIEW_TEXT_LENGTH = 500;

const ERROR_DISPLAY_TIMEOUT = 3000;

const FavoriteStatus = {
  ON: 1,
  OFF: 0,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export {
  CITIES,
  SORT_TYPES,
  SORT_LIST,
  MAP_CDN_URL,
  MAP_ATTRIBUTION,
  STAR_GRADING_LEVEL_AMOUNT,
  DISPLAYED_COMMENTS_AMOUNT,
  MIN_USER_REVIEW_TEXT_LENGTH,
  MAX_USER_REVIEW_TEXT_LENGTH,
  ERROR_DISPLAY_TIMEOUT,
  FavoriteStatus,
  AuthorizationStatus
};
