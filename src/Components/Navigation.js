import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home'
import Login from './Login'

import * as routes from '../constants/routes';

const Navigation = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
    </div>
  </Router>
);


export default Navigation;
