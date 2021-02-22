import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  min-width: 738px;
  min-height: 266px;

  margin: 10px;

  display: flex;
  flex-direction: column;

  background: #FFFFFF;
  border: 0.5px solid #E4E4E4;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  
  label {
    height: 13px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #333333;
    margin: 15px;
  }

  select {
    width: 244px;
    height: 28px;
    margin: 15px;
    margin-left: 30%;
    background: #C4C4C4;
    border-radius: 100px;
    padding-left: 20px;
    border: none;

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

  div {
    margin-bottom: 10px;
  }

  h6 {
    font-weight: 300;
    font-size: 9px;
    line-height: 17px;
    color: #161616;
    margin-left: 10px;

    display: flex;
    flex-direction: row;
  }
`;
