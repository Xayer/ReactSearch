import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import RootReducer from "./reducers";
import "./styles.css";
import Lists from "./components/lists";
import { fetchInitialListData } from "./actions";

const store = createStore(RootReducer, applyMiddleware(thunkMiddleware));

store.dispatch(fetchInitialListData());

ReactDOM.render(
  <Provider store={store}>
    <Lists />
  </Provider>,
  document.getElementById("root")
);
