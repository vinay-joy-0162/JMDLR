import React from "react";
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import { BsDiamondFill } from "react-icons/bs";

const Wordname = () => (
    <div>

        
            <Container className="word-list">
            <div className="word-limit">
                <h3 className="sub-word-limit"><u>Word Limit</u></h3>
                <h5 className="sub-word-limit1">Following word limit should strictly be adhered to:</h5>
                <br></br>
                <br></br>
                
                <Row xs={1} md={2} lg={2}>
                    <Col><BsDiamondFill  /> Short Articles: (1500 - 2500 words, including footnotes)</Col>
                    <br></br>
                    <br></br>
                    
                    <Col> <BsDiamondFill /> Long Articles: (2500+  words, including footnotes)</Col>
                    <br></br>
                    <br></br>

                    <Col><BsDiamondFill /> Research Papers: (2000+  words, including footnotes)</Col>
                    <br></br>
                    <br></br>

                    <Col> <BsDiamondFill /> Case Comments: (1000 - 2500 words, including footnotes)</Col>
                    <br></br>
                    <br></br>

                    <Col> <BsDiamondFill /> Legislative Comments: (1000 - 2500 words, including footnotes)</Col>
                    <br></br>
                    <br></br>

                    <Col><BsDiamondFill /> Book Reviews: (1000 - 3500 words, including footnotes)</Col>

                    
                </Row>
         </div>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         {/* <h6><center><b>Note:</b> Abstract should be upto 300 words only</center></h6> */}
            
            <div >
                <h3 className="sub-heading3"><u>Exclusivity and Copyright</u></h3>
                <p className="sub-para">Submitted manuscripts should not be simultaneously considered by any other publication at
                the time of submission.
                The author/s undertake to inform Journal on Multi-Disciplinary Legal Research  (JMDLR) immediately in case the manuscript
                under consideration OR published manuscript is under consideration for publication elsewhere.
         Authors of articles published in Journal of Multi-Disciplinary Legal Research remain the copyright holders and grant third parties the right to use, reproduce, and share the article according to the Creative Commons license agreement. Journal on Multi-Disciplinary Legal Research  (JMDLR) reserves all the right to reject any paper at any stage of the publication process and it is the complete discretion of the editorial board and the authors have no right to object the reason behind such a decision. </p>

            </div>

          

        </Container>

    </div>
);

export default Wordname;