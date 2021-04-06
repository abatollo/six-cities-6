const sortHotelsByCities = (hotels) => {
  return hotels.reduce((byCities, hotel) => {
    const isFavorite = hotel.isFavorite;
    if (isFavorite) {
      if (hotel.city.name in byCities) {
        byCities[hotel.city.name].push(hotel);
      } else {
        byCities[hotel.city.name] = [hotel];
      }
    }

    return byCities;
  }, {});
};

export {sortHotelsByCities};
