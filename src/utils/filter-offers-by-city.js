const filterOffersByCity = (city, offers) => offers.filter((offer) => offer.city.name === city);

export {filterOffersByCity};
