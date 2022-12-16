import styled from 'styled-components';
import HeaderIMG from '../../images/header.jpg';

export const HeaderBg = styled.header`
  height: 540px;
  margin-left: auto;
  margin-right: auto;
  background-image: linear-gradient(360deg, #222222 0%, rgba(0, 0, 0, 0) 100%), url(${HeaderIMG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
