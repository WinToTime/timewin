import { FormattedMessage } from 'react-intl';

import Container from '../../components/Container';
import PlayList from '../../components/PlayList';
import Footer from '../../components/Footer';
import { CasinoList } from '../../services/CasinoList';

import { Title } from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <main>
        <section>
          <Title>
            <FormattedMessage id="title_casino" />
          </Title>
          <PlayList arreyList={CasinoList} />
        </section>
      </main>
      <Footer />
    </Container>
  );
};

export default HomePage;
