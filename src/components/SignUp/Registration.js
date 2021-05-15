import React from "react";
import Container from "react-bootstrap/Container";
import {Navigationbar} from "../partials/Navbar.component";
// import Card from "react-bootstrap/Card";


export class Register extends React.Component {
  render(){
    return(
      <Container>
        <Navigationbar />
      <center><h3 className="mt-5">Welcome to Journals hub SignIn page</h3></center>
      </Container>
    )
  }
};
