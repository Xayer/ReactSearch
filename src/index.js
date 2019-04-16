import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import RootReducer from "./reducers";
import "./styles.css";
import Lists from "./components/lists";
import { fetchInitialListData } from "./actions";
import Search from "./components/search";
const store = createStore(RootReducer, applyMiddleware(thunkMiddleware));

store.dispatch(fetchInitialListData());

ReactDOM.render(
  <Provider store={store}>
    <Search />
    <Lists />
  </Provider>,
  document.getElementById("root")
);
