import React from 'react';
import Form from '../Form';
import List from '../List';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import './ToDoApp.css';

const ToDoApp = () => (
  <BrowserRouter>
    <div className="main">
        <header>
          <ul>
            <li><NavLink to="/" exact activeClassName="active">Tasks</NavLink></li>
            <li><NavLink to="/add-new-task" activeClassName="active">Add new task</NavLink></li>
          </ul>
        </header>
          <Switch>
            <Route exact path="/" component={List} />
            <Route path="/add-new-task" component={Form} />
            <Route render={() => <h1>Page Not Found</h1>} />
          </Switch>
    </div>
  </BrowserRouter>
);

export default ToDoApp;
