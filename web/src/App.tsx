import React from 'react';
import { ServiceProvider } from './provider/CreatedServicesContext';

import { GlobalStyle } from './styles/global';

import Routes from './routes';

function App() {
  return (
    <ServiceProvider>
      <Routes />

      <GlobalStyle />
    </ServiceProvider>
  );
}

export default App;
