import React from 'react';
import Chart from 'react-google-charts';
import { TiCogOutline } from 'react-icons/ti';

import { useService } from '../../provider/CreatedServicesContext';

import { Container } from './styles';

const ActionPlans: React.FC = () => {
  const context = useService();

  const actionPlans = context.filter(plan => {
    return plan.service === 'planodeacao';
  });

  return (
    <Container>
      <header>
        <h3>Planos de ação <span>visão geral</span></h3>

        <TiCogOutline size={30} style={{ margin: 10 }} />
      </header>
      <div>
        <Chart
          chartType="PieChart"
          width="300px"
          height="150px"
          legend_toggle
          data={[
            ['Status', 'Planos de ação'],
            ['Criados', actionPlans.length],
            ['Finalizados', actionPlans.filter(plan => plan.state === 'finalizado').length],
            ['Pendentes', actionPlans.filter(plan => plan.state === 'pendente').length],
          ]}
          options={{
            pieHole: 0.8,
            colors: ['#7FC008', '#DB8C28', '#EB5757'],
          }}
        />
      </div>
    </Container>
  );
}

export default ActionPlans;
