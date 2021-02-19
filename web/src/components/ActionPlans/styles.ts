import styled from 'styled-components';

export const Container = styled.div`
  background: #FFFFFF;
  border: 0.5px solid #E4E4E4;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  min-width: 347px;
  min-height: 269px;
  margin: 10px;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px;

    h3 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #333333;

      display: flex;
      flex-direction: column;

      span {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        color: #B0B0B0;
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;