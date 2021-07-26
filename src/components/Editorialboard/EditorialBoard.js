import React from "react";
import Container from "react-bootstrap/Container";
import Editorialcarddetails from "./EditorialCard";
import {Navigationbar} from "../partials/Navbar.component";
import Footers from "../partials/Footer";


export class editorialboard extends React.Component {
  render(){
    return(
      <div>
      <Navigationbar />
      <Container>
        
      <center><h3 className="mt-5">Editorial Board Members</h3></center>
      <br></br>
      <br></br>
      <Editorialcarddetails />
      
      </Container>
      <Footers />
      </div>
    )
  }
};
