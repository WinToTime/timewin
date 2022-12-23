import Rating from '../Rating';
import { Card, LogoWrapper, Logo, Description, Link, FeatureList } from './PlayItem.styled';
import Feature from '../Feature';

const PlayItem = ({ playItem }) => {
  const { id, logo, title, rating, description, feature, link } = playItem;
  return (
    <Card key={id}>
      <LogoWrapper>
        <Logo src={logo} alt={title} width="300" height="150" />
      </LogoWrapper>
      <Rating rat={rating} />
      <Description>{description}</Description>
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
