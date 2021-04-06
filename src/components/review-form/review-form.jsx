import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {sendComment} from '../../store/api-actions';
import {MIN_USER_REVIEW_TEXT_LENGTH, MAX_USER_REVIEW_TEXT_LENGTH} from '../../const';

const ReviewForm = ({onSubmit, isSendingComment}) => {
  const [review, setReview] = useState({
    rating: ``,
    comment: ``
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setReview({
      rating: ``,
      comment: ``
    });

    onSubmit({
      ...review
    });
  };

  const handleChange = (evt) => {
    if (isSendingComment) {
      return;
    }
    const {name, value} = evt.target;
    setReview((prevReview) => (
      {...prevReview, [name]: value}
    ));
  };

  return (
    <form
      className="reviews__form form"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue="5"
          id="5-stars"
          type="radio"
          onChange={handleChange}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue="4"
          id="4-stars"
          type="radio"
          onChange={handleChange}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue="3"
          id="3-stars"
          type="radio"
          onChange={handleChange}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue="2"
          id="2-stars"
          type="radio"
          onChange={handleChange}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue="1"
          id="1-star"
          type="radio"
          onChange={handleChange}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review.comment}
        onChange={handleChange}
        disabled={isSendingComment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSendingComment || !review.comment || !review.rating || review.comment.length < MIN_USER_REVIEW_TEXT_LENGTH || review.comment > MAX_USER_REVIEW_TEXT_LENGTH}>Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isSendingComment: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    isSendingComment: state.isSendingComment
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit(review) {
    dispatch(sendComment(ownProps.id, review));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
