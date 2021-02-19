import React from 'react';

import SideBar from '../../components/SideBar';

const Teste: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar />

      <h1 style={{ fontSize: '50px' }}>Testando</h1>
    </div>
  );
}

export default Teste;
