import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import '../Styles/journalPage.css';
import { Navigationbar } from "../partials/Navbar.component";
import Footers from "../partials/Footer";

export class journal extends React.Component {
    constructor() {
        super();
        this.state = {
            forms: [
                {
                    title: 'Driving',
                },
                {
                    title: 'Banking',
                },
                {
                    title: 'HolidayHomes',
                },
                {
                    title: 'VRS',
                },
                {
                    title: 'Insurance',
                },
                {
                    title: 'Income Tax',
                },
                {
                    title: 'Passport',
                },
                {
                    title: 'Govt. Forms',
                },
                {
                    title: 'Railway',
                },
                {
                    title: 'Company',
                },
                {
                    title: 'Pension',
                },
                {
                    title: 'Election',
                }

            ]
        }
    }
    render() {
        return (
            <div>

                <Navigationbar />
                <Container>

                    {/* <center><h3 className="mt-5">Journal papers on the Laws</h3></center> */}
                    <br />

                    <hr />

                    <br />









                    <center><h3 className="mt-5"> Volume 2 - Issue 3 </h3></center>
                    <br></br>
                    <br></br>
                    <div className="forms-options">
                        <Row>
                            <Col>
                                <Link to='/journal/Res' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">1.A Thorough Explainer of Res Judicata

                                            </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Sarthak Chugh  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.6966967
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>
                            </Col>



                            <Col>
                                <Link to='/journal/Legaleducation' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">2.Legal Education and The New Technologies – Future Legal Professionals
                                                JMDLR

                                            </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Dr. Y. V. Kiran Kumar & Dr. Deepthi Rodda
                                                </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.6969752
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>
                            </Col>



                            <Col>
                                <Link to='/journal/Approch' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">3.An Analysis of The Approach of The Court in Granting Maintenance With Special Reference To Live In Relationship Cases



                                            </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author – Sudhangee Handoo  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.6969732
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>
                            </Col>


                            
                            <Col>
                                <Link to='/journal/Sustain' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">4.Sustainable Development and Indian Judiciary 




                                            </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Shweta Singh Rawat & Abhishek Nagle </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                            DOI: www.doi.org/10.5281/zenodo.6974876 
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>
                            </Col>



                            <Col>
                                <Link to='/journal/Pyschologicial' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">5.A Psychological Perspective of Judicial Tenets in India on Environment 





                                            </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - R Krishnan Bhatt & Anitha Mary Mathew </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                            DOI: www.doi.org/10.5281/zenodo.6983164 
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>
                            </Col>




                            <Col>
                                <Link to='/journal/Gandhi' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">6.Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA), 2005: Overview and Performance 

                                            </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Nikita Sharma</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                            DOI: www.doi.org/10.5281/zenodo.6992347 
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>
                            </Col>






                            
                            <Col>
                                <Link to='/journal/Critical' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">7. Critical Analysis of Marital Rape in India 



                                            </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Soumya Goel </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                            DOI: www.doi.org/10.5281/zenodo.7009262 
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                    </div>



























                    <center><h3 className="mt-5"> Volume 2 - Issue 2 </h3></center>
                    <br></br>
                    <br></br>
                    <div className="forms-options">
                        <Row>
                            <Col>
                                <Link to='/journal/Federation' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">1.Case Comment: Federation of Obstetrics and Gynaecological Societies of India (FOGSI) V. Union of India and Ors.   </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Gayathri Jiji  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.6011662
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/journal/Clemency' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">2.Clemency Power of Executives- A Critical Analysis  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Mannu Jaiswal </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:  www.doi.org/10.5281/zenodo.6055013
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>
                            <Col>
                                <Link to='/journal/Inter' >
                                    <Card className="C_D card card-1" style={{ width: '42rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">3.Inter-Relationship Between Business, Human Rights and Sustainable Development Goals in The Light of United Nations Guiding Principles- A Critical Analysis   </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Amrita Malik & Dr. Rashmi K.S   </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:www.doi.org/10.5281/zenodo.6011569
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>
                            <Col>
                                <Link to='/journal/Sword' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">4.JOHN DOE: Shield became Sword  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Kaishena Chauhan  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.6011624
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>



                            <Col>
                                <Link to='/journal/Retail' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">5.Augmented Reality and Its Impact on The Retail Industry  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Disha Jain   </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.6026004
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>


                            <Col>
                                <Link to='/journal/State' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">6.Right To Expropriate by A Sovereign State: A Jurisprudential Analysis  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Shruti Srivastava  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.6025993
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>




                            <Col>
                                <Link to='/journal/Visa' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">7.UCC vis-a-vis Indian Pluralism  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Jyotsana Singh  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:www.doi.org/10.5281/zenodo.6035826
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>

                            <Col>
                                <Link to='/journal/Juvenile' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">8.Impact of Juvenile Delinquency in India </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Dr. Vijay Kumar Vimal  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:www.doi.org/10.5281/zenodo.6037403
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>

                            <Col>
                                <Link to='/journal/Conversion' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">9.Conversion of Traditional Knowledge to Intellectual Property: An Analysis of The Use Of Biotechnological Resources of India   </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Abhishek Sarma  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.6047575
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>




                            <Col>
                                <Link to='/journal/Provision' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">10.Constitutional Provisions for The Protection of Environment in India   </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Dr. Smita Satapathy  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.6109361
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>


                            <Col>
                                <Link to='/journal/Maternity' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">11.The Study of Globalization and Its Impact on The Evolution of Maternity Act  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Priya Das </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:www.doi.org/10.5281/zenodo.6047591
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>




                            <Col>
                                <Link to='/journal/Derivative' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">12.Derivative Action, Class Action and Representative Suits  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author- Priyanka Sonowal </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:www.doi.org/10.5281/zenodo.6055087
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>




                            <Col>
                                <Link to='/journal/Due' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">13.Human Rights Due Diligence as A Tool to Prevent Business Human Rights Abuses - A Critical Analysis  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Amrita Malik & Dr. Rashmi K </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI : www.doi.org/10.5281/zenodo.6063894
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>
                            <Col>
                                <Link to='/journal/Beneficiary' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">14.The Transformative Characteristics of Beneficiary State Confutations in Investor-State Arbitration with Particular Innuendo to The Indian Scenario  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Yash Patil </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI : www.doi.org/10.5281/zenodo.6079679
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>
                            <Col>
                                <Link to='/journal/Fake' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">15.The Need to Regulate Fake News on Digital Platforms </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Shilpa Sanjeevan </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI : www.doi.org/10.5281/zenodo.6079645
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>
                            <Col>
                                <Link to='/journal/Female' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">16.Challenges to Female Criminality  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Pratyay Amrit </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI : www.doi.org/10.5281/zenodo.6079590
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>



                            <Col>
                                <Link to='/journal/Bill' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">17.The Assisted Reproductive Technology (Regulation) Bill, 2020- A Critical Analysis  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Ananya Singh  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI :www.doi.org/10.5281/zenodo.6109265
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>



                            <Col>
                                <Link to='/journal/Clause' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">18.Constitutionality of The Exclusionary Clause of Marital Rape in India   </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Aditi Singh </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI : www.doi.org/10.5281/zenodo.6126343
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>





                            <Col>
                                <Link to='/journal/Dream' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">19.Driverless Cars:  A Distant Dream? </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - G. Srividhya Iyer </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI : www.doi.org/10.5281/zenodo.6144708
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>



                            <Col>
                                <Link to='/journal/Does' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">20.Does The Indian Constitution Require Transformation? </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Sarthak Chugh  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI : www.doi.org/10.5281/zenodo.6308938
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>





                            <Col>
                                <Link to='/journal/Need' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">21.Need For Witness Protection Measure in India: A Critical Analysis  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Saharshrarchi Uma Pandey  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI :www.doi.org/10.5281/zenodo.6331734
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>








                            <Col>
                                <Link to='/journal/Company' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">22.‘Government Company’ – Is It ‘State’ For the Purpose of Constitutional Law </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Srishti Jain   </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI : www.doi.org/10.5281/zenodo.6347747
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>


                            <Col>
                                <Link to='/journal/Payment' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">23.Digital Payments and Competition Concerns </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Gauri Sharma & Molshree Totla   </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI : www.doi.org/10.5281/zenodo.6347751
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>








                            <Col>
                                <Link to='/journal/BookReview' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">24.Book Review: The Cases That India Forgot by Chintan Chandrachud  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Anagha P   </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI : www.doi.org/10.5281/zenodo.6368582
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>
                            <Col>
                                <Link to='/journal/Mirzapur' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">25.Mirzapur Moti Kureshi Case- A Landmark Judgement on The Question of Banning Cow Slaughter</Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author   - Advocate Sohail Vij  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI : www.doi.org/10.5281/zenodo.6359404
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>
                            <Col>
                                <Link to='/journal/Process' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">26.Substantial Due Process and Procedural Due Process in Indian Legal System- Dimension of Judicial Review in India  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Sakyasuddha Sarkar   </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI : www.doi.org/10.5281/zenodo.6350484
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>



                            <Col>
                                <Link to='/journal/Womenlaw' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">27.Indigenous Women and the Law   </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Snehanshu Bhushan & Samiksha</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI :  www.doi.org/10.5281/zenodo.6391227
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>


                            <Col>
                                <Link to='/journal/Abhishek' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">28.Constitutionalism And Constitutional Morality as a Check on Criminalisation   </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Abhishek Rao</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI : www.doi.org/10.5281/zenodo.6394774
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>




                            <Col>
                                <Link to='/journal/UK' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">29.Study Of Origin and Development of Banking System in Canada and UK   </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Komal Pandey </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI :www.doi.org/10.5281/zenodo.6399139
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>


                            <Col>
                                <Link to='/journal/Freedom' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">30.Analysing The Status of Freedom of Speech Vis, A Vis New Ott Rules in India  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Saundraya Giri </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI :www.doi.org/10.5281/zenodo.6408550
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>




                            <Col>
                                <Link to='/journal/Suits' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">31.Prohibiting Suits Under the Contract Act: Analyzing through Ratnesh Dev Sharma v. Cipla Limited through Managing Director [ AIR 2013 CHH 71] </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Kaustubh Shakkarwar</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi1">
                                                DOI :www.doi.org/10.5281/zenodo.6412384
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>





                            <Col>
                                <Link to='/journal/Society' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">32.Pluralistic Society </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Kajal Kumari</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi1">
                                                DOI : www.doi.org/10.5281/zenodo.6428163
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>

                            <Col>
                                <Link to='/journal/Disaster' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">33.Disaster Management in India- Praxis or Merely a Speculation? </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Khushboo Abrol</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi1">
                                                DOI : www.doi.org/10.5281/zenodo.6466376
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>

                            <Col>
                                <Link to='/journal/Abolition' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">34.Abolition Of Polygamy in Hindu Law </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Saarthak Mongia & Palak Chhabra & Raneeta Pal</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi1">
                                                DOI : www.doi.org/10.5281/zenodo.6466374
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>

                            <Col>
                                <Link to='/journal/Autonomous' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">35.Autonomous Vehicles- From Science Fiction to Reality </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Aryan Yashraj </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi1">
                                                DOI : www.doi.org/10.5281/zenodo.6466372
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>












                            <Col>
                                <Link to='/journal/Devadasi' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">36.Devadasi System in India: Sacred Prostitution</Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Yazhini S</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi1">
                                                DOI : www.doi.org/10.5281/zenodo.6468195
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>
                            <Col>
                                <Link to='/journal/Freedomspeech' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">37.Freedom Of Speech and Expression Vis-À-Vis Defamation   </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Bushra Sarfaraj Patel </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi1">
                                                DOI :www.doi.org/10.5281/zenodo.6464229
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>
                            <Col>
                                <Link to='/journal/Reading' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">38.Reading Law: The Interpretation of Legal Texts </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Hari Haran P</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi1">
                                                DOI :www.doi.org/10.5281/zenodo.6467889
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>
                            <Col>
                                <Link to='/journal/Mob' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">39.Mob lynching & the Right to Life and Liberty – A Socio-Legal Analysis </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Gururaj D. Devarhubli & Bushra Sarfaraj Patel </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi1">
                                                DOI : www.doi.org/10.5281/zenodo.6464213
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>
                            <Col>
                                <Link to='/journal/Construction' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">40. Rule of Reasonable Construction </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Sundar Kishore</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi1">
                                                DOI : www.doi.org/10.5281/zenodo.6480284
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>


                            <Col>
                                <Link to='/journal/Socialtool' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">41.Corporate Social Responsibility: A Tool for Sustainable Development </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Adapa V SubbaRayudu</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi1">
                                                DOI :www.doi.org/10.5281/zenodo.6481323
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>


                            <Col>
                                <Link to='/journal/Assets' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">42.Non-Performing Assets in India: A Critical Analysis of Public and Private Sector Banks</Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Aakriti Singh & Amber Arora</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi1">
                                                DOI :www.doi.org/10.5281/zenodo.6493526
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>



                            <Col>
                                <Link to='/journal/Datacollection' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">43.Data Collection Through Cookies: Competition at The Cost of an Individual’s Privacy </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Nandini Tripathy</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi1">
                                                DOI :www.doi.org/10.5281/zenodo.6502485
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>

                            <Col>
                                <Link to='/journal/Justice' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">44.Juvenile Justice and Media Perspective in India: -Analysis </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Tuhina Sinha</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi1">
                                                DOI : www.doi.org/10.5281/zenodo.6502479
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>



                            <Col>
                                <Link to='/journal/Parody' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">45.The Legality of Parody and Satire in India  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Hithesh RS</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi1">
                                                DOI :www.doi.org/10.5281/zenodo.6510046
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>


                            <Col>
                                <Link to='/journal/Accomadation' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">46.Right To Reasonable Accommodation to A Tenant: Legal Discourse with Reference to Chhattisgarh Rent Control Act 2011
                                            </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Adv. Vaibahv Kartikeya Agrawal</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi1">
                                                DOI: www.doi.org/10.5281/zenodo.6596600
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>
                        </Row>
                    </div>


                    <center><h3 className="mt-5">Volume 2 - Issue 1 (Part B)</h3></center>
                    <br></br>
                    <h3 className="about-para">Thank you to all who were nominated in the Research Paper. The Editorial Board after scrutinizing and careful consideration has declared
                        Mr. Neelargho Ray from Vivekanand Education Society's School of Law, as the winner of the Research Paper Competition for his paper titled "RIGHT TO LIFE AND PERSONAL LIBERTY: NAVTEJ SINGH JOHAR VS UNION OF INDIA"
                    </h3>
                    <br></br>
                    <br></br>
                    <div className="forms-options">
                        <Row>




                            <Col>
                                <Link to='/journal/Detailed' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">1.Right Against Self-Incrimination: An Analysis & Detailed Study of Laws Prevailing in India   </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Subhajit Samanta & Somasree Bakshi</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.5828344
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>









                            <Col>
                                <Link to='/journal/Adoption' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">2.Adoption Provisions and Maintenance Under Hindu Law  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Ashish Srivastava  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:www.doi.org/10.5281/zenodo.5831022
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>









                            <Col>
                                <Link to='/journal/Power' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">3.Governor’s Discretionary Powers in Case of Hung Assembly </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Aishwarya Agarwal </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.5831018
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>










                            <Col>
                                <Link to='/journal/Global' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">4.Global Minimum Corporate Tax A Blow to Tax Competition & Its Implications on The Indian Sovereign  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Latika Arora </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.5834521
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>







                            <Col>
                                <Link to='/journal/Dead' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">5.Dead Women Tell No Tale  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Rajesh Kumar </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:www.doi.org/10.5281/zenodo.5838398
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>

                            <Col>
                                <Link to='/journal/Making' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">6.The Discretion Available to Law-Makers in Respects of Making Classification for The Purposes of Taxation  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Garima Bothra  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:  www.doi.org/10.5281/zenodo.5838405
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>










                            <Col>
                                <Link to='/journal/Operation' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">7.Operational Creditors - Lost in The Bylanes of Equality </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Adapa V Subba Rayudu   </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:   www.doi.org/10.5281/zenodo.5842979
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>





                            <Col>
                                <Link to='/journal/Burdern' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">8.Corporate Social Responsibility: A Burden or Benefit? </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author   - Akash Dixit & Shubham Saini & Abhishek Bhatt   </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:  www.doi.org/10.5281/zenodo.5846800
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>










































                            <Col>
                                <Link to='/journal/Tax' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">9.Arbitration as a Tool to Resolve International Tax Disputes  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Priya Krithika Devi V  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.5854748
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>
                            <Col>
                                <Link to='/journal/Care' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">10.Impact Of Dumping and Health Care  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author   - Sheikh Shadab Rana.  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:  www.doi.org/10.5281/zenodo.5854746
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>
                            <Col>
                                <Link to='/journal/Roadway' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">11.Smart Contracts Roadway to Global Village </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author    - G. Srividhya Iyer.  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.5854734
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>
                            <Col>
                                <Link to='/journal/Forensic' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">12.At The Cusp of Law & Psychology An Analysis of Forensic Psychiatry And Its Intersection With Legislature And Legal Proceedings </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author   - Sanika Fegade  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:  www.doi.org/10.5281/zenodo.5854742
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>





























                            <Col>
                                <Link to='/journal/Homo' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">13.Legality of Homosexual marriages in India</Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author    - Mumal Kunwar Bhati & Nikunj Pandey  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.5856436
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>

                            <Col>
                                <Link to='/journal/Trade' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">14.Preferential Trade Agreements Benefits or Determinants </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Khuloos Aziz Chawla  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:  www.doi.org/10.5281/zenodo.5856428
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>

                            <Col>
                                <Link to='/journal/Equity' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">15.Dismissing Binaries: Unlocking India’s Potential for Equity and Inclusivity via Legislative Reform focused on Linguistics  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Reonia Mathew</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.5884951
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>











                            <Col>
                                <Link to='/journal/Amazon' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">16.The Amazon Inferno Combating Deforestation Under International Law  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author   - Apurva Ambasth. </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:  www.doi.org/10.5281/zenodo.5856438
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>
















                            <Col>
                                <Link to='/journal/Problems' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">17.Deprivation Of Right to Life by Medical Negligence – Problems and Solutions </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Gururaj D. Devarhubli & Bushra Sarfaraj Patel</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:www.doi.org/10.5281/zenodo.5884937
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>



                            <Col>
                                <Link to='/journal/Shadow' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">18.Domestic Violence Against Women in India: A Shadow Pandemic  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author– Ashwini</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:www.doi.org/10.5281/zenodo.58869747
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>



                            <Col>
                                <Link to='/journal/Seeds' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">19.Patentability of Genetically Modified Seeds </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Shristi Keshri </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:www.doi.org/10.5281/zenodo.5884937
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>












                            <Col>
                                <Link to='/journal/Muslim' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">20.Comparative Study of Marriage in Muslim and Jewish Law </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Maanvi Trivedi & Pranav </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:www.doi.org/10.5281/zenodo.5893467
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>








                            <Col>
                                <Link to='/journal/Delays' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">21.Delays In Corporate Insolvency Resolution Process: Has the IBC Met Its Purpose?</Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Shivansh Mani Sharma </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:www.doi.org/10.5281/zenodo.5893471
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>



                            </Col>





                            <Col>
                                <Link to='/journal/Develop' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">22.Legal System and Economic Development of India </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author   - Iqra Mir</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:www.doi.org/10.5281/zenodo.5894887
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>




                            <Col>
                                <Link to='/journal/Bed' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">23.Death-Bed Gift: Neither A Gift nor A Legacy </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author   - Anu Nivetha. S </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:www.doi.org/10.5281/zenodo.5894889
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>




                            <Col>
                                <Link to='/journal/Connection' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">24.Understanding The Connection Between Family Courts and Gender Bias  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Aditi Mishra </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:www.doi.org/10.5281/zenodo.5903371
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>















                            <Col>
                                <Link to='/journal/Section' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">25.Analysis of Section 185 & 186 of the Companies Act, 2013 </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Suveer Dubey   </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:www.doi.org/10.5281/zenodo.5907582
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>


                            <Col>
                                <Link to='/journal/Nbfc' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">26.Evolution of Regulatory Framework of NBFCs </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author   - Kritika Mundra  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:www.doi.org/10.5281/zenodo.5906150
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>


                            <Col>
                                <Link to='/journal/Lion' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">27.Whether The Existing Laws and Policies Are Sufficient for The Protection of Lion Tailed Monkeys – An Analysis   </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  – Adv. Chithranjali R Nair</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.5907480
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>


                            <Col>
                                <Link to='/journal/Forms' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">28.Patenting of Life Forms </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Nandan Malhotra  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:www.doi.org/10.5281/zenodo.5906557
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>






                            <Col>
                                <Link to='/journal/Firms' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">29.Idea – Expression Dichotomy: A Comparative Study of Legal Application In UK, USA And India</Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Anannya Shree Adhikari  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:www.doi.org/10.5281/zenodo.5911189
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>






                            <Col>
                                <Link to='/journal/Factory' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">30.Appreciable Adverse Effect on Competition Factors and Applicability </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Akhil Madan & Samyukta Rawat  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.5914625
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>








                            <Col>
                                <Link to='/journal/Cybersec' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">31.‘Cyberwar’ – Obscure Domain of International Law  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Priyanka Vaidyanath </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.5915560
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>




                            <Col>
                                <Link to='/journal/Lifestyle' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">32.Rape: Is It a Lifestyle or A Behavioural Problem?  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Akshita Sharma  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:  www.doi.org/10.5281/zenodo.5931993
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>


















                            <Col>
                                <Link to='/journal/Justices' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">33.Juvenile Courts and Juvenile Justice: The Similarities and Differences in Present Scenario  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Shipra Mishra & Dr. Sadaf Khan  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI:   www.doi.org/10.5281/zenodo.5940019
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>



                            <Col>
                                <Link to='/journal/Teacher' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">34.Reflection of Teaching of Geeta in Indian Constitution  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Romil Aryan   </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.5940941
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>










                            <Col>
                                <Link to='/journal/Eccode' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">35.Ecocide </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Anavi Nagpal </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.5949218
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>






                            <Col>
                                <Link to='/journal/Taxes' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">36.Reforms in Direct Taxes Through Union Budgets- Pre and Post- 1991 Reforms  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author- Vedika Gagrani    </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.5949019
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>







                            <Col>
                                <Link to='/journal/Porn' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">37.The Big Picture of Child Pornography  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Sanya Shah  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI: www.doi.org/10.5281/zenodo.5962148
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>








                        </Row>
                    </div>


                    <center><h3 className="mt-5">Volume 2 - Issue 1 </h3></center>
                    <br></br>
                    <br></br>
                    <div className="forms-options">
                        <Row>
                            <Col>
                                <Link to='/journal/Ruling' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">1.Concept of Advance ruling under Goods and Services Tax Act  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Sonali Awasthi</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5745380
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>





                            <Col>
                                <Link to='/journal/Right' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">2.Right to Vote - Participation in Democracy  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Mehendi Mazumdar</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI -www.doi.org/10.5281/zenodo.5748075
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>



                            <Col>
                                <Link to='/journal/Roadmap' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">3.The Roadmap for Inclusion Of Petroleum Under GST   </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Agrima Shankar & Eesha Kalve</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI -www.doi.org/10.5281/zenodo.5748075
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>





                            <Col>
                                <Link to='/journal/Medical' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">4.Medical Examination and Its Evidentiary Value in Trials - Sandra Lisa Philip  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author   - Sandra Lisa Philip</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5752568
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>



                            <Col>
                                <Link to='/journal/Govt' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">5.Case Comment - G. Achyut Kumar V. State of Odisha (2020) </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author   - Raashi Agarwal</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5751869
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>





                            <Col>
                                <Link to='/journal/Super' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">6.FSLRC and the Concept of Super Regulator  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author   - Shakshi Kothari</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5758988
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>






                            <Col>
                                <Link to='/journal/Anti' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">7.Anti-Competitive Agreements Vis-A-Vis Mergers and Acquisitions - A Comparison Between India, US and EU   </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Parvathy Giri</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5770696
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>




                            <Col>
                                <Link to='/journal/Men' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">8.Domestic Violence Against Men in India - A Serious Issue  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author   - Preeti Nayak</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI -www.doi.org/10.5281/zenodo.5770690
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>







                            <Col>
                                <Link to='/journal/How' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">9.How Do Lawmakers Decide Punishments for Different Crimes  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author   - Smith John Colaco </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI -www.doi.org/10.5281/zenodo.5772970

                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>






                            <Col>
                                <Link to='/journal/Mind' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">10.Unsoundness Of Mind in Legal Parlance   </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author   - Sarthak Bhatia</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5773012

                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>






                            <Col>
                                <Link to='/journal/Internet' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">11.Case Comment on Internet and Mobile Association of India v. Reserve Bank of India (AIR 2021 SC 2720)   </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Tejasswini L</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5774134

                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>




                            <Col>
                                <Link to='/journal/China' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">12.India thwarts Chinas Hostile Takeover Bids during Covid-19    </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Arushi Malik Mehta</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5774968

                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>





                            <Col>
                                <Link to='/journal/Practice' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">13.Anthropology of Essential Religious Practice Doctrine    </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Charvi Duggal & Akanksha</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI -www.doi.org/10.5281/zenodo.5777237

                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>












                            <Col>
                                <Link to='/journal/Overview' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">14. An Overview About the Legalisation of Live-in -Relationship in India  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Shona.K.P & C. Salini   </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI -www.doi.org/10.5281/zenodo.5778508

                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>










                            <Col>
                                <Link to='/journal/Reservation' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">15.Reservation in India An impeding need for reform     </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Maitra M. Badagi</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5778752

                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>










                            <Col>
                                <Link to='/journal/Patent' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">16.Patent 101 Basics of patent and the laws concerned as per India    </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Anindo Chatterjee</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI -www.doi.org/10.5281/zenodo.5778498

                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>






                            <Col>
                                <Link to='/journal/Digital' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>


                                        <Card.Body>
                                            <Card.Title className="journytitles">17.DIGITAL INK- EMERGING TREND OF CONTRACTS Enforceability and Validity of Online Contracts and Electronic Signatures </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Yashas Malik</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI -www.doi.org/10.5281/zenodo.5784427

                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>







                            <Col>
                                <Link to='/journal/Concept' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>


                                        <Card.Body>
                                            <Card.Title className="journytitles">18.Concept of Marital Rape and the Need for Change</Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author   - Ms. Radha Sharan & Adv. Pragya Singh </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5786888

                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>





                            <Col>
                                <Link to='/journal/Prisoner' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>


                                        <Card.Body>
                                            <Card.Title className="journytitles">19.Prisoner’s Amelioration Under the Anatomy of Constitution of India </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Mehak Chadha </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI -www.doi.org/10.5281/zenodo.5786892

                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>
























                            <Col>
                                <Link to='/journal/Kunj' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>


                                        <Card.Body>
                                            <Card.Title className="journytitles">20.Case Analysis of Kunj Behari Lal Butail and Ors. V. State of Himachal Pradesh and Ors. [(2000) 3 Scc 40]  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author- Meher Mansi </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5789530

                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>






                            <Col>
                                <Link to='/journal/Trafficking' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>


                                        <Card.Body>
                                            <Card.Title className="journytitles">21.Human Trafficking in India Before and After the Criminal Amendment Act, 2013 </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Anusree J & Malu A M Nair  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5789534

                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>











                            <Col>
                                <Link to='/journal/Indecent' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>


                                        <Card.Body>
                                            <Card.Title className="journytitles">22.Obscenity and Indecent Representation of Women In India  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Arya Rajan J R  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5789540
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>










                            <Col>
                                <Link to='/journal/Rape' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>


                                        <Card.Body>
                                            <Card.Title className="journytitles">23.An Analysis on the Criminality of Marital Rape in India  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author - Neha Susan Thomas </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI -  www.doi.org/10.5281/zenodo.5791203
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>









                            <Col>
                                <Link to='/journal/Coal' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>


                                        <Card.Body>
                                            <Card.Title className="journytitles">24.Legal and Economic Consequences of the Coal Scam Case, 2014 </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Nayana J M   </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5792123
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>





                            <Col>
                                <Link to='/journal/Genital' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>


                                        <Card.Body>
                                            <Card.Title className="journytitles">25.Genital Mutilation in Females Is It Legal </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Mohd Aqib Aslam  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI -  www.doi.org/10.5281/zenodo.5792121
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>




























                            <Col>
                                <Link to='/journal/Trip' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>


                                        <Card.Body>
                                            <Card.Title className="journytitles">26.An Analysis of The Trips Agreement and The Trips-Compliant Indian Patent Regime  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Soumyadip Panda & Anshu Singh  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI -   www.doi.org/10.5281/zenodo.5799388
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>










                            <Col>
                                <Link to='/journal/Sexual' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>


                                        <Card.Body>
                                            <Card.Title className="journytitles">27.Sexual Harassment at Workplace  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Sheikh Aman Rana  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI -  www.doi.org/10.5281/zenodo.5802202
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>










                            <Col>
                                <Link to='/journal/Downfall' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>


                                        <Card.Body>
                                            <Card.Title className="journytitles">28.Downfall Of Investigative Journalism Need for Implementation Of New Protective Legislation or Neutralising The Misuse Of The Present Ones  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Ayushi Vyas & Divya Saxena </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI -  www.doi.org/10.5281/zenodo.5803648
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>









                            <Col>
                                <Link to='/journal/take' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>


                                        <Card.Body>
                                            <Card.Title className="journytitles">29.Right To Take Cognizance by Institutions Legal Discourse </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author  - Vaibhav Kartikeya Agrawal  </Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5805304
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>

                            <Col>
                                <Link to='/journal/PrisonerReforms' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">30. Prisons Reforms in India: A Critical Study on The Inhumane Conditions Prevailing in Indian Prisons
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - Sangeetha Lakshmi V
                                            </Card.Title>


                                            <Card.Text className="doi">
                                                DOI -  http://www.doi.org/10.5281/zenodo.5807640
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                            <Col>
                                <Link to='/journal/AmbitOfRight' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">31. Ambit Of Right of Private Defence Under Indian Penal Code
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - Sandhya Prabhakaran
                                            </Card.Title>


                                            <Card.Text className="doi">
                                                DOI -  http://www.doi.org/10.5281/zenodo.5810466
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                            <Col>
                                <Link to='/journal/AnalysisOfConsumerProtection' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">32. Analysis of Consumer Protection Act
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - Harshika Kapoor
                                            </Card.Title>


                                            <Card.Text className="doi">
                                                DOI -  http://www.doi.org/10.5281/zenodo.5810464
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                            <Col>
                                <Link to='/journal/PreventingDefection' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">33. Preventing Defection in India
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - Kushagra Singh Kourav
                                            </Card.Title>


                                            <Card.Text className="doi">
                                                DOI -  http://www.doi.org/10.5281/zenodo.5810470
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>



















                            <Col>
                                <Link to='/journal/An' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">34.An Analysis of The Constitutionality of Law of Sedition
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - A. Siva Sangari & R. Jeeva Dharshini
                                            </Card.Title>


                                            <Card.Text className="doi">
                                                DOI -  www.doi.org/10.5281/zenodo.5818337
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>







                            <Col>
                                <Link to='/journal/Exclusive' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">35. Exclusive Rights of Cinematography Owners in Film Industry
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - Lavanya Pandiyan
                                            </Card.Title>


                                            <Card.Text className="doi">
                                                DOI -  www.doi.org/10.5281/zenodo.5818341
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>



                            <Col>
                                <Link to='/journal/Union' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">36.Right To Life and Personal Liberty: Navtej Singh Johar Vs Union of India
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author- Neelargho Ray
                                            </Card.Title>


                                            <Card.Text className="doi">
                                                DOI -  www.doi.org/10.5281/zenodo.5921840
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                        </Row>
                    </div>



                    <center><h3 className="mt-5">Volume 1 - Issue 3 (Nov 2021 to Dec 2021)</h3></center>
                    <br></br>
                    <br></br>
                    <div className="forms-options">
                        <Row>
                            <Col>
                                <Link to='/journal/Indian' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">1.The Indian Tribunal Complication Eterne  </Card.Title>
                                            <Card.Title>

                                                <Card.Title className="journytitles"> Author -  Esha Ghosh and Ambika Kashyap</Card.Title>
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI -  https://www.doi.org/10.5281/zenodo.5652766
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>
                            <Col>
                                <Link to='/journal/Safeguard' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">2. Constitutional Safeguards to the Right to Life
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author -  Mihir Asolekar
                                            </Card.Title>


                                            <Card.Text className="doi">
                                                DOI -  https://www.doi.org/10.5281/zenodo.5652718
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>





                            <Col>
                                <Link to='/journal/Study' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">3. A Comparative Study on Reliability Of Eye-Witness Testimony
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - Parisa Praneetha
                                            </Card.Title>


                                            <Card.Text className="doi">
                                                DOI -  www.doi.org/10.5281/zenodo.5669264
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>




                            <Col>
                                <Link to='/journal/Material' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">4. Criminalizing Marital Rape in India
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author -  Yoshita Phaphat
                                            </Card.Title>


                                            <Card.Text className="doi">
                                                DOI -  www.doi.org/10.5281/zenodo.5669321
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                            <Col>
                                <Link to='/journal/Comment' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">5. Case Comment on - S.R. Bommai v. Union of India, (1994) 3 SCC 1 – An Odyssey of Power & Justice
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author -  Prathik Choudhary
                                            </Card.Title>


                                            <Card.Text className="doi">
                                                DOI -  http://www.doi.org/10.5281/zenodo.5675837
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                            <Col>
                                <Link to='/journal/Speedy' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">6. Speedy Disposal of Matrimonial Disputes in India- A Race Against Time
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author -  Vrinda Chaturvedi
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI -  http://www.doi.org/10.5281/zenodo.5675999
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>



                            <Col>
                                <Link to='/journal/Article' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">7. An Analysis of Article 370 and Article 35A of the Constitution of India and the Implications of its Revocation
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - John Kevin Kennedy
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI -   www.doi.org/10.5281/zenodo.5683075
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>






                            <Col>
                                <Link to='/journal/Data' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">8. DATA PROTECTION LAWS IN PORTUGAL
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - Krish Bhatia
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI -  www.doi.org/10.5281/zenodo.5702456
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                            <Col>
                                <Link to='/journal/Source' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">9. Precedents as a Source of Law
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - Vedant Bhardwaj Singh
                                            </Card.Title>

                                            <Card.Text className="doi">
                                                DOI -  www.doi.org/10.5281/zenodo.5705921
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                            <Col>
                                <Link to='/journal/ENVIRONMENTAL' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">10. ENVIRONMENTAL JUSTICE STORIES & STRUGGLES THE LEGAL AFTERMATH OF MUMBAI OIL SPILL CASES 2010-11
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author -  Divyanshu Saxena
                                            </Card.Title>


                                            <Card.Text className="doi">
                                                DOI -  http://www.doi.org/10.5281/zenodo.5711023
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                            <Col>
                                <Link to='/journal/RIGHTS' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">11. RIGHTS OF UNBORN CHILD
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author -  KRATIKA JAIN
                                            </Card.Title>


                                            <Card.Text className="doi">
                                                DOI -  http://www.doi.org/10.5281/zenodo.5711082
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>


                            <Col>
                                <Link to='/journal/Tenebrosity' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">12. Tenebrosity of the Divide – Assessing the impacts of Digital Divide with respect to the COVID-19 pandemic
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author -  Vani Dhaka
                                            </Card.Title>


                                            <Card.Text className="doi">
                                                DOI -  http://www.doi.org/10.5281/zenodo.5711113
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>








                            <Col>
                                <Link to='/journal/Cyber' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">13.Level Of Cyber Crimes During Covid-19 Pandemic
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - Lavanya Pandiyan
                                            </Card.Title>


                                            <Card.Text className="doi">
                                                DOI -   www.doi.org/10.5281/zenodo.5717291
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>




                            <Col>
                                <Link to='/journal/Human' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">14. Human Rights Violations In China
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - Yashasvi Bhede
                                            </Card.Title>


                                            <Card.Text className="doi">
                                                DOI -  www.doi.org/10.5281/zenodo.5717287
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>














                            <Col>
                                <Link to='/journal/Analysis' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">15. Analysis of Doctrine of Benefit of Doubt Apropos to Criminal Philosophy
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author -Soumya Sakshi Mishra
                                            </Card.Title>


                                            <Card.Text className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5719059
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>






                            {/* 
                            <Col>
                                <Link to='/journal/Imprison' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">16. Imprisonment and Recidivism
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author Neelargho Ray
                                            </Card.Title>

                                          
                                             <Card.Text  className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5719062
                                                </Card.Text>   
                                            
    

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col> */}






                            <Col>
                                <Link to='/journal/Women' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">17. Global Crisis [COVID-19] and its Impact
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - Kavyasri. S.J
                                            </Card.Title>


                                            <Card.Text className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5728030
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>







                            <Col>
                                <Link to='/journal/Crime' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">18. The Horrendous Crime of Acid Violence With Special Reference To Laxmi V. UOI
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - Anubhuti Sharma & Arsheya Chaudhry
                                            </Card.Title>


                                            <Card.Text className="doi">
                                                DOI -  www.doi.org/10.5281/zenodo.5719050
                                            </Card.Text>



                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>


                        </Row>

                    </div>






























                    <center><h3 className="mt-5">Volume 1 - Issue 2 (Sept 2021 to Oct 2021)</h3></center>
                    <br></br>
                    <br></br>
                    <div className="forms-options">
                        <Row>
                            <Col>
                                <Link to='/journal/Appointment' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">1. Appointment of Receiver </Card.Title>
                                            <Card.Title>
                                                Author - Nidhi Badal
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/journal/Comparative' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">2.  Comparative Analysis of Hindu and Muslim Law of Inheritance
                                            </Card.Title>

                                            <Card.Title>
                                                Author -  Hardik Daga
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/journal/constitutionalRight' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">3. Constitutional Validity of Disturbed Areas Act
                                            </Card.Title>

                                            <Card.Title>
                                                Author -  Abhishek Bhatia
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Link to='/journal/critical' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">4. Critical Analysis of Scope of Article 226 and Article 227 of the Indian Constitution
                                            </Card.Title>

                                            <Card.Title>
                                                Author - Ankita Ghosh
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/journal/cannabis'>
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">5. Decriminalization of Cannabis in India  </Card.Title>

                                            <Card.Title>
                                                Author - Sushant Bava
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/journal/firm' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">6. Dissolution of Firm under Companies Act, 2013 </Card.Title>

                                            <Card.Title>
                                                Author  - Tulsi Nath
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Link to='/journal/domestic' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">7. Domestic Violence and Misuse of Law in India Issues and Challenges  </Card.Title>
                                            <Card.Title>
                                                Author - Veena Goyal
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>


                        <Row>
                            <Col>
                                <Link to='/journal/Extortion' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">8. Extortion by Politicians, Police and Thugs, Clearly Visible and Visibly Ignored   </Card.Title>
                                            <Card.Title>
                                                Author - Himani Dhar
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>


                        <Row>
                            <Col>
                                <Link to='/journal/food' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">9.Food Security by Vertical Farming </Card.Title>
                                            <Card.Title>
                                                Author - Anusha naik
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>



                        <Row>
                            <Col>
                                <Link to='/journal/Functions' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">10.Functionality of Grievance Handeling Procedures  </Card.Title>
                                            <Card.Title>
                                                Author - Ananya Kashyap
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>



                        <Row>
                            <Col>
                                <Link to='/journal/international' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">11. International Commercial Arbitration – A Brief Overview  </Card.Title>
                                            <Card.Title>
                                                Author - Rishi Vaid
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>




                        <Row>
                            <Col>
                                <Link to='/journal/indians' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">12.Privatization of Agriculture in India   </Card.Title>
                                            <Card.Title>
                                                Author - Sahil Bajaj
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>



                        <Row>
                            <Col>
                                <Link to='/journal/trial' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">13.Trial Before Court of Sessions under CrPc A Critical Evaluation  </Card.Title>
                                            <Card.Title>
                                                Author - Gunjan Girwal
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>

                    </div>

                    <br />

                    <hr />

                    <br />

                    {/* <center><h3 className="mt-5">Volume 1 - Issue 2</h3></center> */}

                    <div className="forms-options">

                        {/* <Row>
                            <Col>
                            <Link to='/forms/Noc' >
                                <Card className="C_D card card-1" style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Title>NOC</Card.Title>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Link>

                            </Col>
                            <Col>
                                <Link to='/forms/BankOfBaroda' >
                                    <Card className="C_D card card-1" style={{ width: '18rem' }}>

                                        <Card.Body>
                                            <Card.Title>Bank of Baroda</Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>

                            </Col>
                            <Col>
                                <Card className="C_D card card-1" style = {{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Title>MS Chola</Card.Title>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card className="C_D card card-1" style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Title>GOVT.FORMS</Card.Title>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>
                                <Card className="C_D card card-1" style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Title>ELECTION</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>
                                <Card className="C_D card card-1" style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Title>INSURANCE</Card.Title>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row> */}
                    </div>



                    <br />

                    <hr />

                    <br />

                    <center><h3 className="mt-5">Volume 1 - Issue 1 (July 2021 to Aug 2021)</h3></center>
                    <br></br>
                    <br></br>
                    <div className="forms-options">
                        <Row>
                            {/* <Col>
                                <Link to='/journal/constitutional' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">1. Constitutional Right to Life And Personal Liberty - Navtej Singh Johar vs Union of India </Card.Title>
                                            <Card.Title>
                                                Author - Anurag Gupta
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col> */}
                            <Col>
                                <Link to='/journal/covid_impact' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">1.   Impact of COVID-19 & Lockdown on Mental Health of Adolescent and Adults
                                            </Card.Title>

                                            <Card.Title>
                                                Author - Karan Rathod
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            {/* <Col>
                                <Link to='/journal/law_of_tort' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">3. Law of Tort on Negligence – An Indian Legal Perspective
                                            </Card.Title>

                                            <Card.Title>
                                                Author - Neelargo Ray
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col> */}
                        </Row>

                        <Row>
                            <Col>
                                <Link to='/journal/legal' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">2. Legality and Legal Rights of Manual Sewage Workers
                                            </Card.Title>

                                            <Card.Title>
                                                Author - Anurag Gupta
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/journal/legal_maxim'>
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">3. Legal Maxim - SIC UTERE TUO UT ALIENUM NON LAEDAS </Card.Title>

                                            <Card.Title>
                                                Author - Shivraj Singh
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/journal/legal_policy_gap' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">4. Legal Policy Gaps in Export Credit Guarantee Corporation of India (ECGC)  </Card.Title>

                                            <Card.Title>
                                                Author - Vinayak Garje
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Link to='/journal/social_exclusion' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">5  . Social Exclusion - Societal Attitudes Towards Differently Abled People  </Card.Title>
                                            <Card.Title>
                                                Author -  Arafat Khan
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>

                    </div>

                    <br />

                    <hr />

                    <br />

                    {/* <center><h3 className="mt-5">Volume 1 - Issue 2</h3></center> */}

                    <div className="forms-options">

                        {/* <Row>
                            <Col>
                            <Link to='/forms/Noc' >
                                <Card className="C_D card card-1" style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Title>NOC</Card.Title>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Link>

                            </Col>
                            <Col>
                                <Link to='/forms/BankOfBaroda' >
                                    <Card className="C_D card card-1" style={{ width: '18rem' }}>

                                        <Card.Body>
                                            <Card.Title>Bank of Baroda</Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>

                            </Col>
                            <Col>
                                <Card className="C_D card card-1" style = {{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Title>MS Chola</Card.Title>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card className="C_D card card-1" style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Title>GOVT.FORMS</Card.Title>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>
                                <Card className="C_D card card-1" style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Title>ELECTION</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>
                                <Card className="C_D card card-1" style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Title>INSURANCE</Card.Title>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row> */}
                    </div>
                </Container>
                <Footers />
            </div>
        )
    }
}




