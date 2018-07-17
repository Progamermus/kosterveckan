import React, { Component } from 'react';
import firebase from 'firebase'
import './Style/App.css';
import ShowDiscussion from './ShowDiscussion'
import {Grid, Row, Col} from 'react-bootstrap'

class DiscussionBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      messege: ''
    };
    this.sendMessegeToDatabase = this.sendMessegeToDatabase.bind(this)
  }

  sendMessegeToDatabase () {
    if ((this.state.username === "") || (this.state.messege === "")) {
      alert("My penis is too big to fail.")
    } else {
      let rootRef = firebase.database().ref();
      let discussionBoardRef = rootRef.child('discussionBoard/messeges');
      let messegesRef = discussionBoardRef.push();
      messegesRef.set({
        messege: this.state.messege,
        username: this.state.username
      });
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col className="col-sm-8" xsOffset={4}>
          <Row className="show-grid viewMesseges">
            <Col className="col-sm-12">
              <ShowDiscussion />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col className="col-sm-4">
              <input
                class="form-control"
                placeholder="Choose username..."
                type="text"
                onChange={(e) => this.state.username = e.target.value}
              />
            </Col>
            <Col className="col-sm-6">
              <textarea class="form-control"
                onChange={(e) => this.state.messege = e.target.value}
              />
            </Col>
            <Col className="col-sm-2">
              <button onClick={this.sendMessegeToDatabase} class="btn btn-success">
                Skriv till Koster
              </button>
            </Col>
          </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default DiscussionBoard;
