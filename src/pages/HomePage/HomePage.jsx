// import Header from '../../components/Header';
import Container from '../../components/Container';
import PlayList from '../../components/PlayList/PlayList';
import Footer from '../../components/Footer';
import { GameList } from '../../services/GameList';
import { PageTitle } from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      {/* <Header /> */}
      <Container>
        <PageTitle>Топ онлайн казино в 2022 году</PageTitle>
        <PlayList arreyList={GameList} />
        <Footer />
      </Container>
    </>
  );
};

export default HomePage;
