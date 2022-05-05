import { useSelector } from "react-redux";
import Product from "../Product";
import { Container } from "./styles";

const Vitrine = () => {
  const products = useSelector(({ products }) => products);

  return (
    <Container>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default Vitrine;
