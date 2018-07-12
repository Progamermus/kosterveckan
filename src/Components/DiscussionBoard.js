import React, { Component } from 'react';
import firebase from 'firebase'
import './Style/App.css';
import ShowDiscussion from './ShowDiscussion'

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
    if ((this.state.username == "") || (this.state.messege == "")) {
      alert("My penis is too big to fail.")
    } else {
      var username = this.state.username;
      var rootRef = firebase.database().ref();
      var discussionBoardRef = rootRef.child('discussionBoard/messeges');
      var messegesRef = discussionBoardRef.push();
      messegesRef.set({
        messege: this.state.messege,
        username: this.state.username
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <p>
            Choose a cool name:
          <input
            type="text"
            onChange={(e) => this.state.username = e.target.value}
          />
          </p>
        </div>
        <div>
          <p>
            Write a sick messege:
          <input
            type="textarea"
            onChange={(e) => this.state.messege = e.target.value}
          />
          <button onClick={this.sendMessegeToDatabase}>
            Send dickpick
          </button>
          </p>
        </div>
        <ShowDiscussion />
      </div>

    );
  }
}

export default DiscussionBoard;
