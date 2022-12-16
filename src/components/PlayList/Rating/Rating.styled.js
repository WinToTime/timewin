import styled from 'styled-components';
import LatoBold from '../../../assets/fonts/Lato-Bold.ttf';

export const RatingStyle = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(245, 245, 245, 0.5);
  border: 1px solid #ff7c0a;
  border-radius: 15px 0px;
  font-family: ${LatoBold};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.1;
  text-transform: capitalize;
  color: #000000;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 20px;
  }
`;
