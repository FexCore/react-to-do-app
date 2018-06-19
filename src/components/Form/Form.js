import React, { Component } from 'react';
class Form extends Component {

  state = {
    input: ''
  }

  static getDerivedStateFromProps(nextProps){
    if(nextProps.clearInput){
      return {
        input: ''
      }
    }
    return null;
  }

  onChange = e => {
    this.setState({
      input: e.currentTarget.value
    })
  }

  onKeyPress = e => {
    if(e.key === 'Enter'){
      this.addItem(this.state.input);
    }
  }

  addItem = value => {
    const { items, addItem, setClearInput, clearInput } = this.props;

    if(items.indexOf(value) === -1 && value !== ''){
      addItem(value);
      this.props.history.push('/');
    }else if(clearInput){
      setClearInput(false);
    }
  }

  render() {
    return (
      <div className="add-form">
        <div className="input-wrapper">
          <input
            className="input-field"
            value={this.state.input}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
            placeholder="Enter task" 
          />
          <span className="focus-border"></span>
        </div>
      </div>    
    );
  }
}

export default Form;