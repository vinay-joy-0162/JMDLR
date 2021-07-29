import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import '../Styles/journalPage.css';
import {Navigationbar} from "../partials/Navbar.component";
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

              <center><h3 className="mt-5">Journal papers on the Laws</h3></center>

              <br />
              
              <hr />

              <br />

              <center><h3 className="mt-5">Volume 1 - Issue 1</h3></center>
              <br></br>
              <br></br>
                    <div className = "forms-options">
                        <Row>
                            <Col>
                                <Link to='/journal/constitutional' >
                                    <Card className="C_D card card-1" style={{ width: '19rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">Constitutional Right to Life And Personal Liberty - Navtej Singh Johar vs Union of India - Anurag Gupta</Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/journal/covid-impact' >
                                    <Card className="C_D card card-1" style={{ width: '19rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">   Impact of COVID-19 & Lockdown on Mental Health of Adolescent and Adults - Karan Rathod
</Card.Title>
                                            <Card.Text>                        

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                            <Link to='/journal/law-of-tort' >
                                <Card className="C_D card card-1" style={{ width: '19rem' }}>

                                    <Card.Body>
                                        <Card.Title className="journytitles">Law of Tort on Negligence – An Indian Legal Perspective - Neelargo Ray
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
                                <Link to='/journal/legality-and-legal-right' >
                                    <Card className="C_D card card-1" style={{ width: '19rem' }}>
                                            <Card.Body>
                                                <Card.Title className="journytitles"> Legality and Legal Rights of Manual Sewage Workers - Anurag Gupta
</Card.Title>
                                                <Card.Text>

                                                </Card.Text>

                                            </Card.Body>
                                        </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/journal/legal-maxim'>
                                    <Card className="C_D card card-1" style={{ width: '19rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">Legal Maxim - SIC UTERE TUO UT ALIENUM NON LAEDAS -Shivraj Singh</Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                            <Link to='/journal/legal-policy-gap' >
                                <Card className="C_D card card-1" style={{ width: '19rem' }}>
                                    <Card.Body>
                                        <Card.Title className="journytitles"> Legal Policy Gaps in Export Credit Guarantee Corporation of India (ECGC) - Vinayak Garje</Card.Title>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                        
                                </Card>
                            </Link>

                            </Col>
                            
                        </Row>
                        <Row>
                            <Col>
                                <Link to='/journal/social-exclusion' >
                                    <Card className="C_D card card-1" style={{ width: '19rem' }}>
                                            <Card.Body>
                                                <Card.Title className="journytitles">Social Exclusion - Societal Attitudes Towards Differently Abled People - Arafat Khan</Card.Title>
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

                      <div className = "forms-options">

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



// import React from "react";
// import Container from "react-bootstrap/Container";
// import {Navigationbar} from "../partials/Navbar.component";
// import Footers from "../partials/Footer";
// import constitutional from "../../pdfs/constitutional.pdf";

// export class journal extends React.Component {
//   render(){
//     return(
//       <div>
//       <Navigationbar />
//       <Container>
        
//       <center><h3 className="mt-5">Journal papers on the Laws</h3></center>
//       <iframe 
//                 src={constitutional}
//                 style={{height:'100vh'}} 
//                 height="100%" 
//                 width="100%" 
//                 title = 'x1' 
//                 frameBorder="0"
//                 marginHeight="0"
//                 marginWidth="0"
//                 />
//       </Container>
//       <Footers />
//       </div>
//     )
//   }
// };
