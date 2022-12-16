import { RatingStyle } from './Rating.styled';

const Rating = ({ rat }) => {
  return <RatingStyle>{rat}/5</RatingStyle>;
};

export default Rating;
