import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import ErrorPage from '../pages/error-page';
import MainPage from '../pages/main';

const AppRoutes = () => {
  const ROUTES_PATH = [
    {
      path: '/',
      page: <MainPage/>
    }
  ];

  return (
    <BrowserRouter>
      <Routes>
        {ROUTES_PATH.map((route, key) => (
          <Route
            key={key}
            path={route.path}
            element={route.page}
          />
        ))}

        <Route
          path='*'
          element={<ErrorPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
