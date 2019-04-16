import React from "react";
import { setLists, fetchInitialListData } from "../actions";
import { connect } from "react-redux";

class Search extends React.Component {
  constructor() {
    super();
  }

  updateSearch(event) {
    const SearchString = event.target.value;
    this.props.dispatch(fetchInitialListData()).then(() => {
      //reset all data before we sort
      if (SearchString.length === 0) {
        return;
      }
      const SearchResults = this.props.lists.map(list => {
        list.items = list.items.filter(item => {
          return (
            item.title.toLowerCase().includes(SearchString.toLowerCase()) ||
            item.label.toLowerCase().includes(SearchString.toLowerCase())
          );
        });
        return list;
      });
      this.props.dispatch(setLists(SearchResults));
    });
  }

  render() {
    return (
      <header>
        <h1>ReactSearch</h1>
        <input
          onChange={this.updateSearch.bind(this)}
          placeholder="skriv her for at søge"
        />
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    lists: state.lists
  };
};

export default connect(mapStateToProps)(Search);
