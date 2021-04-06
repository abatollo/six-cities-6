import {STAR_GRADING_LEVEL_AMOUNT} from '../const';

const calculateRatingScalePercentage = (rating) => {
  return Math.min(Math.round(rating) * 100 / STAR_GRADING_LEVEL_AMOUNT, 100);
};

export {calculateRatingScalePercentage};
