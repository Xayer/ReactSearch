import React from "react";
import ListItem from "./list-item";

export default class List extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { title, items } = this.props;
    const listItems = items.map(item => (
      <ListItem
        title={item.title}
        label={item.label}
        imageUrl={item.imageUrl}
      />
    ));
    return (
      <section>
        <h1>{title}</h1>
        {listItems}
      </section>
    );
  }
}
