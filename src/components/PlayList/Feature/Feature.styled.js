import styled from 'styled-components';

export const FeatureItem = styled.li`
  margin-bottom: 5px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;

  color: #c2c2c2;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
`;

export const Svg = styled.svg`
  margin-right: 10px;
  fill: #c2c2c2;
`;
