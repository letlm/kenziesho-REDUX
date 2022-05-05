import { ADD_PRODUCT, DELETE_PRODUCT, FINISH_BAG } from "./actionTypes";

export const addBag = (product) => ({
  type: ADD_PRODUCT,
  product,
});

export const deleteBag = (productsList) => ({
  type: DELETE_PRODUCT,
  productsList,
});

export const finishBag = (productsList) => ({
  type: FINISH_BAG,
  productsList,
});
