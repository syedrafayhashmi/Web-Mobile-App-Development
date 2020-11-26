import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name = "Rafay" age = "21">I am elder</Person>
        <h1>Hello, from React App</h1>
        <Person name = "Ali" age = "16">I am younger</Person>
      </div>
    );
    // return (
    //      React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello'))
    //  );
  }
}

export default App;
