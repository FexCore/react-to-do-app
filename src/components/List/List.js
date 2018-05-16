import React from 'react';

const List = ({ items, removeItem }) => (
  <ul className="list">
    {items.map((item, index) => <li onClick={() => removeItem(item)} key={`${item}-${index}`}>{item}</li>)}
  </ul>
);

export default List;