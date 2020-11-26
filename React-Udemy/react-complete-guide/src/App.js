import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state = {
    persons : [
      {name:"Rafay", age : 21},
      {name:"Ali", age : 16},
      {name:"Hashmi", age : 25},
      
    ]
  }
  render() {
    return (
      <div className="App">
        <button>Switch Name</button>
        
        <h1>Hello, from React App</h1>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}>I am elder</Person>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}>I am younger</Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].name}>I am eldest</Person>
      </div>
    );
    // return (
    //      React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello'))
    //  );
  }
}

export default App;
