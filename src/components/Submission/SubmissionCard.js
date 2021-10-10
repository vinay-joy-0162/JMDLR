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

                    <div className="card2">

                        <Card >
                            <Card.Header className="card-header2"><b>Submission</b>s</Card.Header>
                            <Card.Body>

                                <Card.Text>
                                    All submissions must be emailed to <b>submissions.jmdlr@gmail.com</b>, with the subject as ‘Manuscript Submission’ and a declaration to the effect that the manuscript is an original and previously unpublished work of the author/s.

                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>

                    <div className="card1">

                        <Card  >
                            <Card.Header className="card-header1" ><b>Publication Fees</b></Card.Header>
                            <Card.Body>

                                <Card.Text>
                                   Single Author: Rs.1000 <br></br> <br></br>
                                   Co-Author: Rs.1200
                                </Card.Text>
                                <br></br>
                                <br></br>


                                {/* <Card.Text><b>No Publication Fees</b></Card.Text> */}




                            </Card.Body>
                        </Card>
                    </div>


                </Container>
            </div>
        )
    }
}