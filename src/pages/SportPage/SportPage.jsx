import { useState, useEffect } from 'react';

import { FormattedMessage } from 'react-intl';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Container from '../../components/Container';
import PlayList from '../../components/PlayList/PlayList';
import Footer from '../../components/Footer';

import { sport_ukr } from '../../services/sport_ukr';
import { sport_ru } from '../../services/sport_ru';
import { sport_en } from '../../services/sport_en';

import { Title } from './SportPage.styled';

const SportPage = ({ local }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function listLocale() {
    if (local === 'ukr' || !local) {
      return sport_ukr;
    }
    if (local === 'ru') {
      return sport_ru;
    } else {
      return sport_en;
    }
  }

  useEffect(() => {
    if (local === 'ukr') {
      setTitle('Win To Time! - ТОП онлайн ставки на спорт');
      setDescription(
        'TOП онлайн ставки на спорт. Всі наші партнери 100% безпечні та перевірені часом. Високі коефіцієнти. Найкращі букмекерські контори. Завжди актуальні бонуси та посилання. Завжди готові допомогти вам в нашому телеграм каналі.'
      );
    } else if (local === 'ru') {
      setTitle('Win To Time! - ТОП онлайн ставки на спорт');
      setDescription(
        'ТОП онлайн ставки на спорт. Все наши партнеры 100% безопасны и проверенны временем. Высокие коэффициенты. Лучшие букмекерские конторы. Всегда актуальные бонусы и ссылки. Всегда готовы вам помочь в нашем телеграм канале.'
      );
    } else {
      setTitle('Win To Time! - TOP online sports betting');
      setDescription(
        'TOP online sports betting. All our partners are 100% safe and time-tested. High odds. The best bookmakers. Always up-to-date bonuses and links. Always ready to help you in our telegram channel.'
      );
    }
  }, [local]);

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <main>
          <section>
            <Title>
              <FormattedMessage id="title_sport" defaultMessage="Топ ставки на спорт" />
            </Title>
            <PlayList arreyList={listLocale()} />
          </section>
        </main>
        <Footer />
      </Container>
    </HelmetProvider>
  );
};

export default SportPage;
