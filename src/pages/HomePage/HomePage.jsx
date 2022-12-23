// import { useState, useEffect } from 'react';
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore/lite';

import Container from '../../components/Container';
import PlayList from '../../components/PlayList';
import Footer from '../../components/Footer';
import { CasinoList } from '../../services/CasinoList';
import PageTitle from '../../components/PageTitle';

// import { getCasino } from '../../services/casino';

// const firebaseConfig = {
//   apiKey: 'AIzaSyD0MwGPJ5T68_oY70bVgmAR4WBbTIZYOuY',
//   authDomain: 'wintotime-578bd.firebaseapp.com',
//   projectId: 'wintotime-578bd',
//   storageBucket: 'wintotime-578bd.appspot.com',
//   messagingSenderId: '59057255343',
//   appId: '1:59057255343:web:bac4c19b0ef1070c95f55a',
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

const HomePage = () => {
  // const [casinoList, setCasinoList] = useState([]);

  // useEffect(() => {
  //   try {
  //     getCasino(db).then(casino => setCasinoList(casino));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return (
    <Container>
      <main>
        <section>
          <PageTitle title="Топ онлайн казино в 2022 году" />
          <PlayList arreyList={CasinoList} />
        </section>
      </main>
      <Footer />
    </Container>
  );
};

export default HomePage;
