import React from "react";
import Container from "react-bootstrap/Container";
import { Indexingmain }  from "./indexmain";
import {Navigationbar} from "../partials/Navbar.component";
import Footers from "../partials/Footer";




export class Index extends React.Component {
    render() {
        return (
            <div>
            <Navigationbar />
           <Container>
               <Indexingmain />
           </Container>
            <Footers />
            </div>
        )
    }
}