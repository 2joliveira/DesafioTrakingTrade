import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IPropsContainer {
  statusColor?: string;
}

interface InputProp {
  selectDate: boolean;
}

export const Container = styled.div`
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
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px;

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

    svg {
      &:hover {
        color: #3333;
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
    padding-left: 20px;

    &:focus {
      outline: none;
      box-shadow: none;
    }
    
    &:hover {
      background-color: ${shade(0.1, '#FAFAFA')};
    }
  }

    margin: 5px;

    display: flex;
    flex-direction: column;

    table {
      td {
        width: 250px;
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
        }
      }
    }
`;


export const Input = styled.input<InputProp>`
  display: none;
  border: none;

  &:focus {
    border: none;
  }

  ${(prop) =>
    prop.selectDate &&
    css`
      display: flex;
    `
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
