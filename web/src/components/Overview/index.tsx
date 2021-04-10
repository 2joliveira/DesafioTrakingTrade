import React, { useState } from 'react';
import Chart from 'react-google-charts';
import { TiCogOutline } from 'react-icons/ti';

import { useService } from '../../provider/CreatedServicesContext';

import { Container, SelectService } from './styles';

export const Overview: React.FC = () => {
  const context = useService();

  const [selectService, setSelectService] = useState(false);
  const [selectedService, setSelectedService] = useState('planodeacao')

  const serviceData = context.filter(service => service.service === selectedService);

  const dataGrafo = selectedService === 'planodeacao'
    ? [
      ['Status', 'Planos de ação'],
      ['Criados', serviceData.length],
      ['Finalizados', serviceData.filter(plan => plan.state === 'finalizado').length],
      ['Pendentes', serviceData.filter(plan => plan.state === 'pendente').length],
    ]
    : [
      ['Status', 'Inspeção'],
      ['Realizados', serviceData.filter(inspection => inspection.state === 'realizado').length],
      ['Pendentes', serviceData.filter(inspection => inspection.state === 'pendente').length],
      ['Não realizado', serviceData.filter(inspection => inspection.state === 'naorealizado').length],
    ]

  return (
    <Container>
      <header>
        {selectedService === 'planodeacao'
          ? <h3>Planos de ação <span>visão geral</span></h3>
          : <h3>Inspeção <span>visão geral</span></h3>
        }

        <SelectService
          selectService={selectService}
          value={selectedService}
          onChange={e => setSelectedService(e.target.value)}
        >
          <option value="inspecao">Inspeção</option>
          <option value="planodeacao">Plano de ação</option>
        </SelectService>

        <TiCogOutline
          size={30}
          style={{ margin: 10 }}
          onClick={e => setSelectService(!selectService)}
        />
      </header>
      <div>
        <Chart
          chartType="PieChart"
          width="300px"
          height="150px"
          legend_toggle
          data={dataGrafo}
          options={{
            pieHole: 0.8,
            colors: ['#7FC008', '#DB8C28', '#EB5757'],
          }}
        />
      </div>
    </Container>
  );
}
