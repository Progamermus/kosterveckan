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
    let tempMesseges = []
    let tempUsers = []
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

  componentDidUpdate() {
      this.getDataFromFirebase()
    }

  render() {
    return (
      <div>
        <ul class="discussionBoard">
            {this.state.allMesseges.map((item,i) => <li key={i}>{this.state.allUsers[i]} : {this.state.allMesseges[i]} </li>)}
        </ul>
      </div>
    );
  }
}

export default ShowDiscussion;
