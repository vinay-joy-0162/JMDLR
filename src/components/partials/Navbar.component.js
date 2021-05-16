import React from 'react';
import {NavLink} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../Styles/navbar.css';





export class Navigationbar extends React.Component {
  render () {
    return(
      <Navbar className="mt-2" bg="dark" expand="lg nav-body">
         <NavLink className="d-inline p-2 bg-dark text-white Nav-text " 
              to="/">Rohan's Journal</NavLink>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
            <Nav>
           
              <NavLink className="d-inline p-2 bg-dark text-white " 
              to="/">Home</NavLink>
              <NavLink className="d-inline p-2 bg-dark text-white " 
              to="About">About Us</NavLink>
              <NavLink className="d-inline p-2 bg-dark text-white " 
              to="journal">Journals</NavLink>
              <NavLink className="d-inline p-2 bg-dark text-white" 
              to="editorialboard">Editiorial Board</NavLink>
               <NavLink className="d-inline p-2 bg-dark text-white " 
              to="submission">Submission</NavLink>  
              <NavLink className="d-inline p-2 bg-dark text-white nav-lastitem " 
              to="Register">SignIn</NavLink>
            </Nav>
            </Navbar.Collapse>
            

      </Navbar>
    )
  }
}



