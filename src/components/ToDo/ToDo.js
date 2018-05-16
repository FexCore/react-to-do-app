import React, { Component } from 'react';
import Form from '../Form';
import List from '../List';

import './ToDo.css';

class ToDo extends Component {

  state = {
    items: [],
    clearInput: false
  }

  addItem = value => {
    const { items } = this.state;

    if(items.indexOf(value) === -1 && value !== ''){
      this.setState({
        items:[value, ...items],
        clearInput: true
      })
    }else{
      this.setState({
        clearInput: false
      })
    }
  }

  removeItem = item => {
    const { items } = this.state;
    const index = item.indexOf(item);

    if(index !== -1){
      this.setState({
        items: [
          ...items.slice(0, index),
          ...items.slice(index + 1)
        ]
      })
    }
  }

  render() {
    return (
      <div className="main">
        <Form 
          addItem={this.addItem} 
          key="to-do-form"
          clearInput={this.state.clearInput} 
        />
        <div className="wrap">
          <div className="header"><span>Todo List</span></div>
          <div className="wrap-list">
            <List 
              items={this.state.items} 
              removeItem={this.removeItem} 
              key="to-do-list"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ToDo;
