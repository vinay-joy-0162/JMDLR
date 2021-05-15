import React from 'react';
import {NavLink} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";





export class Navigationbar extends React.Component {
  render () {
    return(
      <Navbar className="mt-2" bg="dark" expand="lg">

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink className="d-inline p-2 bg-dark text-white" 
              to="/">Home</NavLink>
              <NavLink className="d-inline p-2 bg-dark text-white" 
              to="About">About Us</NavLink>
              <NavLink className="d-inline p-2 bg-dark text-white" 
              to="Register">SignIn</NavLink>
            </Nav>
            </Navbar.Collapse>
            

      </Navbar>
    )
  }
}



