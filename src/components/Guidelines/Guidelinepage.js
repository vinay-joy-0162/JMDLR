import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from 'react-bootstrap';
import { BsDiamondFill } from "react-icons/bs";
export  class Guidelinepages extends React.Component{
    render(){
        return(
            <div>
                <Container>
                    <h3 className="guideline-h1"><u>General instructions</u></h3>
                    <div className="guideline-list">

             
            <Row xs={1} md={2} lg={2}>
                    <Col><BsDiamondFill  />  Long articles, short articles and research papers must be accompanied by an abstract not exceeding 300 words.</Col>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    
                    <Col> <BsDiamondFill />  Up to 2 co-authors are allowed for all categories, except Case Notes and Legislative Comments wherein co-authorship is not permitted.</Col>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    

                    <Col><BsDiamondFill />  All works must be original and unpublished, and must not be pending for review before any other journal. Any form of plagiarism will result in immediate disqualification for publication in JMDLR.</Col>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    

                    <Col> <BsDiamondFill />  While it is advisable to adhere to the word limits of each category, the journal may be flexible on the word limit depending on the quality of the article.</Col>
                    <br></br>
                    <br></br>

                    
                </Row>

                    </div>


                </Container>
            </div>
        )
    }
}