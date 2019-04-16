import React from "react";
import { connect } from "react-redux";
import List from "../components/lists/list";

class Lists extends React.Component {
  render() {
    const lists = this.props.lists;

    if (!lists) {
      return <span>no results</span>;
    }

    return lists.map(list => <List title={list.title} items={list.items} />);
  }
}

const mapStateToProps = state => {
  return {
    lists: state.lists
  };
};

export default connect(mapStateToProps)(Lists);
