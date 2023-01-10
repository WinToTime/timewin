import { useState, useEffect } from 'react';

import { FormattedMessage } from 'react-intl';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Container from '../../components/Container';
import PlayList from '../../components/PlayList';
import Footer from '../../components/Footer';

import { casino_ukr } from '../../services/casino_ukr';
import { casino_ru } from '../../services/casino_ru';
import { casino_en } from '../../services/casino_en';

import { Title, Text } from './HomePage.styled';

const HomePage = ({ local }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function listLocale() {
    if (local === 'ukr' || !local) {
      return casino_ukr;
    }
    if (local === 'ru') {
      return casino_ru;
    } else {
      return casino_en;
    }
  }

  useEffect(() => {
    if (local === 'ukr') {
      setTitle('TOП онлайн казино - Win To Time!');
      setDescription(
        'ТОП онлайн-казино. TOП онлайн ставки на спорт. Грай тільки в ліцензованих казино. Всі наші казино та ставки на спорт 100% безпечні та перевірені часом. При реєстрації ви отримаєте найтоповіші бонуси. Найкращі кешбеки до 10%. Завжди актуальні посилання. Швидкі виплати. Завжди готові допомогти вам в нашому телеграм каналі.'
      );
    } else if (local === 'ru') {
      setTitle('TOП онлайн казино - Win To Time!');
      setDescription(
        'ТОП онлайн казино. ТОП онлайн ставки на спорт. Играй только в лицензированных казино. Все наши казино и ставки на спорт 100% безопасны и проверенны временем.При регестрации вы получите самые топовые бонусы. Лучшие кешбеки до 10%. Всегда актуальные ссылки. Быстрые выплати. Всегда готовы вам помочь в нашем телеграм канале.'
      );
    } else {
      setTitle('TOP online casino - Win To Time!');
      setDescription(
        'TOP online casino. TOP online sports betting. Play only at licensed casinos. All our casinos and sports betting are 100% safe and time-tested. Upon registration, you will receive the top bonuses. The best cashbacks up to 10%. Always up to date links. Fast payouts. Always ready to help you in our telegram channel.'
      );
    }
  }, [local]);

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href="https://wintotime.com" />
        </Helmet>
        <main>
          <section>
            <Title>
              <FormattedMessage id="title_casino" defaultMessage="Топ онлайн казино у 2023 році" />
            </Title>
            <PlayList arreyList={listLocale()} />
            <Text>
              <FormattedMessage
                id="description_casino"
                defaultMessage="ТОП онлайн-казино. ТОП онлайн ставки на спорт. Грай тільки в ліцензованих казино. Всі наші казино та ставки на спорт 100% безпечні та перевірені часом. При реєстрації ви отримаєте топові бонуси. Найкращі кешбеки до 10%. Завжди актуальні посилання. Швидкі виплати. Завжди готові допомогти вам в нашому телеграм каналі. Всі наші казино на перший депозит від 100% + FS. При реєстрації додатково за нашим промкодом ви отримаєте додатковий бонус."
              />
            </Text>
          </section>
        </main>
        <Footer />
      </Container>
    </HelmetProvider>
  );
};

export default HomePage;
