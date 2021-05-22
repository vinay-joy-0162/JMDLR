import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import  {AiOutlineCheck}  from "react-icons/ai";
import '../Styles/aboutus.css';


const Aboutlistingspage = () => (

    <div>
        <Container className="submission">

            <h4 className="about-title"><u>Types of Submissions</u></h4>

            <br></br>
            <br></br>

            <Row xs={1} md={2} lg={2}>
                <Col><AiOutlineCheck /> Short Articles: (1000-2500 words, including footnotes)</Col>
                <br></br>
                <br></br>

                <Col> <AiOutlineCheck />Long Articles: (2500-4000 words, including footnotes)</Col>
                <br></br>
                <br></br>

                <Col><AiOutlineCheck />Book Reviews: (1000-3500 words, including footnotes)</Col>
                <br></br>
                <br></br>

                <Col> <AiOutlineCheck />Case Comments: (1000-2500 words, including footnotes)</Col>
                <br></br>
                <br></br>

                <Col> <AiOutlineCheck />Legislative Comments: (1000-2500 words, including footnotes)</Col>
                <br></br>
                <br></br>

                <Col><AiOutlineCheck />Research Papers: (2000-8000 words, including footnotes)</Col>
            </Row>

          

                <Card  className="card" >
                    <Card.Header className="card-header"><b>Query Details</b></Card.Header>
                    <Card.Body>

                        <Card.Text>
                        <b>Office Address: </b>C-602, Bhumiraj Manor, Sector 14, Sanpada, Navi Mumbai, 400705, Maharashtra </Card.Text>
                         <Card.Text><b>Email</b>: editorinchief.jmdlr@gmail.com</Card.Text>
                         <Card.Text> <b>Contact No:</b> 9372988202</Card.Text>
                       

               

                    </Card.Body>
                </Card>
           
        </Container>


    </div>
)

export default Aboutlistingspage;