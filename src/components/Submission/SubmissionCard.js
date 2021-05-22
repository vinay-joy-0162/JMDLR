import React from "react";
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import '../Styles/submission.css';

export class Submissionpage extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <h2 className="mt-5" style={{fontFamily: 'serif'}}>Eligibility</h2>
                    <p className="mt-3" style={{fontFamily:'verdana'},{fontSize:'large'},{fontStyle:'inherit'}}>Law students pursuing the three year LL.B, as well as the five year integrated LL.B.
                    program, students pursuing LL.M. or Ph.D.,
                    Research Associates, Academicians, Educators, and professionals and practitioners
                      in any field of Law are eligible to submit</p>

                <div className="card1">

                    <Card  >
                        <Card.Header className="card-header1" >Theme</Card.Header>
                        <Card.Body>
                            
                            <Card.Text>
                               Any topic realted to LAW!!
                         </Card.Text>
                         <br></br>
                         <br></br>

                         <Card.Text>
                              <h4><b>No publication Fees</b></h4>
                         </Card.Text>
                           
                        </Card.Body>
                    </Card>
                    </div>
                

                </Container>
            </div>
        )
    }
}