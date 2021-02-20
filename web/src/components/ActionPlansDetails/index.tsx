import React, { useState } from 'react';
import Chart from 'react-google-charts';
import { TiCogOutline } from 'react-icons/ti';
// import { isToday } from 'date-fns';

import { useService } from '../../provider/CreatedServicesContext';

import { Container, Input } from './styles';

const ActionPlansDetails: React.FC = () => {
  const service = useService();
  const [inputselectDate, setInputSelectDate] = useState(false);

  const today = "2021-02-19";
  const [selectedDay, setSelectedDay] = useState(today); //new Date()

  const data = service
    // .filter(day => isToday(new Date(day.created_at)))
    .filter(day => day.created_at === selectedDay + " 16:00:00")
    .filter(dataweek => dataweek.service === 'planodeacao');

  return (
    <Container>
      <header>
        <h3>Planos de ação<span>Status do dia</span></h3>

        <Input
          type="date"
          selectDay={inputselectDate}
          value={selectedDay}
          onChange={e => setSelectedDay(e.target.value)}
        />

        <TiCogOutline
          size={30}
          style={{ margin: 10 }}
          onClick={e => setInputSelectDate(!inputselectDate)}
        />
      </header>

      <div>
        <Chart
          chartType="PieChart"
          width="300px"
          height="150px"
          data={[
            ['Status', 'Plano de ação'],
            ['Criados', data.length],
            ['Finalizados', data.filter(day => day.state === 'finalizado').length],
            ['Pendentes', data.filter(day => day.state === 'pendente').length],
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
          <tbody>
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
          </tbody>
        </table>

      </footer>
    </Container>

  );
}

export default ActionPlansDetails;
