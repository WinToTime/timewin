import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LOCALES } from '../../i18n/locales';
import Header from '../Header';
import Nav from '../Nav';

import Select from 'react-select';

import { LangWrapper } from './SharedLayout.styled';

const SharedLayout = ({ currentLocale, handleChange }) => {
  const languages = [
    { label: 'English', value: LOCALES.ENGLISH },
    { label: 'Руский', value: LOCALES.RUSSIAN },
    { label: 'Українська', value: LOCALES.UKRAINIAN },
  ];

  const colorStyles = {
    control: styles => ({
      ...styles,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid #ff7c0a',
      boxShadow: '0px 2px 8px #ff7c0a',
      backdropFilter: 'blur(11.25px)',
      borderRadius: '10px',
      cursor: 'pointer',
    }),
    option: (styles, { isSelected }) => ({
      ...styles,
      color: isSelected ? '#ff7c0a' : '#000000',
      backgroundColor: 'transparent',
      cursor: 'pointer',
    }),
    singleValue: styles => ({ ...styles, color: '#c2c2c2' }),
  };

  return (
    <>
      <Header />
      <LangWrapper>
        <Select
          defaultValue={languages.find(option => option.value === currentLocale)}
          name="lang"
          options={languages}
          onChange={handleChange}
          styles={colorStyles}
        />
      </LangWrapper>
      <Nav />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
