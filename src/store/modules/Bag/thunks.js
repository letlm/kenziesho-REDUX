import { addBag, deleteBag, finishBag } from "./actions";

export const addBagThunk = (product) => {
  return (dispatch) => {
    const productsList = JSON.parse(localStorage.getItem("@Bag")) || [];
    productsList.push(product);
    localStorage.setItem("@Bag", JSON.stringify(productsList));
    dispatch(addBag(product));
  };
};

export const deleteBagThunk = (id) => {
  return (dispatch, getStore) => {
    const { bag } = getStore();
    const productsList = bag.filter((product) => product.id !== id);
    localStorage.setItem("@Bag", JSON.stringify(productsList));
    dispatch(deleteBag(productsList));
  };
};

export const finishBagThunk = () => {
  return (dispatch) => {
    const productsList = [];
    localStorage.clear();
    dispatch(finishBag(productsList));
  };
};
