import React, { Component } from 'react';
import './Style/App.css';
import kosterbild from './Resources/koster.jpg';
import DiscussionBoard from './DiscussionBoard';

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
        <DiscussionBoard />
        <div>
          <img src={kosterbild} width='440' />
        </div>
      </div>
    );
  }
}

export default Home;
