import React from 'react';
import {NavLink} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../Styles/navbar.css';
import  Navpic  from "./logo.jpeg";




export class Navigationbar extends React.Component {
  render () {
    return(
      <Navbar  bg="dark" expand="lg nav-body">
        <img className="navbarpic" src={Navpic} alt="NavBar_image" />
         <NavLink className="d-inline p-2 bg-dark text-white Nav-text " 
              to="/">Journal of Multi-Disciplinary Legal Research</NavLink>
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
              to="journal">Publications</NavLink>
               <NavLink className="d-inline p-2 bg-dark text-white " 
              to="Index">Indexing</NavLink>
              <NavLink className="d-inline p-2 bg-dark text-white" 
              to="editorialboard">Editiorial Board</NavLink>
              <NavLink className="d-inline p-2 bg-dark text-white " 
              to="Guideline">Guidelines</NavLink>  
               <NavLink className="d-inline p-2 bg-dark text-white " 
              to="submission">Submissions</NavLink>  
              <NavLink className="d-inline p-2 bg-dark text-white nav-lastitem " 
              to="Authorization">SignIn</NavLink>
            </Nav>
            </Navbar.Collapse>
            

      </Navbar>
    )
  }
}



