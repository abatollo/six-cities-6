import React from "react";
import ReviewsItem from "../reviews-item/reviews-item";
import PropTypes from "prop-types";
import {PropsValidator} from "../../utils";

const ReviewsList = ({comments}) => {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment) =>
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