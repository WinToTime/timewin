import styled from 'styled-components';

export const RatContainer = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: rgba(245, 245, 245, 0.5);
  border: 1px solid #ff7c0a;
  border-radius: 15px 0px;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const RatingStyle = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.1;

  text-transform: capitalize;
  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
