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
          <Logo src={logo} alt={title} loading="lazy" width="300" height="150" />
        </LogoWrapper>
        <Rating rat={rating} />
        <Description>{description}</Description>
        <FeatureList>
          <Feature featureArray={feature} />
        </FeatureList>
      </Wrapper>
      <Link
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label={<FormattedMessage id="link_bonus" defaultMessage="Забрати бонус" />}
      >
        <FormattedMessage id="link_bonus" defaultMessage="Забрати бонус" />
      </Link>
    </Card>
  );
};

export default PlayItemTop;
