import styled from 'styled-components';

export const Container = styled.main`
  flex: 1;
  display: flex;

  position: relative;

  @media (max-width: 550px) {
    flex-direction: column;

    button {
      display: none;
    }
  }
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

  justify-content: space-between;
  margin: 0 7rem;

  @media (max-width: 1295px) {
    margin: 0;
  } 

  @media (max-width: 1177px) {
    flex-direction: column;
    justify-content: center;
  }

  div { 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 740px) {
      flex-direction: column;
    }
  }
`;
