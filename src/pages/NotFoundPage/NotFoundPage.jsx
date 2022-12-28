import { FormattedMessage } from 'react-intl';

import Container from '../../components/Container';
import Footer from '../../components/Footer';

import { Title } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <Container>
      <main>
        <section>
          <Title>
            <FormattedMessage id="page_not_found" defaultMessage="Сторінку не знайдено" />
          </Title>
        </section>
      </main>
      <Footer />
    </Container>
  );
};

export default NotFoundPage;
