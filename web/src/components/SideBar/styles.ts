import styled from 'styled-components';

export const Container = styled.div`
  width: 4rem;

  background: linear-gradient(180deg, #0DB2D6 8.12%, #4FDA91 71.62%);
`;

export const ButtonOppen = styled.button`
  background: #FFFFFF;
  border: none;

  width: 45px;
  height: 45px;
  border-radius: 50px;
  margin: 20px 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CloseNav = styled.button`
  width: 15px;
  height: 15px;
  border: none;
  border-radius: 50%;

  position: absolute;
  left: 230px;
  top: 40px; 

  display: flex;
  align-items: center;
  justify-content: center;

  background: #0794B3;

  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;


export const Navbar = styled.div`
  min-width: 235px;
  height: 1088px;
  background: #FAFAFA;

  border: 1px solid #edea;

  position: absolute;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;

    margin: 20px;

    a {
      text-decoration: none;
    }

    li {
      display: flex;
      align-items: center;

      p {
        font-size: 15px;
        line-height: 26px;
        padding-left: 10px;
        color: #0794B2;

        &:hover {
          font-weight: 600;
        }
      }
    }
  }
`;