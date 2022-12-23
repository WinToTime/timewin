import styled from 'styled-components';
import LatoBold from '../../../assets/fonts/Lato-Bold.ttf';

export const Card = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 300px;
  padding: 30px 15px 15px;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #ff7c0a;
  box-shadow: 0px 2px 8px #ff7c0a;
  backdrop-filter: blur(11.25px);
  border-radius: 15px;

  &:nth-child(3) {
    margin-right: 0;
  }

  @media screen and (min-width: 768px) {
    margin-right: 10px;
    width: calc((100% - 20px) / 3);
  }
`;

export const Wrapper = styled.div`
  flex-grow: 1;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  height: 150px;
`;

export const Logo = styled.img`
  width: 300px;
`;

export const Description = styled.p`
  margin-bottom: 20px;

  font-family: ${LatoBold};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.22;

  text-align: center;

  color: #c2c2c2;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const FeatureList = styled.ul`
  margin-bottom: 20px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;

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

  &:hover,
  &:focus {
    box-shadow: 0 0 8px #ff7c0a;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
