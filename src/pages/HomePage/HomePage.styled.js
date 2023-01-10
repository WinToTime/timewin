import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`;

export const Text = styled.h2`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;
