import React from 'react';
import Form from '../Form';
import List from '../List';

import './ToDoApp.css';

const ToDoApp = () => (
  <div className="main">
      <Form />
    <div className="wrap">
      <div className="header"><span>Todo List</span></div>
      <div className="wrap-list">
        <List />
      </div>
    </div>
  </div>
);

export default ToDoApp;
