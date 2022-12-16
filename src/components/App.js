import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import HomePage from '../pages/HomePage';
import SportPage from '../pages/SportPage';
import NotFoundPage from '../pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="sport" element={<SportPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
