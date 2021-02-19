import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Teste from './pages/Teste';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={Dashboard} path='/' exact />
      <Route component={Teste} path='/teste' />
    </BrowserRouter>
  );
}

export default Routes;
