import React, { Component } from 'react';
import firebase from 'firebase'
import './Style/App.css';

class ShowDiscussion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allMesseges: {},
      allUsers: []
    };
  }

  componentDidMount() {
    var tempMesseges = []
    var tempUsers = []
    const messegesRef = firebase.database().ref().child('discussionBoard/messeges');
    messegesRef.once('value', snap => {
      snap.forEach(child => {
        tempUsers.push(child.val().username);
        tempMesseges.push(child.val().messege);
      })
    })
    console.log(tempMesseges)
    }

  render() {
    return (
      <div>

      </div>

    );
  }
}

export default ShowDiscussion;
