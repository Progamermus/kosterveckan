import React, { Component } from 'react';
import { Link, Route, Switch, withRouter, BrowserRouter as Router } from 'react-router-dom';

import Home from './Components/Home'
import Login from './Components/Login'
import * as routes from './constants/routes';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" component={Login} />
      </Switch>
    );
  }
}

export default App;
