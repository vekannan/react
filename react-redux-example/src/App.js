import React , { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    age:1
  }
  constructor () {
    super()
    this.setState({
      age: 2
    })
  }
  render() {
    return (
      <div className="App">
        <div>Age : {this.state.age}</div>
        <button onClick={this.addAge}>Add Age</button>
        <button onClick={this.reduceAge}>Reduce Age</button>
      </div>
    );
  }

  addAge = () => {
    this.setState({
      ...this.state,
      age: this.state.age + 1,
    })
  }

  reduceAge = () => {
    this.setState({
      ...this.state,
      age: this.state.age - 1,
    })
  }
}

export default App;
