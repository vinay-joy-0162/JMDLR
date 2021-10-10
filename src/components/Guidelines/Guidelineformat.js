import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import  {AiOutlineCheck}  from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
export  class Guidelineformats extends React.Component{
    render(){
        return(
            <div>
                <Container>
                    <h3 className="guide-formats"><u>Formats</u></h3>
                    <div className="guide-format-list">

             
            <Row xs={1} md={2} lg={2}>
                    <Col>< AiOutlineCheck />  The first page of the manuscript should contain the name of the paper, the name of the authors, and their institutional affiliation followed by an abstract.</Col>
                    <br></br>
                    <br></br>

                    <br></br>
                    <br></br>
                   
                    
                    <Col> <AiOutlineCheck/>  The second page should commence with the main body of the manuscript.</Col>
                    <br></br>
                    <br></br>
                   
                    <br></br>
                    <br></br>
                    

                    <Col><AiOutlineCheck />  The name of the authors and their institutional affiliation must be mentioned in the manuscript.</Col>
                    <br></br>
                    <br></br>
                  
                    <br></br>
                    <br></br>
                  
                    

                    <Col> <AiOutlineCheck />  The main body of the manuscript should be in Times New Roman style, font size 12, with 1.5 line spacing and footnotes in Times New Roman Style, Size 10, with 1.0 line spacing. All headings must have uniform formatting.</Col>
                  
                    <br></br>
                    <br></br>

                    <br></br>
                    <br></br>

                 
                 

                    <Col> <AiOutlineCheck />  Texts and footnotes should conform to the Bluebook 20th Edition.</Col>
                </Row>

                    </div>

                    <Card  className="card" >
                    <Card.Header className="card-header"><b>Requirements for Submissions</b></Card.Header>
                    <Card.Body>

                    <Row xs={1} md={2} lg={1}>
                    <Card.Text>
                        
                    <Col>< FaArrowRight />    The manuscript in Word format (.doc or .docx) as a mail attachment. PDF/other formats/hard copy submissions will not be accepted.</Col></Card.Text>
                    <br></br>
                    <br></br>
                 
                    
                    
                    <Card.Text> <Col>  The body of the first page must mention the following :</Col> </Card.Text>
                    <br></br>
                    <br></br>
                   
                    

                    <Card.Text><Col><FaArrowRight />  Name of the author(s)</Col> </Card.Text>
                    <br></br>
                    <br></br>
                   
                    

                    <Card.Text><Col> <FaArrowRight />  Contact number</Col></Card.Text>
                    <br></br>
                    <br></br>
                 

                    <Card.Text><Col> <FaArrowRight />  The academic year of the course pursuing (if applicable).</Col></Card.Text>
                    <br></br>
                    <br></br>
                 
                    <Card.Text><Col> <FaArrowRight />  Qualifications (if applicable)</Col></Card.Text>
                    <br></br>
                    
                  
                    {/* <Card.Text><Col> <FaArrowRight/>  Institutional affiliation</Col></Card.Text> */}
                    <br></br>
                    <br></br>
                    
                    <Card.Text><Col> <FaArrowRight />  Title of the paper</Col></Card.Text>
                    <br></br>
                    <br></br>
                 
                    <Card.Text><Col> <FaArrowRight />  The type of submission (Long Article, Essay/Short Article, Case note & Legislative Comment)</Col></Card.Text>
                </Row> 


                     

               

                    </Card.Body>
                </Card>
           



                </Container>
            </div>
        )
    }
}