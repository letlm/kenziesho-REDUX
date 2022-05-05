import { v1 } from "uuid";
import { ADD_PRODUCT, DELETE_PRODUCT, FINISH_BAG } from "./actionTypes";

const exit = [];

const bagReducer = (
  state = JSON.parse(localStorage.getItem("@Bag")) || [],
  action
) => {
  const reducerId = () => {
    const { product } = action;

    if (state.includes(product)) {
      const { name, img, price } = product;
      const newProduct = {
        id: v1(),
        name: name,
        img: img,
        price: price,
      };

      return [...state, newProduct];
    } else {
      return [...state, product];
    }
  };

  switch (action.type) {
    case ADD_PRODUCT:
      return reducerId();

    case DELETE_PRODUCT:
      const { productsList } = action;
      return productsList;

    case FINISH_BAG:
      return exit;

    default:
      return state;
  }
};

export default bagReducer;
