import React, { Component } from 'react';
import './Style/App.css';
import kosterbild from './Resources/koster.jpg';

class Home extends Component {
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

export default Home;
