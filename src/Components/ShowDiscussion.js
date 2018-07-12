import React, { Component } from 'react';
import firebase from 'firebase'
import './Style/App.css';

class ShowDiscussion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allMesseges: []
    };
  }

  componentDidMount() {
    const messegesRef = firebase.database().ref().child('discussionBoard/messeges');
    console.log(messegesRef)
  }

  render() {
    return (
      <div>

      </div>

    );
  }
}

export default ShowDiscussion;
