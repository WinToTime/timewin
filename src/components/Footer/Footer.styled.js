import styled from 'styled-components';
import LatoRegular from '../../assets/fonts/Lato-Regular.ttf';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`;

export const LogoWrapper = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Text = styled.p`
  margin-bottom: 10px;

  font-family: ${LatoRegular};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1;

  text-align: center;

  color: #999999;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
`;

export const Telegram = styled.p`
  margin-bottom: 5px;
  font-family: ${LatoRegular};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.38;

  text-align: center;

  color: #c2c2c2;
`;

export const TelegramLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #229ed9;
  border-radius: 50%;

  &:hover {
    background-color: #ff7c0a;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

export const BeGamble = styled.img`
  margin: 0 auto;
  width: 150px;
`;
