import React, { Component } from 'react';
import './Style/Login.css';
import { Link, withRouter, Route, Redirect} from 'react-router-dom';
import Home from './Home';
import * as routes from '../constants/routes';
import {Grid, Row, Col} from 'react-bootstrap';
import firebase from 'firebase/app';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'kosterveckan',
      password: '',
      error: '',
    };
    this.checkFriend = this.checkFriend.bind(this)
    this.logIn = this.logIn.bind(this)
  }

  logIn(){
    const email = this.state.username
    const password = this.state.password
    const { history } = this.props;

    firebase.auth().signInWithEmailAndPassword(email + '@king.se', password)
    .then( () => {
      history.push("/home")
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      //
      alert(errorMessage)
    });
  }

  checkFriend(){
    if (this.state.password == "mellon") {
      return true
    } else {
      return false
    }
  }

  inputUser = event => {
    this.setState({username: event.target.value})
  }

  inputPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    return (
      <Grid>
      <div>
        <Row>
            <input
              class="form-control"
              placeholder="Vad vill du heta?"
              type="text"
              name="user"
              value={this.state.username}
              onChange={this.inputUser}
            />
        </Row>
        <Row>
            <input
              class="form-control"
              placeholder="Speak friend to enter..."
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.inputPassword}
            />
          <button
            type="submit"
            class="btn btn-success"
            onClick={this.logIn}>
            Log in
          </button>
        </Row>
      </div>
    </Grid>
    );
  }
}
export default Login;
