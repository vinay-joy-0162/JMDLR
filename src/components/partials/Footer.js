import React from "react";

import '../Styles/footer.css';
import Container from "react-bootstrap/Container";
import { Row, Col } from 'react-bootstrap';
import paper from "./papers.png";
// import { Link } from "react-router-dom";
const Footers = () => (

    <div className="footer-body">
        <div className="row footer-row pl-2 pb-5 pr-2 pt-5">
            <div className=" col-12 col-md-4 col-xl-4    col-sm-12 col-lg-4  footer-col-1"></div>
            <div className="row footer-single-row"></div>



            <h1 className="h-footer">
                Journaling on Laws
      </h1>


            <Row>
                <div className="footer-1">
                <Col className="col-About-title">About Us</Col>
                <div className="footer-para1">
                Journal on Multi-Disciplinary Legal Research is an Online Journal which is published monthly, 
                is student-run, open access and peer reviewed and seeks to provide a forum for free exchange of ideas
                 on legal issues pertaining to various emerging areas of law. 
                 JMDLR does not restrict itself to any particular area of law and welcomes contributions from all legal branches, as long as the work is original, unpublished and up to date.
                    </div>

                        </div>

                <br></br>
                <div className="col-12 col-md-4 col-xl-4  col-sm-12  col-lg-4 footer-col-2">
                    <div className="row footer-single-row">

                        <Col className="col-title">Contact Us</Col>
                        <div className="footer-para2">
                            <h6>
                                Editor in chief
                                </h6>
                            <h6>
                                Email-id: editor@gmail.com
                                </h6>
                            <h6>

                            </h6>

                        </div>



                    </div>
                </div>

             


            </Row>
            <img className="footer-img" src={paper} alt="paper_img" />



        </div>

    

      

    </div>





);

export default Footers;
