import styled from 'styled-components';
import LatoRegular from '../../../assets/fonts/Lato-Regular.ttf';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 48px;
  font-family: ${LatoRegular};
  font-weight: 400;
  text-transform: uppercase;
  line-height: 0.55;
`;

export const To = styled.span`
  color: #ff7c0a;
  z-index: 1;
`;

export const ExclamationMark = styled.span`
  color: #ff7c0a;
`;
