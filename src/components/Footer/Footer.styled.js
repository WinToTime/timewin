import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
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

  font-style: normal;
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
  font-style: normal;
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
`;

export const BeGamble = styled.img`
  margin: 0 auto;
  width: 150px;
`;
