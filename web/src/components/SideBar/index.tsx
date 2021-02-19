import React, { useState } from 'react';
import { TiThMenu, TiChevronLeft, TiNews, TiWorld } from 'react-icons/ti';
import { Link } from 'react-router-dom';

import { Container, Navbar, CloseNav, ButtonOppen } from './styles';

const SideBar: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  function handleShowNavbar() {
    if (!showNav) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }

  return (
    <Container>
      <div>
        {!showNav &&
          <ButtonOppen type="button" onClick={handleShowNavbar}>
            <TiThMenu size={20} />
          </ButtonOppen>
        }
      </div>

      {showNav &&
        <Navbar>
          <ul>
            <Link to="/">
              <li><TiNews size={20} color="#0794B2" /> <p>Painel de Controle</p></li>
            </Link>

            <Link to="/teste">
              <li><TiWorld size={20} color="#0794B2" /> <p>Teste</p></li>
            </Link>
          </ul>

          <CloseNav type="button" onClick={handleShowNavbar}>
            <TiChevronLeft color="#FFF" size={15} />
          </CloseNav>
        </Navbar>
      }
    </Container>
  );
}

export default SideBar;
