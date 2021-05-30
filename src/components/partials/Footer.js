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



            <h1 style={{
                color: "white",
                textAlign: "center",
                marginTop: "-50px"
                
            }}>
                Journaling on Laws
      </h1>


            <Row>
                <div className="footer-1">
                <Col className="col-About-title">About Us</Col>
                <div className="footer-para1">
                    Lorem Ipsum is
                    simply dummy text of the printing and typesetting
                    industry.
                    Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer
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

    

        <div className="footer-licence">
            <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                <img  className="licence-img" alt="Creative Commons License"
                    src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a>
            <br />This work is licensed under a <a rel="license"
                href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.









         </div>


    </div>





);

export default Footers;
