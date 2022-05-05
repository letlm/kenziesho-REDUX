import { useSelector, useDispatch } from "react-redux";
import Product from "../Product";
import { finishBagThunk } from "../../store/modules/Bag/thunks";
import { toast } from "react-toastify";
import { Container, Context, BagEmpty, Testando } from "./styles";
import Bags from "../../components/imgs/bags.png";

const BagShop = () => {
  const dispatch = useDispatch();

  const bagProduct = useSelector(({ bag }) => bag);

  const finish = () => {
    dispatch(finishBagThunk(bagProduct));

    toast("✨ Pedido finalizado!", {
      className: "toastify-color-progress-light",
    });
  };

  return (
    <Container>
      <Context>
        <h2>Sacola de compras</h2>
      </Context>
      {bagProduct.length === 0 ? (
        <BagEmpty>
          <span className="bagEmpty">Ops, sacola vazia 😔</span>
          <span className="subTitle">
            Volte à vitrine para adicionar produtos incríveis!
          </span>
          <img
            src={Bags}
            alt="Duas sacolas de compras sendo seguradas por um contorno de braço"
          />
        </BagEmpty>
      ) : (
        <Testando>
          <div className="productsBag">
            {bagProduct.map((product) => (
              <Product key={product.id} product={product} isDeleted></Product>
            ))}
          </div>
          <div className="items">
            <span>Total de itens: {bagProduct.length}</span>
            <span>
              Total:
              {bagProduct
                .reduce((acc, value) => {
                  acc += value.price;
                  return acc;
                }, 0)
                .toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
            </span>
            <button onClick={finish}>Finalizar pedido!</button>
          </div>
        </Testando>
      )}
    </Container>
  );
};

export default BagShop;
