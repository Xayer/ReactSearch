import { createStore, applyMiddleware } from "redux";
import RootReducer from "../reducers";
import thunk from "redux-thunk";

export default function() {
  var instance;

  function createInstance() {
    var store = createStore(RootReducer, applyMiddleware(thunk));
    return store;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
}
