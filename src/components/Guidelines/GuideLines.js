import React from "react";
import Container from "react-bootstrap/Container";
import {Guidelinepages} from "../Guidelines/Guidelinepage";
import {Guidelineformats} from "../Guidelines/Guidelineformat";
import GuidelinesPRP from "../Guidelines/Guidelineprp";
import {Navigationbar} from "../partials/Navbar.component";
import Footers from "../partials/Footer";



export class Guideline extends React.Component {
  render(){
    return(
      <div>
         <Navigationbar />
      <Container>
          <Guidelinepages />
          <Guidelineformats />
          <GuidelinesPRP />
       
       
     
      </Container>
      <Footers />
      </div>
    )
  }
};
