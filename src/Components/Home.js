import React, { Component } from 'react';
import './Style/App.css';
import './Style/Home.css';
import DiscussionBoard from './DiscussionBoard';

class Home extends Component {
  signOut = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kosterveckan är snart här</h1>
          <button class="SignOut" onClick={this.signOut}>TAKE THE BLUE PILL</button>
        </header>
        <p className="App-intro">
          Life is a mystery, but Koster is a certainty.
        </p>
        <DiscussionBoard />
      </div>
    );
  }
}

export default Home;
