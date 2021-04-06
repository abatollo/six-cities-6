import {DISPLAYED_COMMENTS_AMOUNT} from '../const';

const sortComments = (comments) => {
  return comments.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return aDate.getTime() - bDate.getTime();
  }).slice(0, DISPLAYED_COMMENTS_AMOUNT);
};

export {sortComments};
