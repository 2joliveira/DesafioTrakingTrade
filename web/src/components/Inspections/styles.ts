import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface InputProp {
  selectDay: boolean;
}

export const Container = styled.div`
  width: 350px;
  height: 328px;

  margin: 10px;

  background: #FFFFFF;
  border: 0.5px solid #E4E4E4;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    padding: 0 10px;

    h3 {
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

    svg {
      &:hover {
        color: #3333;
      }
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin: 20px;

    h4 {
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 15px;
      color: #B0B0B0;
    }

    table {
      font-style: normal;
      font-weight: 300;
      font-size: 9px;
      line-height: 17px;
      color: #161616;
      width: 120px;

      tr {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
`;

export const Input = styled.input<InputProp>`
  display: none;

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

  ${(prop) =>
    !!prop.selectDay &&
    css`
      display: flex;
    `
  }
`;
