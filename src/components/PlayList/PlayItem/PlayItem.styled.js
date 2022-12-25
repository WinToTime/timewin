import styled from 'styled-components';

export const Card = styled.li`
  position: relative;
  width: 300px;
  padding: 15px;
  margin-bottom: 30px;
  box-sizing: border-box;

  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #ff7c0a;
  box-shadow: 0px 2px 8px #ff7c0a;
  backdrop-filter: blur(11.25px);
  border-radius: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
`;

export const LogoWrapper = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
    height: 150px;
  }
  @media screen and (min-width: 768px) {
    margin-right: 15px;
  }
`;

export const Logo = styled.img`
  width: 300px;

  @media screen and (min-width: 768px) {
    padding: 25px 0;
    width: 150px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1200px) {
    width: 220px;
  }
`;

export const Description = styled.p`
  margin-bottom: 20px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.22;

  text-align: center;

  color: #c2c2c2;

  @media screen and (min-width: 768px) {
    width: 180px;
    margin-right: 15px;
    margin-bottom: 0;

    font-size: 18px;
  }

  @media screen and (min-width: 1200px) {
    width: 250px;
    font-size: 20px;
  }
`;

export const FeatureList = styled.ul`
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    max-width: 200px;
    width: 100%;
    margin-right: 15px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1200px) {
    max-width: 300px;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  margin-left: auto;

  box-sizing: border-box;
  background: #ff7c0a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

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
    padding: 40px;
    width: 130px;
    height: 130px;
  }
`;
