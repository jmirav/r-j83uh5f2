import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      counter: 0
    }
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" type="text" value={this.state.value} onChange={this.updateValue.bind(this)}></textarea>
        <div className="counter">{this.state.counter}</div>
      </div>
    );
  }

  updateValue(event) {
    this.setState({
      value: event.target.value,
      counter: event.target.value.length
    });
  }
}

export default App;
