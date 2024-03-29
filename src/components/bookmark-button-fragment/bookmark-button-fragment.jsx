import React from 'react';
import PropTypes from 'prop-types';

const BookmarkButtonFragment = ({id, isFavorite, isAuthorized, onButtonClick}) => {
  const handleClick = () => {
    onButtonClick(id, Number(!isFavorite), isAuthorized);
  };

  return (
    <button className={`${isFavorite ? `place-card__bookmark-button--active` : ``} place-card__bookmark-button button`} type="button" onClick={handleClick}>
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

BookmarkButtonFragment.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default BookmarkButtonFragment;
