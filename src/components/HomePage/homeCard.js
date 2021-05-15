import React from "react";
import Container from "react-bootstrap/Container";
import {Navigationbar} from "../partials/Navbar.component";


export class Home extends React.Component {
  render(){
    return(
      <Container>
        <Navigationbar />
      <center><h3 className="mt-5">Welcome to Journals hub Home page</h3></center>
      </Container>
    )
  }
};
