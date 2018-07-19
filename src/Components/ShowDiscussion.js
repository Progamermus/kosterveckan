import React, { Component } from 'react';
import firebase from 'firebase'
import './Style/App.css';
import {Row, Col} from 'react-bootstrap'

class ShowDiscussion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allMesseges: [],
      allUsers: [],
      allDates: []
    };
  }

  getDataFromFirebase() {
    let tempMesseges = [];
    let tempUsers = [];
    let tempDates = [];
    const messegesRef = firebase.database().ref().child('discussionBoard/messeges');
    messegesRef.once('value').then((snap)  => {
      snap.forEach(child => {
        tempUsers.push(child.val().username);
        tempMesseges.push(child.val().messege);
        tempDates.push(Date.parse(child.val().date));
        })
        this.setState({
          allMesseges: tempMesseges,
          allUsers: tempUsers,
          allDates: tempDates
        })
      })
  }

  componentDidMount() {
      this.getDataFromFirebase()
    }

  componentDidUpdate() {
      this.getDataFromFirebase()
    }

  generateDateDisplay(i) {
    const date = new Date(this.state.allDates[i]);
    const dayMonth = date.toLocaleDateString().slice(0, -5);
    const hourMin = date.toLocaleTimeString().slice(0, -3);
    return hourMin + ' ' + dayMonth;
  }

  render() {
    return (
      <Col>
        {this.state.allMesseges.map((item,i) => <Row className="show-grid"><Col className="col-md-2 username">{this.state.allUsers[i]}:</Col><Col className="col-lg-9 col-md-8 messeges">{this.state.allMesseges[i]}</Col><Col className="col-lg-1 col-md-2 dates">{this.generateDateDisplay(i)}</Col> </Row>).reverse()}
      </Col>
    );
  }
}

export default ShowDiscussion;
