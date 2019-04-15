import { FETCH_LIST_DATA, FETCH_INITIAL_LIST_DATA } from "./types";
const dataFromJsonFile = require("../../storage/data.json");
/*
 * action creators
 */

export function setInitialLists(data) {
  return { type: FETCH_INITIAL_LIST_DATA, data };
}

export const fetchInitialListData = () => {
  return dispatch => dispatch(setInitialLists(dataFromJsonFile));
};
