import styled from 'styled-components';
import LatoRegular from '../../assets/fonts/Lato-Regular.ttf';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 130px 0;

  font-size: 128px;
  font-family: ${LatoRegular};
  text-transform: uppercase;
  line-height: 0.55;
`;

export const To = styled.span`
  color: #ff7c0a;
  z-index: 1;
`;
