import React , { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Age : {this.props.age}</div>
        <button onClick={this.props.addAge}>Add Age</button>
        <button onClick={this.props.reduceAge}>Reduce Age</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}

 const mapDispatchToProps = (dispatch) => {
  return {
    addAge: () => dispatch({type: 'ADD_AGE'}),
    reduceAge: () => dispatch({type: 'REDUCE_AGE'})
  }
 }


export default connect(mapStateToProps, mapDispatchToProps)(App)
