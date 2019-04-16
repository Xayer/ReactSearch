import { SET_LIST_DATA, FETCH_INITIAL_LIST_DATA } from "./types";
const dataFromJsonFile = require("../../storage/data.json");
/*
 * action creators
 */

export function setLists(data) {
  return { type: SET_LIST_DATA, data };
}

export function setInitialLists(data) {
  return { type: FETCH_INITIAL_LIST_DATA, data };
}

export const fetchInitialListData = () => {
  return async dispatch => dispatch(setInitialLists(dataFromJsonFile));
};
