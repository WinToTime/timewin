import { FormattedMessage } from 'react-intl';

import Container from '../../components/Container';
import PlayList from '../../components/PlayList/PlayList';
import Footer from '../../components/Footer';
import { SportList_ukr, SportList_ru, SportList_en } from '../../services/SportList';

import { Title } from './SportPage.styled';

const SportPage = ({ local }) => {
  function listLocale() {
    if (local === 'ukr') {
      return SportList_ukr;
    }
    if (local === 'ru') {
      return SportList_ru;
    } else {
      return SportList_en;
    }
  }
  return (
    <Container>
      <main>
        <section>
          <Title>
            <FormattedMessage id="title_sport" />
          </Title>
          <PlayList arreyList={listLocale()} />
          <Footer />
        </section>
      </main>
    </Container>
  );
};

export default SportPage;
