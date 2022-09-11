import React from "react";
import { Container } from "react-bootstrap";
import Issue from "./Issue";
import Addpdf from "./Issueaddpdf";

 class Mainissue extends React.Component {
    render(){
      return(
        <div>
           
        <Container>
         <Addpdf />
         <Issue />
    
       
        </Container>
      
        </div>
      )
    }
  };
  export default Mainissue;
  