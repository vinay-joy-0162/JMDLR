import React from "react";
import Container from "react-bootstrap/Container";
import {Navigationbar} from "../partials/Navbar.component";
import Footers from "../partials/Footer";
import {Submissionpage} from "../Submission/SubmissionCard";
import Wordname from "./Wordlist";

export class submission extends React.Component {
  render(){
    return(
      <div>
         <Navigationbar />
      <Container>
       <Submissionpage />
       <Wordname />
     
      </Container>
      <Footers />
      </div>
    )
  }
};
