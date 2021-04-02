import React from 'react';

import {PropsValidator} from '../../utils';

const ReviewsItem = ({comment}) => {
  const {comment: commentBody, date, rating, user} = comment;
  const {avatar_url: avatarURL, name} = user;

  const formattedDate = new Date(date);
  const postMounthYear = formattedDate.toLocaleString(`en-US`, {year: `numeric`, month: `long`});
  const dateTimeStamp = formattedDate.toISOString().split(`T`)[0];

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarURL} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.min(Math.round(rating) * 100 / 5, 100)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {commentBody}
        </p>
        <time className="reviews__time" dateTime={dateTimeStamp}>
          {postMounthYear}
        </time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  comment: PropsValidator.COMMENT
};

export default ReviewsItem;
