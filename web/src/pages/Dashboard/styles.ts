import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IPropsContainer {
  statusColor?: string;
}

export const Container = styled.main`
  display: flex;

  div {
    h1 {
      font-weight: 500;
      font-size: 25px;
      line-height: 26px;
      color: #333333;
      margin: 20px;
    }
  }
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DashboardMain = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  justify-content: center;
`;

export const Grafos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DashboardActionPlans = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActionsplanUpdates = styled.div`
  width: 347px;
  height: 670px;

  margin: 10px;

  background: #FFFFFF;
  border: 0.5px solid #E4E4E4;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;

    h3 {
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #333333;

      display: flex;
      flex-direction: column;

      span  {
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;  
        color: #B0B0B0;
      }
    }
  }

  select {
    width: 90%;
    height: 34px;
    background: #C4C4C4;
    border-radius: 100px;
    padding-left: 20px;
    margin: 5px 15px;

    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #333333;
    border: none;

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &:hover{
      background-color: ${shade(0.2, '#C4C4C4')};
    }
  }

  input {
    width: 90%;
    height: 34px;
    margin: 15px;
    background: #FAFAFA;
    border: 1px solid #EBEBEB;
    box-sizing: border-box;
    border-radius: 100px;
  }

  table {
    border-bottom: 1px solid #EBEBEB;
    padding: 10px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 10px;

    td {
      font-size: 12px;
      line-height: 18px;
      text-align: right;
      color: #BDBDBD;

      &:first-child {
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        color: #B0B0B0;
        text-align: left;

        padding-right: 70px;
      }
    }
  }
`;

export const Th = styled.th<IPropsContainer>`
  text-align: center;
  font-weight: 600;
  font-size: 8px;
  line-height: 21px;
  
  ${(props) =>
    props.statusColor === 'finalizado' &&
    css`
      color: #7FC008;
      border: 2px solid #7FC008;
    `
  }

  ${(props) =>
    props.statusColor === 'pendente' &&
    css`
      color: #EB5757;
      border: 2px solid #EB5757;
    `
  }
  
  box-sizing: border-box;
  border-radius: 100px;

  &:first-child {
    font-weight: 500;
    font-size: 12px;
    line-height: 25px;
    color: #333333;
    border: none;

    text-align: left;
  }
`;

export const InspectionsDetails = styled.div`
  width: 738px;
  height: 328px;

  margin: 10px;

  background: #FFFFFF;
  border: 0.5px solid #E4E4E4;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    width: 90%;
    margin: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #333333;
    }

    select {
      width: 244px;
      height: 28px;
      background: #C4C4C4;
      border-radius: 100px;
      padding-left: 20px;
      border: none;

      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #333333;

      &:focus {
        outline: none;
        box-shadow: none;
      }

      &:hover {
        background-color: ${shade(0.2, '#C4C4C4')};
      }
    }
  }

  input {
    width: 90%;
    height: 34px;
    background: #FAFAFA;
    border: 1px solid #EBEBEB;
    box-sizing: border-box;
    border-radius: 100px;
    padding-left: 20px;

    font-weight: 500;
    font-size: 12px;
    line-height: 25px;
    color: #999999;

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &:hover {
      background-color: ${shade(0.2, '#FAFAFA')};
    }
  }

  table {
    width: 90%;

    tr {
      th {
        font-weight: 600;
        font-size: 8px;
        line-height: 21px;
        color: #333333;

        &:first-child {
          text-align: left;
          padding-left: 10px;
        }
      }

      td {
        font-weight: normal;
        font-size: 10px;
        line-height: 21px;
        color: #333333;
        text-align: center;
        border-bottom: 0.5px solid #EBEBEB; 
      }
      
      td:first-child {
        text-align: left;
        font-weight: 500;
        font-size: 12px;
        line-height: 21px;
        padding-left: 10px;
      }
    }
  }
`;