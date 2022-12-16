import Rating from '../Rating';
import { Card, Logo, Wrapper, Title, Description, Link, FeatureList } from './PlayItem.styled';
import Feature from '../Feature';

const PlayItem = ({ playItem }) => {
  const { id, logo, title, rating, description, feature, link } = playItem;
  return (
    <Card key={id}>
      <Logo src={logo} alt={title} />
      <Rating rat={rating} />
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
