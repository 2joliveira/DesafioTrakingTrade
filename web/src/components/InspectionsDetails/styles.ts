import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.main`
  width: 45rem;
  height: 328px;

  background: #FFFFFF;
  border: 0.5px solid #E4E4E4;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  @media (max-width: 740px) {
    width: 500px;
  }

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

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &:hover {
      background-color: ${shade(0.1, '#FAFAFA')};
    }
  }

  table {
    width: 90%;
    height: 200px;
    margin-top: 20px;

    overflow-y: scroll;

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