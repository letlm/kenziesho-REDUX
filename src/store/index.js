import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import bagReducer from "./modules/Bag/reducer";
import productsReducer from "./modules/products/reducer";

const reducers = combineReducers({
  bag: bagReducer,
  products: productsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
