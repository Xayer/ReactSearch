import { FETCH_LIST_DATA, FETCH_INITIAL_LIST_DATA } from "../actions/types";

export default function ListReducer(state = [], action) {
  switch (action.type) {
    case FETCH_INITIAL_LIST_DATA:
      const formattedListData = action.data.data.page.structures.nodes.map(
        list => {
          return {
            title: list.title,
            items: list.entities.nodes.map(item => {
              return {
                title: item.title,
                label: item.subtitle,
                imageUrl: item.art.url
              };
            })
          };
        }
      );
      console.log(formattedListData);
      return formattedListData;
    default:
      return state;
  }
}
