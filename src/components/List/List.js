import React, { Component } from "react";

class List extends Component {
  removeItem = item => {
    const { items, removeItem } = this.props;
    const index = items.indexOf(item);

    if (index !== -1) {
      removeItem(item);
    }
  };

  render() {
    const { items } = this.props;

    return (
      <div className="wrap">
        <div className="header">
          <span>Todo List</span>
        </div>
        <div className="wrap-list">
          <ul className="list">
            {items.map((item, index) => (
              <li
                onClick={() => this.removeItem(item)}
                key={`${item}-${index}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default List;
