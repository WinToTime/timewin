import { FormattedMessage } from 'react-intl';

import Container from '../Container';
import { Link, Wrapper } from './Nav.styled';

const Nav = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <FormattedMessage id="nav_casino" />
        </Link>
        <Link to="/sport">
          <FormattedMessage id="nav_sport" />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Nav;
