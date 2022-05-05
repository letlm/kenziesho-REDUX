import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addBagThunk, deleteBagThunk } from "../../store/modules/Bag/thunks";
import { Container } from "./styles";
const Product = ({ product, isDeleted = false }) => {
  const { id, name, price, img } = product;

  const dispatch = useDispatch();

  const addInBag = () => {
    dispatch(addBagThunk(product));

    toast("🛍️ Produto adicionado à sacola", {
      className: "toastify-color-progress-light",
    });
  };

  const deleteInBag = () => {
    dispatch(deleteBagThunk(id));

    toast("✖️ Produto removido da sacola!", {
      className: "toastify-color-progress-light",
    });
  };

  return (
    <Container>
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <span>{name}</span>
      <div>
        <span className="price">
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        {isDeleted ? (
          <button onClick={deleteInBag}>Remover</button>
        ) : (
          <button onClick={addInBag}>Adicionar à sacola</button>
        )}
      </div>
    </Container>
  );
};

export default Product;
