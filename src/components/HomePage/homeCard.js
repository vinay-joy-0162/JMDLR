import React from "react";
import Container from "react-bootstrap/Container";
import {Homecarousel} from "./Carosule";
import {Navigationbar} from "../partials/Navbar.component";
import Footers from "../partials/Footer";


export class Home extends React.Component {
  render(){
    return(
      <div>
      <Navigationbar />
      <Container>
        <Homecarousel />
        
      <center><h3 className="mt-5">Journal of Multi-Disciplinary Legal Research</h3></center>
      
      </Container>
      <Footers />
      </div>
    )
  }
};
