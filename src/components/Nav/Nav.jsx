import Container from '../Container';
import { Link, Wrapper } from './Nav.styled';

const Nav = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/">Казино</Link>
        <Link to="/sport">Спорт</Link>
      </Wrapper>
    </Container>
  );
};

export default Nav;
