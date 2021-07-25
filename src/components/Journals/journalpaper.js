import React from "react";
import Container from "react-bootstrap/Container";
import {Navigationbar} from "../partials/Navbar.component";
import Footers from "../partials/Footer";
import constitutional from "../../pdfs/constitutional.pdf";

export class journal extends React.Component {
  render(){
    return(
      <div>
      <Navigationbar />
      <Container>
        
      <center><h3 className="mt-5">Journal papers on the Laws</h3></center>
      <iframe 
                src={constitutional}
                style={{height:'100vh'}} 
                height="100%" 
                width="100%" 
                title = 'x1' 
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                />
      </Container>
      <Footers />
      </div>
    )
  }
};
