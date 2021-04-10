import Scrollbars from 'rc-scrollbars';

import { Container } from './styles';

interface IService {
  id: number;
  user: string;
  service: string;
  state: string;
  created_at: string;
  updated_at: string;
}

interface InspectionsDetailsProps {
  selectedPeriod: string;
  setSelectedPeriod: Function,
  inspectionsSearch: string;
  setInspectionsSearch: Function;
  inspectionsDataShow: IService[];
}

export function InspectionsDetails(
  { selectedPeriod,
    setSelectedPeriod,
    inspectionsSearch,
    setInspectionsSearch,
    inspectionsDataShow
  }: InspectionsDetailsProps
) {
  return (
    <Container>
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

      <Scrollbars>
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
    </Container>
  );
}