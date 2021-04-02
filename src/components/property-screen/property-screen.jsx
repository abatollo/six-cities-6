import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../header/header';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import MapNearby from '../map-nearby/map-nearby';
import NearList from '../near-list/near-list';
import StarRating from '../star-rating/star-rating';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

import {PropsValidator} from '../../utils';
import {AuthorizationStatus} from '../../const';
import {createAPI} from '../../services/api';
import {APIRouteMethods} from '../../routes';
import {fetchRoom, fetchComments} from '../../store/api-actions.js';
import {ActionCreator} from '../../store/action';

const api = createAPI();
const fetchNearbyList = (id) => {
  return api.get(APIRouteMethods.getHotelNearby(id));
};

const PropertyScreen = ({currentOffer, authorizationStatus, isRoomLoaded, onLoadData, setRoomLoaded, isCommentsLoading, comments}) => {
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;
  const id = +useParams().id;

  const [nearby, setNearby] = useState();

  useEffect(() => {
    fetchNearbyList(id).then((data) => {
      setNearby(data.data);
    });
  }, [currentOffer]);

  useEffect(() => {
    setRoomLoaded(false);
  }, [id]);

  useEffect(() => {
    if (!isRoomLoaded) {
      onLoadData(id);
    }
  }, [isRoomLoaded]);

  if (!isRoomLoaded) {
    return (
      <LoadingScreen />
    );
  }

  if (!currentOffer) {
    return (
      <NotFoundScreen />
    );
  }

  const {
    images,
    is_premium: isPremium,
    title,
    is_favorite: isFavorite,
    rating,
    type,
    bedrooms,
    max_adults: maxAdults,
    price,
    goods,
    description
  } = currentOffer;

  const {
    name: hostName,
    is_pro: isHostPro,
    avatar_url: hostAvatarURL
  } = currentOffer.host;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, 6).map((image, index) =>
                <div className="property__image-wrapper" key={index}>
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : ``}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`${isFavorite ? `property__bookmark-button--active` : ``} property__bookmark-button button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <StarRating rating={rating} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type[0].toUpperCase() + type.slice(1)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((item, index) =>
                    <li className="property__inside-item" key={index}>
                      {item}
                    </li>
                  )}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`${isHostPro ? `property__avatar-wrapper--pro` : ``} property__avatar-wrapper user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={hostAvatarURL} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {hostName}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                {!isCommentsLoading ? <ReviewsList comments={comments} /> : <LoadingScreen />}
                {isAuthorized ? <ReviewForm id={id} /> : ``}
              </section>
            </div>
          </div>
          <section className="property__map map">
            {nearby ? <Map
              city={nearby[0].city.location}
              points={nearby}
              render={(ref) => {
                return (<MapNearby mapRef={ref} />);
              }}
            /> : ``}
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearby ? <NearList hotels={nearby.slice(0, 3)} /> : ``}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

PropertyScreen.propTypes = {
  comments: PropTypes.arrayOf(PropsValidator.COMMENT),
  // currentOffer: PropTypes.objectOf(PropsValidator.HOTEL),
  authorizationStatus: PropTypes.string.isRequired,
  isRoomLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
  setRoomLoaded: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    currentOffer: state.currentRoom,
    isRoomLoaded: state.isRoomLoaded,
    authorizationStatus: state.authorizationStatus,
    isCommentsLoading: state.isCommentsLoading,
    comments: state.comments
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchRoom(id));
    dispatch(fetchComments(id));
  },
  setRoomLoaded(value) {
    dispatch(ActionCreator.setRoomLoaded(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyScreen);
