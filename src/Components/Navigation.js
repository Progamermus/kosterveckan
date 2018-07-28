import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Style/Navigation.css'

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Kosterveckan</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                <Link class="link" to="/home/info">Info</Link>
              </NavItem>
              <NavItem eventKey={2} href="#">
                <Link class="link" to="/home/attending/">Attending (35)</Link>
              </NavItem>
              <NavItem eventKey={3} href="#">
                <Link class="link" to="/home/chat">Chat</Link>
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Report
              </NavItem>
              <NavItem eventKey={2} href="#">
                <Link class="link" to="/">Sign Out</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>)
  }
}

export default Navigation;
