import React, { Component } from 'react';
import firebase from 'firebase'
import './Style/App.css';
import {Row, Col} from 'react-bootstrap'

class ShowDiscussion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username,
      allMesseges: [],
      allUsers: []
    };
  }

  render() {
    return (
      <Col>
        <h2>Announcementz</h2>
        <h3>by {this.state.username}</h3>
      </Col>
    );
  }
}

export default ShowDiscussion;
