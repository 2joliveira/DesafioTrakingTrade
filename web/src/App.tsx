import React from 'react';
import { ServiceProvider } from './provider/CreatedServicesContext';

import './App.css';

import Routes from './routes';

function App() {
  return (
    <ServiceProvider>
      <Routes />
    </ServiceProvider>
  );
}

export default App;
