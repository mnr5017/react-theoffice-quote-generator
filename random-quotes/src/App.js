import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quotes from "./Quotes/quotes.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Quotes From 'The Office'</h1>
        <Quotes />
      </div>
    );
  }
}

export default App;
