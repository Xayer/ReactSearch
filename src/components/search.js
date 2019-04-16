import React from "react";
import { setLists, fetchInitialListData } from "../actions";
import { connect } from "react-redux";
import { each } from "lodash";

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
          const originalTitle = item.title;
          const originalLabel = item.label;
          const newTitle = this.highlightWordIfFound(
            SearchString,
            originalTitle
          );
          const newLabel = this.highlightWordIfFound(
            SearchString,
            originalLabel
          );

          if (
            this.shouldItemBeRemoved(
              originalTitle,
              originalLabel,
              newTitle,
              newLabel
            )
          ) {
            return false;
          }
          item.title = newTitle;
          item.label = newLabel;
          return item;
        });
        return list;
      });
      this.props.dispatch(setLists(SearchResults));
    });
  }

  highlightWordIfFound(searchString, stringToSearchIn) {
    if (stringToSearchIn.toLowerCase().includes(searchString.toLowerCase())) {
      const pieces = stringToSearchIn.split(searchString);
      console.log(pieces);
      var splitPattern =
        searchString != null ? new RegExp("(" + searchString + ")", "i") : "";
      var miniWords = stringToSearchIn.split(splitPattern);
      var html = [];

      each(miniWords, (miniWord, index) => {
        if (
          searchString != null &&
          miniWord.toLowerCase() === searchString.toLowerCase()
        ) {
          html.push(<span className="highlight">{miniWord}</span>);
        } else {
          html.push(miniWord);
        }
      });
      return [html];
    }
    return stringToSearchIn;
  }

  shouldItemBeRemoved(originalTitle, originalLabel, newTitle, newLabel) {
    return newTitle == originalTitle && newLabel == originalLabel;
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
