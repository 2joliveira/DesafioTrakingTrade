import React, { useState } from 'react';
import { TiCogOutline, TiMediaRecordOutline } from 'react-icons/ti';
import Chart from 'react-google-charts';
import { isThisMonth, isThisYear, isToday } from 'date-fns';

import { useService } from '../../provider/CreatedServicesContext';

import { Container } from './styles';

interface IService {
  id: number;
  user: string;
  service: string;
  state: string;
  created_at: string;
  updated_at: string;
}

const EventHistory: React.FC = () => {
  const services = useService();
  const [selectedPeriod, setSelectedPeriod] = useState('diario');

  let data: IService[] = [];

  switch (selectedPeriod) {
    case 'diario':
      data = services.filter(dataweek => {
        return isToday(new Date(dataweek.created_at));
      });
      break;
    case 'mensal':
      data = services.filter(datamonth => {
        return isThisMonth(new Date(datamonth.created_at));
      });
      break;
    case 'anual':
      data = services.filter(datayear => {
        return isThisYear(new Date(datayear.created_at));
      });
      break;
  }

  const inspections = data.filter(service => {
    return service.service === 'inspecao';
  });

  const actionplans = data.filter(service => {
    return service.service === 'planodeacao';
  });

  return (
    <Container>
      <header>
        <label>Histórico de eventos</label>

        <select value={selectedPeriod} id="events" onChange={e => setSelectedPeriod(e.target.value)}>
          <option value="diario">diário</option>
          <option value="mensal">mensal</option>
          <option value="anual">anual</option>
        </select>

        <TiCogOutline size={30} style={{ margin: 10 }} />
      </header>

      <div>
        <Chart
          width={600}
          height={155}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Serviço', 'Inspeções', 'Planos de ação'],
            ['', inspections.length, actionplans.length],
          ]}
        />
      </div>

      <h6>
        <TiMediaRecordOutline color="#4B9EEA" size={15} />
        Inspeções realizadas
      </h6>

      <h6>
        <TiMediaRecordOutline color="#C00808" size={15} />
        Planos de ação criados
      </h6>

    </Container>
  );
}

export default EventHistory;
