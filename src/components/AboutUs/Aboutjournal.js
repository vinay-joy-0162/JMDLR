import React from "react";
import Container from "react-bootstrap/Container";
import {Aboutpage} from "../AboutUs/Aboutpage";
import {Aboutlistcontents} from "./Aboutlistings";
import Aboutlistingspage from "../AboutUs/listingpage";
import {Navigationbar} from "../partials/Navbar.component";
import Footers from "../partials/Footer";


export class About extends React.Component {
  render(){
    return(
      <div>
         <Navigationbar />
      <Container>
       <Aboutpage />
       <Aboutlistcontents />
       <Aboutlistingspage />
     
      </Container>
      <Footers />
      </div>
    )
  }
};
