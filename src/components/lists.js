import React from "react";
import { connect } from "react-redux";
import List from "../components/lists/list";

class Lists extends React.Component {
  render() {
    const lists = this.props.data;

    lists.map(list => <List title={list.title} items={list.items} />);
    return [lists];
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps)(Lists);
