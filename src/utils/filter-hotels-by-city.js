const filterHotelsByCity = (city, offers) => offers.filter((offer) => offer.city.name === city);

export {filterHotelsByCity};
