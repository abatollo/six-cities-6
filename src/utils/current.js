const findCurrentHotel = (hotels, id) => {
  return hotels.find((hotel) => {
    return hotel.id === id;
  });
};

export {findCurrentHotel};
