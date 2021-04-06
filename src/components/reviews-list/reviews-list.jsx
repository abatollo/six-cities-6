import React from 'react';
import PropTypes from 'prop-types';

import ReviewsItem from '../reviews-item/reviews-item';

import {PropsValidator} from '../../utils/props-validator';
import {sortComments} from '../../utils/sort-comments';

const ReviewsList = ({comments}) => {
  const sortedComments = sortComments(comments);
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {sortedComments.map((comment) =>
          <ReviewsItem
            key={comment.id}
            comment={comment}
          />
        )}
      </ul>
    </>
  );
};

ReviewsList.propTypes = {
  comments: PropTypes.arrayOf(PropsValidator.COMMENT).isRequired
};

export default ReviewsList;
