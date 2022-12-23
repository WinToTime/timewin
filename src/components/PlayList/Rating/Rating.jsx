import { RatContainer, RatingStyle } from './Rating.styled';

const Rating = ({ rat }) => {
  return (
    <RatContainer>
      <RatingStyle>{rat}/5</RatingStyle>
    </RatContainer>
  );
};

export default Rating;
