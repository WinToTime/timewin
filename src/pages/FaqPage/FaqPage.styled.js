import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Text = styled.div`
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 1.1;
  text-align: justify;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;

export const ParagraphTitle = styled.p`
  margin-bottom: 5px;
  text-indent: 30px;
  font-size: 14px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ParagraphTitleList = styled.li`
  font-size: 12px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Paragraph = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
  text-indent: 30px;
  font-weight: 400;
`;

export const List = styled.ul`
  margin-left: 60px;
`;

export const ListItem = styled.li`
  list-style: decimal;
`;
