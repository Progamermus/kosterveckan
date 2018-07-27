import React, { Component } from 'react';
import './Style/App.css';
import './Style/Home.css';
import DiscussionBoard from './DiscussionBoard';
import Navigation from './Navigation';
import Attending from './Attending';
import EventInfo from './EventInfo';
import { Switch, Route } from 'react-router-dom';

class Home extends Component {
  signOut = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <Switch>
          <Route path="/home/chat" component={DiscussionBoard} />
          <Route path="/home/attending" component={Attending} />
          <Route path="/home/info" component={EventInfo} />
        </Switch>
      </div>
    );
  }
}

export default Home;
