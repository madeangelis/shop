import { combineReducers, createStore } from "redux";
import { productReducer, selectedProductReducer } from "./reducers";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, {}, devtools);

export default store;
