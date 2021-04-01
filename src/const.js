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

const FavoriteStatus = {
  ON: 0.1,
  OFF: 0,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export {CITIES, SORT_TYPES, SORT_LIST, FavoriteStatus, AuthorizationStatus};
