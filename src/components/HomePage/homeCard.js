import React from "react";
import Container from "react-bootstrap/Container";
import {Homecarousel} from "./Carosule";
import {Homecontents} from "./HomeContents";
import Homecc from "./homeCC";
import {Navigationbar} from "../partials/Navbar.component";
import Footers from "../partials/Footer";


export class Home extends React.Component {
  render(){
    return(
      <div>
      <Navigationbar />
      
      <Container>
      <Homecarousel />
      <Homecontents  />
      <Homecc />
      
      </Container>
      <Footers />
      </div>
    )
  }
};
