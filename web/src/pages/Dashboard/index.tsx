import React, { useState } from 'react';
import { isThisMonth, isThisYear } from 'date-fns';

import { useService } from '../../provider/CreatedServicesContext';

import { SideBar } from '../../components/SideBar';
import { EventHistory } from '../../components/EventHistory';
import { Overview } from '../../components/Overview';
import { ActionPlansDetails } from '../../components/ActionPlansDetails';
import { Inspections } from '../../components/Inspections';
import { InspectionsDetails } from '../../components/InspectionsDetails';
import { ActionPlansUpdates } from '../../components/ActionPlansUpdates';

import { Container, DashboardContainer } from './styles';

interface IService {
  id: number;
  user: string;
  service: string;
  state: string;
  created_at: string;
  updated_at: string;
}

export const Dashboard: React.FC = () => {
  const service = useService();
  const [selectedPeriod, setSelectedPeriod] = useState('diario');
  const [actionPlanState, setActionPlanState] = useState('criado');
  const [inspectionsSearch, setInspectionsSearch] = useState('');
  const [actionPlansSearch, setActionPlansSearch] = useState('');
  const [selectDate, setSelectDate] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');


  const inspectionsData = service
    .filter(serviceType => serviceType.service === 'inspecao')
    .filter(serviceUser => serviceUser.user.toUpperCase().includes(inspectionsSearch.toUpperCase()));

  const actionPlansData = service
    .filter(serviceType => serviceType.service === 'planodeacao')
    .filter(day => day.updated_at.includes(selectedDay))
    .filter(serviceUser => serviceUser.user.toUpperCase().includes(actionPlansSearch.toUpperCase()));


  let inspectionsDataShow: IService[] = [];
  let actionPlansDataShow: IService[] = [];

  const today = "2021-02-19 16:00:00"

  switch (selectedPeriod) {
    case 'diario':
      inspectionsDataShow = inspectionsData.filter(dataweek => {
        // return isToday(new Date(dataweek.created_at));

        return dataweek.created_at === today;
      });
      break;
    case 'mensal':
      inspectionsDataShow = inspectionsData.filter(datamonth => {
        return isThisMonth(new Date(datamonth.created_at));
      });
      break;
    case 'anual':
      inspectionsDataShow = inspectionsData.filter(datayear => {
        return isThisYear(new Date(datayear.created_at));
      });
      break;
  }

  switch (actionPlanState) {
    case 'criado':
      actionPlansDataShow = actionPlansData.filter(data => data.service === 'planodeacao');
      break;
    case 'finalizado':
      actionPlansDataShow = actionPlansData.filter(data => data.state === 'finalizado');
      break;
    case 'pendente':
      actionPlansDataShow = actionPlansData.filter(data => data.state === 'pendente');
      break;
  }

  return (
    <Container>
      <SideBar />

      <DashboardContainer>
        <div>
          <h1>Painel de Controle</h1>

          <EventHistory />

          <section>
            <ActionPlansDetails />

            <Inspections />
          </section>

          <InspectionsDetails
            selectedPeriod={selectedPeriod}
            setSelectedPeriod={setSelectedPeriod}
            inspectionsSearch={inspectionsSearch}
            setInspectionsSearch={setInspectionsSearch}
            inspectionsDataShow={inspectionsDataShow}
          />
        </div>

        <div>
          <Overview />

          <ActionPlansUpdates
            selectDate={selectDate}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            setSelectDate={setSelectDate}
            actionPlansSearch={actionPlansSearch}
            setActionPlansSearch={setActionPlansSearch}
            actionPlanState={actionPlanState}
            setActionPlanState={setActionPlanState}
            actionPlansDataShow={actionPlansDataShow}
          />
        </div>
      </DashboardContainer>

    </Container>
  );
}
