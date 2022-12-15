import styled from 'styled-components';
// import LatoBold from '../../../assets/fonts/Lato-Bold.ttf';
import LatoRegular from '../../../assets/fonts/Lato-Regular.ttf';

export const FeatureItem = styled.li`
  margin-bottom: 5px;

  font-family: ${LatoRegular};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.57;

  color: #c2c2c2;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
`;
