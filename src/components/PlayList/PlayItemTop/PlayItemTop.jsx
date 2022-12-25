import { FormattedMessage } from 'react-intl';

import Rating from '../Rating';
import {
  Card,
  Wrapper,
  LogoWrapper,
  Logo,
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
        <LogoWrapper>
          <Logo src={logo} alt={title} width="300" height="150" />
        </LogoWrapper>
        <Rating rat={rating} />
        <Description>{description}</Description>
        <FeatureList>
          <Feature featureArray={feature} />
        </FeatureList>
      </Wrapper>
      <Link href={link} target="_blank" rel="noreferrer">
        <FormattedMessage id="link_bonus" />
      </Link>
    </Card>
  );
};

export default PlayItemTop;
