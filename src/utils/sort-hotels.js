import {SORT_TYPES} from '../const';

const sortHotels = (currentSort, hotels) => {
  switch (currentSort) {
    case SORT_TYPES.LOW_PRICE:
      return hotels.sort((a, b) => a.price - b.price);
    case SORT_TYPES.HIGH_PRICE:
      return hotels.sort((a, b) => b.price - a.price);
    case SORT_TYPES.TOP_RATED:
      return hotels.sort((a, b) => b.rating - a.rating);
    default:
      return hotels;
  }
};

export {sortHotels};
