import React from "react";
import Vitrine from "../../components/Vitrine";
import { useHistory } from "react-router-dom";

import { Container, Header } from "./styles";

function Shop() {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <Header>
        <button onClick={() => handleNavigation("/")}>Início</button>
        <button onClick={() => handleNavigation("/bag")}>
          Sacola de compras
        </button>
      </Header>
      <h2>Novidades!</h2>
      <div>
        <Vitrine />
      </div>
    </Container>
  );
}

export default Shop;
