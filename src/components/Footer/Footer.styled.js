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
  width: 180px;
`;

export const ContactTitle = styled.p`
  margin-bottom: 5px;
  font-style: normal;
  font-size: 16px;
  line-height: 1.38;

  text-align: center;

  color: #c2c2c2;
`;

export const ContactList = styled.ul`
  display: flex;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 40px);
    grid-template-rows: repeat(2, 40px);
    grid-column-gap: 8px;
    grid-row-gap: 8px;
  }
`;

export const ContactItem = styled.li`
  margin-right: 10px;
  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: ease-in;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const ContactSvg = styled.svg`
  width: 40px;
  height: 40px;
  fill: #40b3e0;

  transition-property: fill;
  transition-duration: 250ms;
  transition-timing-function: ease-in;

  &:hover,
  &:focus {
    fill: #ff7c0a;
  }
`;

export const BeGamble = styled.img`
  margin: 0 auto;
  width: 150px;
  height: auto;
`;
