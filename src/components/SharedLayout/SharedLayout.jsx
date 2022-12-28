import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Nav from '../Nav';
import LangSelect from '../LangSelect';

const SharedLayout = ({ currentLocale, handleChange }) => {
  return (
    <>
      <Header />
      <LangSelect currentLocale={currentLocale} handleChange={handleChange} />
      <Nav />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
