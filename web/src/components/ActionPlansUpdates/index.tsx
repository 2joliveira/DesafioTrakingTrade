import Scrollbars from 'rc-scrollbars';

import { TiCogOutline } from 'react-icons/ti';

import { Container, Input, Th } from './styles';

interface IService {
  id: number;
  user: string;
  service: string;
  state: string;
  created_at: string;
  updated_at: string;
}

interface ActionPlansUpdatesProps {
  selectDate: boolean;
  setSelectDate: Function;
  selectedDay: string;
  setSelectedDay: Function;
  actionPlansSearch: string;
  setActionPlansSearch: Function;
  actionPlanState: string;
  setActionPlanState: Function;
  actionPlansDataShow: IService[];
}

export function ActionPlansUpdates({
  selectDate,
  selectedDay,
  setSelectedDay,
  setSelectDate,
  actionPlansSearch,
  setActionPlansSearch,
  actionPlanState,
  setActionPlanState,
  actionPlansDataShow,
}: ActionPlansUpdatesProps) {
  return (
    <Container>
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

      <Scrollbars style={{ width: '300px', height: '470px' }}>
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
      </Scrollbars>
    </Container>
  );
}