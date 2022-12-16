import styled from 'styled-components';
import LatoBold from '../../../assets/fonts/Lato-Bold.ttf';
import LatoRegular from '../../../assets/fonts/Lato-Regular.ttf';

export const Card = styled.li`
  padding: 15px;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #ff7c0a;
  box-shadow: 0px 2px 8px #ff7c0a;
  backdrop-filter: blur(11.25px);
  border-radius: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 320px) {
    flex-direction: column;
    width: 300px;
    box-sizing: border-box;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }
`;

export const Logo = styled.img`
  width: 300px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    padding: 25px 0;
    width: 170px;
    margin-right: 5px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1200px) {
    width: 220px;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 100%;
    margin-right: 15px;
  }
`;

export const Title = styled.p`
  margin-bottom: 20px;
  font-family: ${LatoRegular};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.38;

  text-align: center;
  text-transform: capitalize;

  color: #c2c2c2;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const Description = styled.p`
  margin-bottom: 30px;
  font-family: ${LatoBold};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.22;

  text-align: center;

  color: #c2c2c2;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const Link = styled.a`
  box-sizing: border-box;
  padding: 43px 25px;
  background: #ff7c0a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  font-family: ${LatoBold};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.22;

  text-align: center;
  text-transform: uppercase;

  color: #ffffff;

  @media screen and (min-width: 320px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 35px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 130px;
    height: 130px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const FeatureList = styled.ul`
  margin-bottom: 30px;

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
    max-width: 260px;
    margin-right: 15px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1200px) {
  }
`;
