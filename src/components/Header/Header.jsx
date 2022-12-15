import { HeaderBg } from './Header.styled';
import Logo from '../Logo';
import Nav from '../Nav';

const Header = () => {
  return (
    <HeaderBg>
      <Nav />
      <Logo />
    </HeaderBg>
  );
};
export default Header;
