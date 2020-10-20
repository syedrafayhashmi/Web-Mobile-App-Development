import React from 'react';
import logo from './logo.svg';
import './App.css';


  function App() {
    let name = "RAFAY";
    let fname = "Syed Rafay";
    let lname = "Hashmi";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-logo">
            my name is {name}
            <h3>{`${fname} ${lname}`}</h3>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

export default App;
