import React, { Component } from 'react';
import firebase from 'firebase'
import './Style/App.css';

class ShowDiscussion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allMesseges: [],
      allUsers: []
    };
  }

  getDataFromFirebase() {
    var tempMesseges = []
    var tempUsers = []
    const messegesRef = firebase.database().ref().child('discussionBoard/messeges');
    messegesRef.once('value').then((snap)  => {
      snap.forEach(child => {
        tempUsers.push(child.val().username);
        tempMesseges.push(child.val().messege);
        })
        this.setState({
          allMesseges: tempMesseges,
          allUsers: tempUsers
        })
      })
  }

  componentDidMount() {
      this.getDataFromFirebase()
    }

  render() {
    this.getDataFromFirebase()
    return (
      <div>
        <div>
          {this.state.allMesseges.map((item,i) => <li key={i}>{this.state.allMesseges[i]}</li>)}
        </div>
        <div>
          {this.state.allUsers.map((item,i) => <li key={i}>{this.state.allUsers[i]}</li>)}
        </div>
      </div>
    );
  }
}

export default ShowDiscussion;
