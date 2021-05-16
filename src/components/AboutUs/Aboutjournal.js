import React from "react";
import Container from "react-bootstrap/Container";
import {Navigationbar} from "../partials/Navbar.component";
import Footers from "../partials/Footer";


export class About extends React.Component {
  render(){
    return(
      <div>
         <Navigationbar />
      <Container>
       
      <center><h3 className="mt-5">Welcome to Journals hub AboutUs page</h3></center>
      </Container>
      <Footers />
      </div>
    )
  }
};
