import { useHistory } from "react-router-dom";
import BagShop from "../../components/BagShop";

import { Container, Header } from "./styles";

function Bag() {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };
  return (
    <Container>
      <Header>
        <button onClick={() => handleNavigation("/shop")}>Voltar</button>
      </Header>
      <div>
        <BagShop />
      </div>
    </Container>
  );
}

export default Bag;
