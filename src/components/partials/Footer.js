import React from "react";

import '../Styles/footer.css';
import Container from "react-bootstrap/Container";
import { Row, Col } from 'react-bootstrap';
// import paper from "./papers.png";
// import { Link } from "react-router-dom";
const Footers = () => (

    <div className="footer-body">
        <div className="row footer-row pl-2 pb-5 pr-2 pt-5">
            <div className=" col-12 col-md-4 col-xl-4    col-sm-12 col-lg-4  footer-col-1"></div>
            <div className="row footer-single-row"></div>



           

            <Row>
                <div className="footer-1">
                <Col className="col-About-title"> ISSN:2582-9947</Col>
                <div className="footer-para1">
              
                    </div>

                        </div>

                <br></br>
                <div className="col-12 col-md-4 col-xl-4  col-sm-12  col-lg-4 footer-col-2">
                    <div className="row footer-single-row">

                        {/* <Col className="col-title">Contact Us</Col>
                        <div className="footer-para2">
                            <h6>
                                <b>Rohan Garje</b>
                                </h6>
                                <br></br>

                            <h6>
                            <b>Office Address: </b>C-602, Bhumiraj Manor, Sector 14, Sanpada, Navi Mumbai, 400705, Maharashtra 
                                </h6>
                                <br></br>

                            <h6>
                            <b>Email</b>: editorinchief.jmdlr@gmail.com
                            </h6>
                            <br></br>

                             <h6>
                             <b>Contact No:</b> 9372988202
                             </h6>
                             

                        </div> */}



                    </div>
                </div>

             


            </Row>
           

        </div>

    

      

    </div>





);

export default Footers;
