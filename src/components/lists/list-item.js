import React from "react";

export default class ListItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { title, label, imageUrl, ...props } = this.props;
    return (
      <article>
        <h1>{title}</h1>
        <span>{label}</span>
        {imageUrl ? (
          <figure>
            <img src={imageUrl} />
          </figure>
        ) : null}
      </article>
    );
  }
}
