import React, { Component } from 'react';
import firebase from 'firebase'
import './Style/App.css';
import {Row, Col} from 'react-bootstrap'

class EventDescription extends Component {
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
        <h2>Lite information om eventet</h2>
      </Col>
    );
  }
}

export default EventDescription;
