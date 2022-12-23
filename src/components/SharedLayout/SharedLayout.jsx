import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Nav from '../Nav';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Nav />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
