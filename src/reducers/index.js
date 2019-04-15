import { combineReducers } from "redux";
import list from "./ListReducer";

const RootReducer = combineReducers({
  lists: list
});

export default RootReducer;
