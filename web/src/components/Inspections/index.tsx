import React from 'react';
import Chart from 'react-google-charts';
import { TiCogOutline } from 'react-icons/ti';
import { isToday } from 'date-fns';

import { useService } from '../../provider/CreatedServicesContext';

import { Container } from './styles';

const Inspections: React.FC = () => {
  const service = useService();

  const today = "2021-02-19 16:00:00"

  const data = service
    // .filter(day => isToday(new Date(day.created_at)))
    .filter(day => day.created_at === today)
    .filter(day => day.service === 'inspecao');

  console.log(data);

  return (
    <Container>
      <header>
        <h3>Inspeções<span>Status do dia</span></h3>
        <TiCogOutline size={30} style={{ margin: 10 }} />
      </header>

      <div>
        <Chart
          chartType="PieChart"
          width="300px"
          height="150px"
          data={[
            ['Status', 'Inspeções'],
            ['Realizadas', data.filter(day => day.state === 'realizado').length],
            ['Em aberto', data.filter(day => day.state === 'pendente').length],
            ['Não Realizados', data.filter(day => day.state === 'naorealizado').length],
          ]}
          options={{
            pieHole: 0.8,
            colors: ['#7FC008', '#DB8C28', '#EB5757'],
          }}
        />
      </div>
      <footer>
        <h4>Média de tempo</h4>

        <table>
          <tr>
            <td>Hoje</td>
            <td>10 min</td>
          </tr>
          <tr>
            <td>Ultímos 7 dias</td>
            <td>10 min</td>
          </tr>
          <tr>
            <td>Ultímos 30 dias</td>
            <td>10 min</td>
          </tr>
        </table>

      </footer>
    </Container>
  );
}

export default Inspections;
