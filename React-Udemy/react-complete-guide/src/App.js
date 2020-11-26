// import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
 const [personState, setPersonState] =  useState({
    persons : [
      {name:"Rafay", age : 21},
      {name:"Ali", age : 16},
      {name:"Hashmi", age : 25},
    ],
    otherState : "something"
  });

 const switchNameHandler = () => {
  setPersonState({
    persons: [
      {name:" Syed Rafay", age : 21},
      {name:"Ali", age : 16},
      {name:"Hashmi", age : 24},
    ]
  });

};
    return (
      <div className="App">
               
        <h1>Hello, from React App</h1>
        <button onClick = {switchNameHandler} >Switch Name</button>
        <Person name = {personState.persons[0].name} age = {personState.persons[0].age}>I am elder</Person>
        <Person name = {personState.persons[1].name} age = {personState.persons[1].age}>I am younger</Person>
        <Person name = {personState.persons[2].name} age = {personState.persons[2].age}>I am eldest</Person>
      </div>
    );
    // return (
    //      React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello'))
    //  );
  }

export default App;