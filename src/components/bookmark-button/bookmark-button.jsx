import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {setFavorite} from '../../store/api-actions';

const BookmarkButton = ({isFavorite, onButtonClick, id}) => {
  const handleClick = () => {
    onButtonClick(id, Number(!isFavorite));
  };

  return (
    <button className={`${isFavorite ? `property__bookmark-button--active` : ``} property__bookmark-button button`} type="button" onClick={handleClick}>
      <svg className="property__bookmark-icon" width="31" height="33">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

BookmarkButton.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    id: state.hotel.id,
    isFavorite: state.hotel.isFavorite
  };
};

const mapDispatchToProps = (dispatch) => ({
  onButtonClick(id, isFavorite) {
    dispatch(setFavorite(id, isFavorite));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkButton);
