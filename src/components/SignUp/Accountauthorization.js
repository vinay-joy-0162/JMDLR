import React from "react";
import Container from "react-bootstrap/Container";
import {Loginpage} from "./login";
import {Navigationbar} from "../partials/Navbar.component";
import Footers from "../partials/Footer";


export class Authorization extends React.Component {
  render(){
    return(
      <div>
      <Navigationbar />
      <Container>
      <center><h3 className="mt-5">Login to Journify</h3></center>
      <Loginpage />
      </Container>
      <Footers />
      </div>
    )
  }
};
