const adaptHotelsToClient = (serverHotels) => {
  return serverHotels.map((serverHotel) => {
    return adaptHotelToClient(serverHotel);
  });
};

const adaptHotelToClient = (serverHotel) => {
  const adaptedHotelToClient = {
    ...serverHotel,
    host: {
      ...serverHotel.host,
      isPro: serverHotel.host.is_pro,
      avatarURL: serverHotel.host.avatar_url
    },
    previewImage: serverHotel.preview_image,
    isFavorite: serverHotel.is_favorite,
    isPremium: serverHotel.is_premium,
    maxAdults: serverHotel.max_adults
  };

  delete adaptedHotelToClient.host.is_pro;
  delete adaptedHotelToClient.host.avatar_url;
  delete adaptedHotelToClient.preview_image;
  delete adaptedHotelToClient.is_favorite;
  delete adaptedHotelToClient.is_premium;
  delete adaptedHotelToClient.max_adults;

  return adaptedHotelToClient;
};

const adaptCommentsToClient = (serverComments) => {
  return serverComments.map((serverComment) => {
    return adaptCommentToClient(serverComment);
  });
};

const adaptCommentToClient = (serverComment) => {
  const adaptedCommentToClient = {
    ...serverComment,
    user: {
      ...serverComment.user,
      isPro: serverComment.user.is_pro,
      avatarURL: serverComment.user.avatar_url
    }
  };

  delete adaptedCommentToClient.user.is_pro;
  delete adaptedCommentToClient.user.avatar_url;

  return adaptedCommentToClient;
};

export {adaptHotelsToClient, adaptHotelToClient, adaptCommentsToClient};
