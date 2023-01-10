import { FormattedMessage } from 'react-intl';

import Container from '../Container';
import { Link, Wrapper } from './Nav.styled';

const Nav = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <span>
            <FormattedMessage id="nav_casino" defaultMessage="Казино" />
          </span>
        </Link>
        <Link to="/sport">
          <span>
            <FormattedMessage id="nav_sport" defaultMessage="Спорт" />
          </span>
        </Link>
        <Link to="/faq">
          <span>
            <FormattedMessage id="nav_faq" defaultMessage="F.A.Q." />
          </span>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Nav;
