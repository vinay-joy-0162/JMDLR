import React from "react";
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import '../Styles/submission.css';

export class Submissionpage extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <h2 className="sub-heading2" ><u>Eligibility</u></h2>
                    <p className="sub-para1"> Law students pursuing the three year LL.B, as well as the five year integrated LL.B.
                    program, students pursuing LL.M. or Ph.D.,
                    Research Associates, Academicians, Educators, and professionals and practitioners
                      in any field of Law are eligible to submit</p>

                <div className="card1">

                    <Card  >
                        <Card.Header className="card-header1" ><b>Theme</b></Card.Header>
                        <Card.Body>
                            
                            <Card.Text>
                               Any topic realted to LAW!!
                         </Card.Text>
                         <br></br>
                         <br></br>

                        
                         <Card.Text><b>No Publication Fees</b></Card.Text>
                       
                       

                           
                        </Card.Body>
                    </Card>
                    </div>
                

                </Container>
            </div>
        )
    }
}