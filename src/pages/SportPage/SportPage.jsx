import Container from '../../components/Container';
import PlayList from '../../components/PlayList/PlayList';
import Footer from '../../components/Footer';
import { SportList } from '../../services/SportList';
import PageTitle from '../../components/PageTitle/PageTitle';

const SportPage = () => {
  return (
    <Container>
      <main>
        <section>
          <PageTitle title="Топ ставки на спорт" />
          <PlayList arreyList={SportList} />
          <Footer />
        </section>
      </main>
    </Container>
  );
};

export default SportPage;
