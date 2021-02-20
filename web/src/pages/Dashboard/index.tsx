import React, { useState } from 'react';
import { Scrollbars } from 'rc-scrollbars';
import { isThisMonth, isThisYear/*, isToday*/ } from 'date-fns';

import { TiCogOutline } from 'react-icons/ti';

import { useService } from '../../provider/CreatedServicesContext';

import SideBar from '../../components/SideBar';
import EventHistory from '../../components/EventHistory';
import Actionsplan from '../../components/ActionPlans';
import Inspections from '../../components/Inspections';
import ActionPlansDetails from '../../components/ActionPlansDetails';

import {
  Container,
  DashboardContainer,
  DashboardMain,
  Grafos,
  DashboardActionPlans,
  Th,
  ActionsplanUpdates,
  Input,
  InspectionsDetails,
} from './styles';

interface IService {
  id: number;
  user: string;
  service: string;
  state: string;
  created_at: string;
  updated_at: string;
}

const Dashboard: React.FC = () => {
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
      <div>
        <h1>Painel de controle</h1>
        <DashboardContainer>
          <DashboardMain>
            <EventHistory />

            <Grafos>
              <Inspections />
              <ActionPlansDetails />
            </Grafos>

            <InspectionsDetails>
              <header>
                <h3>Inspeções agendadas</h3>

                <select value={selectedPeriod} id="inspections" onChange={e => setSelectedPeriod(e.target.value)}>
                  <option value="diario">diário</option>
                  <option value="mensal">mensal</option>
                  <option value="anual">anual</option>
                </select>
              </header>

              <input
                type="text"
                placeholder="Pesquise"
                value={inspectionsSearch}
                onChange={e => setInspectionsSearch(e.target.value)}
              />

              <Scrollbars style={{ margin: '20px' }}>
                <table>
                  <thead>
                    <tr>
                      <th>NOME</th>
                      <th>CRIADO</th>
                      <th>STATUS</th>
                      <th>ULTIMA ATUALIZAÇÃO</th>
                    </tr>
                  </thead>

                  <tbody>
                    {inspectionsDataShow.map(data => {
                      return (
                        <tr key={data.id}>
                          <td>{data.user}</td>
                          <td>{data.created_at}</td>
                          <td>{data.state}</td>
                          <td>{data.updated_at}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Scrollbars>
            </InspectionsDetails>
          </DashboardMain>

          <DashboardActionPlans>
            <Actionsplan />

            <ActionsplanUpdates>
              <header>
                <h3>Planos de ação <span>atualizações</span></h3>

                <Input
                  type="date"
                  selectDate={selectDate}
                  value={selectedDay}
                  onChange={e => setSelectedDay(e.target.value)}
                />

                <TiCogOutline
                  size={30}
                  style={{ margin: 10 }}
                  onClick={e => setSelectDate(!selectDate)}
                />
              </header>

              <input
                type="text"
                placeholder="Pesquise pelo nome do cliente"
                value={actionPlansSearch}
                onChange={e => setActionPlansSearch(e.target.value)}
              />

              <select value={actionPlanState} id="status" onChange={e => setActionPlanState(e.target.value)}>
                <option value="criado">Criado</option>
                <option value="finalizado">Finalizado</option>
                <option value="pendente">Pendente</option>
              </select>

              <Scrollbars style={{ height: '470px' }}>
                <section>
                  {actionPlansDataShow.map(actionplan => {
                    return (
                      <table key={actionplan.id}>
                        <thead>
                          <tr>
                            <Th>{actionplan.service}</Th>
                            <Th statusColor={actionplan.state}>{actionplan.state.toUpperCase()}</Th>
                          </tr>
                          <tr>
                            <td>responsável: {actionplan.user}</td>
                            <td>{actionplan.updated_at}</td>
                          </tr>
                        </thead>
                      </table>
                    );
                  })}
                </section>
              </Scrollbars>
            </ActionsplanUpdates>
          </DashboardActionPlans>
        </DashboardContainer>
      </div>
    </Container>
  );
}

export default Dashboard;
