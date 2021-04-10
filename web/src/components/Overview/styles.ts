import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface DivProps {
  selectService: boolean;
}

export const Container = styled.div`
  background: #FFFFFF;
  border: 0.5px solid #E4E4E4;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  width: 350px;
  height: 269px;
  margin: 10px;

  margin-top: 35px;

  @media (max-width: 1176px) {
    margin-top: 0;
  }

  header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #333333;

      display: flex;
      flex-direction: column;

      margin-left: 10px;

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
        color: ${shade(0.2, '#3333')}
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SelectService = styled.select<DivProps>`
  border: none;
  background: #c4c4c4;
  height: 30px;
  width: 120px;
  border-radius: 50px;

  padding-left: 5px;
  font-weight: 600;
  font-size: 12px;
  line-height: 21px;
  color: #333333;

  display: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:hover {
    background-color: ${shade(0.2, '#C4C4C4')};
  }

  ${(props) =>
    !!props.selectService &&
    css`
      display: flex;
    `
  }
`;