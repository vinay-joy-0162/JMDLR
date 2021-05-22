import React from "react";

import '../Styles/footer.css';
import Container from "react-bootstrap/Container";
import { Row, Col } from 'react-bootstrap';
import paper from "./papers.png";

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
                    <Col className="col-About-title">About Us</Col>
                    <div className="footer-para1">
                        Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry.
                        Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer

                        </div>

                    <br></br>
                    <div className="col-12 col-md-4 col-xl-4  col-sm-12  col-lg-4 footer-col-2">
                        <div className="row footer-single-row">

                            <Col className="col-title">Contact Us</Col>
                            <div className ="footer-para2">
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



                    {/* <div className="col-12 col-md-4 col-xl-4  col-sm-12  col-lg-4 footer-col-2">
                        <div className="row footer-single-row">

                    <Col className="col-title">Social Media</Col>

                    <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                   <li>LinkedIn</li>
                     <li>YouTube</li>
                    </ul>
                    </div>
                    </div> */}
                </Row>
               
         

            
        </div>

        <img className ="footer-img" src={ paper }  alt="paper_img" />



    </div >





);

export default Footers;
