import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import SharedLayout from './SharedLayout';
import HomePage from '../pages/HomePage';
import SportPage from '../pages/SportPage';
import NotFoundPage from '../pages/NotFoundPage';

import { LOCALES } from '../i18n/locales';
import { messages } from '../i18n/messages';

function App() {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocale());

  function getInitialLocale() {
    const savedLocale = JSON.parse(localStorage.getItem('locale'));
    return savedLocale || LOCALES.UKRAINIAN;
  }

  const handleChange = selectedOption => {
    setCurrentLocale(selectedOption.value);
    localStorage.setItem('locale', JSON.stringify(selectedOption.value));
  };

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.UKRAINIAN}
    >
      <Routes>
        <Route
          path="/"
          element={<SharedLayout currentLocale={currentLocale} handleChange={handleChange} />}
        >
          <Route index element={<HomePage />} />
          <Route path="sport" element={<SportPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </IntlProvider>
  );
}

export default App;
