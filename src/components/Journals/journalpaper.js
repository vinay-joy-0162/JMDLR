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
                                                
                                               <Card.Title className = "journytitles"> Author -  Esha Ghosh and Ambika Kashyap</Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
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

                                          
                                             <Card.Text  className="doi">
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

                                          
                                             <Card.Text  className="doi">
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

                                          
                                             <Card.Text  className="doi">
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

                                          
                                             <Card.Text  className="doi">
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

                                             <Card.Text  className="doi">
                                                DOI -  http://www.doi.org/10.5281/zenodo.5675999
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
                            <Col>
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
                            </Col>
                            <Col>
                                <Link to='/journal/covid_impact' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">2.   Impact of COVID-19 & Lockdown on Mental Health of Adolescent and Adults
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
                            <Col>
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
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Link to='/journal/legal' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">4. Legality and Legal Rights of Manual Sewage Workers 
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
                                            <Card.Title className="journytitles">5. Legal Maxim - SIC UTERE TUO UT ALIENUM NON LAEDAS </Card.Title>

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
                                            <Card.Title className="journytitles">6. Legal Policy Gaps in Export Credit Guarantee Corporation of India (ECGC)  </Card.Title>

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
                                            <Card.Title className="journytitles">7. Social Exclusion - Societal Attitudes Towards Differently Abled People  </Card.Title>
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




