import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Ecardmodules from "./EditorialCardmodules";



const cardtitle1 = "Editor-in-Chief";
const carddescp1 = "Mr.Rajiv Ranjan Email: ediot.jslsr@gmail.com";

const cardtitle2 = "Editor-in-Chief";
const carddescp2 = "Mr.Rajiv Ranjan Email: ediot.jslsr@gmail.com";
const cardtitle3 = "Editor-in-Chief";
const carddescp3 = "Mr.Rajiv Ranjan Email: ediot.jslsr@gmail.com";

const cardtitle4 = "Editor-in-Chief";
const carddescp4 = "Mr.Rajiv Ranjan Email: ediot.jslsr@gmail.com";

const cardtitle5 = "Editor-in-Chief";
const carddescp5 = "Mr.Rajiv Ranjan Email: ediot.jslsr@gmail.com";
const cardtitle6 = "Editor-in-Chief";
const carddescp6 = "Mr.Rajiv Ranjan Email: ediot.jslsr@gmail.com";

const cardtitle7 = "Editor-in-Chief";
const carddescp7 = "Mr.Rajiv Ranjan Email: ediot.jslsr@gmail.com";
const cardtitle8 = "Editor-in-Chief";
const carddescp8 = "Mr.Rajiv Ranjan Email: ediot.jslsr@gmail.com";


const cardtitle9 = "Editor-in-Chief";
const carddescp9 = "Mr.Rajiv Ranjan Email: ediot.jslsr@gmail.com";



const Editorialcarddetails = ()  =>(
  <div className="text-field-design">
    <Container>
    <Row>
    <Col>
    <Ecardmodules cardtitle = {cardtitle1} cardText = {carddescp1} />
    </Col>
    <Col>
    <Ecardmodules cardtitle = {cardtitle2} cardText = {carddescp2} />
    </Col>
    <Col>
    <Ecardmodules cardtitle = {cardtitle3} cardText = {carddescp3} />
    </Col>
  </Row>

    <br></br>
    <br></br>
<Row>
    <Col>
    <Ecardmodules cardtitle = {cardtitle4} cardText = {carddescp4} />
    </Col>
    <Col>
    <Ecardmodules cardtitle = {cardtitle5} cardText = {carddescp5} />
    </Col>
    <Col>
    <Ecardmodules cardtitle = {cardtitle6} cardText = {carddescp6} />
    </Col>
    </Row>

    <br></br>
    <br></br>

    <Row>
    <Col>
    <Ecardmodules cardtitle = {cardtitle7} cardText = {carddescp7} />
    </Col>
    <Col>
    <Ecardmodules cardtitle = {cardtitle8} cardText = {carddescp8} />
    </Col>
    <Col>
    <Ecardmodules cardtitle = {cardtitle9} cardText = {carddescp9} />
    </Col>
    </Row>
  </Container>
  </div>
);

export default Editorialcarddetails;