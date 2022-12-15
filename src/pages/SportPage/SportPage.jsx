import Header from '../../components/Header';
import Container from '../../components/Container';
import PlayList from '../../components/PlayList/PlayList';
import Footer from '../../components/Footer';
import { SportList } from '../../services/SportList';
import { PageTitle } from './SportPage.styled';

const SportPage = () => {
  return (
    <>
      <Header />
      <Container>
        <PageTitle>Ставки на спорт</PageTitle>
        <PlayList arreyList={SportList} />
        <Footer />
      </Container>
    </>
  );
};

export default SportPage;
