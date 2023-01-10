import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 30px;
  margin-bottom: 20px;

  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #ff7c0a;
  box-shadow: 0px 2px 8px #ff7c0a;
  backdrop-filter: blur(11.25px);
  border-radius: 15px;

  @media screen and (min-width: 768px) {
    padding: 10px 30px;
  }
`;

export const Link = styled(NavLink)`
  margin-right: 20px;
  min-width: 80px;
  width: 150px;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.2;

  text-align: center;
  color: #ffffff;

  transition-property: background-color, color;
  transition-duration: 250ms;
  transition-timing-function: ease-in;

  &:last-child {
    margin-right: 0;
  }

  &.active {
    color: #ff7c0a;
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    color: #ff7c0a;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;
