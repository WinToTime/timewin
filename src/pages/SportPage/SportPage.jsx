import { FormattedMessage } from 'react-intl';

import Container from '../../components/Container';
import PlayList from '../../components/PlayList/PlayList';
import Footer from '../../components/Footer';
import { SportList } from '../../services/SportList';

import { Title } from './SportPage.styled';

const SportPage = () => {
  return (
    <Container>
      <main>
        <section>
          <Title>
            <FormattedMessage id="title_sport" />
          </Title>
          <PlayList arreyList={SportList} />
          <Footer />
        </section>
      </main>
    </Container>
  );
};

export default SportPage;
