import React, { Component } from 'react';
import './App.css';
import kosterbild from './koster.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kosterveckan är snart här</h1>
        </header>
        <p className="App-intro">
          Life is a mystery, but Koster is a certainty.
        </p>
        <img src={kosterbild} width='440' />
      </div>
    );
  }
}

export default App;
