import React , { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addAge, reduceAge } from './store/reducer'

class App extends Component {
  render() {
    const { age, addAge, reduceAge } = this.props
    return (
      <div className="App">
        <div>Age : { age }</div>
        <button onClick={ addAge }>Add Age</button>
        <button onClick={ reduceAge }>Reduce Age</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}

 const mapDispatchToProps = {
    addAge,
    reduceAge,
 }


export default connect(mapStateToProps, mapDispatchToProps)(App)
