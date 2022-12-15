import {
  Card,
  Wrapper,
  Logo,
  Title,
  Rating,
  Description,
  Link,
  FeatureList,
} from './PlayItemTop.styled';
import Feature from '../Feature';

const PlayItemTop = ({ playItemTop }) => {
  const { id, logo, title, rating, description, feature, link } = playItemTop;
  return (
    <Card key={id}>
      <Wrapper>
        <Logo src={logo} alt={title} />
        <Title>{title}</Title>
        <Rating>{rating}/5</Rating>
        <Description>{description}</Description>
        <FeatureList>
          <Feature featureArray={feature} />
        </FeatureList>
      </Wrapper>
      <Link href={link} target="_blank" rel="noreferrer">
        Забрать бонус
      </Link>
    </Card>
  );
};

export default PlayItemTop;
