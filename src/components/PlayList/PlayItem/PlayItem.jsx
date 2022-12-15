import {
  Card,
  Logo,
  Rating,
  Wrapper,
  Title,
  Description,
  Link,
  FeatureList,
} from './PlayItem.styled';
import Feature from '../Feature';

const PlayItem = ({ playItem }) => {
  const { id, logo, title, rating, description, feature, link } = playItem;
  return (
    <Card key={id}>
      <Logo src={logo} alt={title} />
      <Rating>{rating}/5</Rating>
      <Wrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Wrapper>
      <FeatureList>
        <Feature featureArray={feature} />
      </FeatureList>
      <Link href={link} target="_blank" rel="noreferrer">
        Забрать бонус
      </Link>
    </Card>
  );
};

export default PlayItem;
