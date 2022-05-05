import { useHistory } from "react-router";
import { Container, Button } from "./styles";
// import { Container } from './styles';

function Home() {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };
  return (
    <Container>
      <h2>O que você procura para realçar a sua beleza você encontra aqui!</h2>
      <Button onClick={() => handleNavigation("/shop")}>Entrar</Button>
    </Container>
  );
}

export default Home;
