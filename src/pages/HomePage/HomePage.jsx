import { FormattedMessage } from 'react-intl';

import Container from '../../components/Container';
import PlayList from '../../components/PlayList';
import Footer from '../../components/Footer';
import { CasinoList_ukr, CasinoList_ru, CasinoList_en } from '../../services/CasinoList';

import { Title } from './HomePage.styled';

const HomePage = ({ local }) => {
  function listLocale() {
    if (local === 'ukr') {
      return CasinoList_ukr;
    }
    if (local === 'ru') {
      return CasinoList_ru;
    } else {
      return CasinoList_en;
    }
  }

  return (
    <Container>
      <main>
        <section>
          <Title>
            <FormattedMessage id="title_casino" />
          </Title>
          <PlayList arreyList={listLocale()} />
        </section>
      </main>
      <Footer />
    </Container>
  );
};

export default HomePage;
