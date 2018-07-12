import React, { Component } from 'react';
import './Style/Login.css';
import { Link, withRouter, } from 'react-router-dom';
import Header from './Header'
import firebase from 'firebase/app'

import * as routes from '../constants/routes';

const INITIAL_STATE = {
  username: '',
  password: '',
};

const LoginPage = ({ history }) =>
  <div>
    <h1>King-in</h1>
    <Login history = {history} />
  </div>

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'kosterveckan@ralle.se',
      password: '',
      error: '',
    };
  }

  onSubmit = event => {
    console.log("rasmus")
  }

  inputUser = event => {
    this.setState({username: event.target.value})
  }

  inputPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit}>

        <br/>
        <label> Namn: </label>
          <input
            type="text"
            name="user"
            value={this.state.username}
            onChange={this.inputUser}
          />
        <br/>
        <br/>
        <label> Master password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.inputPassword}
          />
        <button type="submit">
          Log in
        </button>
      </form>
      </div>
    );
  }
}
export default withRouter(LoginPage);
export {Login};
