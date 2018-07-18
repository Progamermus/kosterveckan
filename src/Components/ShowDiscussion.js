import React, { Component } from 'react';
import firebase from 'firebase'
import './Style/App.css';
import {Row, Col} from 'react-bootstrap'

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
      <Col>
        {this.state.allMesseges.map((item,i) => <Row className="show-grid"><Col className="col-sm-2 username">{this.state.allUsers[i]}:</Col><Col className="col-sm-10 messeges">{this.state.allMesseges[i]}</Col> </Row>).reverse()}
      </Col>
    );
  }
}

export default ShowDiscussion;
