import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LatoBold from '../../assets/fonts/Lato-Bold.ttf';

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 10px 10px;
  margin-right: 30px;

  font-family: ${LatoBold};
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 1.25;

  color: #ffffff;

  &:last-child {
    margin-right: 0;
  }

  &.active {
    color: #ff7c0a;
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    background-color: #ffffff;
    border-radius: 5px;
    color: #ff7c0a;
  }
`;

export const Wrapper = styled.nav`
  position: relative;
  top: 30px;

  display: flex;
  justify-content: center;
  padding: 15px 30px;

  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #ff7c0a;
  box-shadow: 0px 2px 8px #ff7c0a;
  backdrop-filter: blur(11.25px);
  border-radius: 15px;
`;
