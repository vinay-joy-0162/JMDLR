import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Card from 'react-bootstrap/Card';
import { Row, Col, Button } from 'react-bootstrap';

class Issue extends React.Component{
    render(){
        return (
            <div>
<Row>
                            <Col>
                                <Link to='/journal/Federation' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">1.Case Comment: Federation of Obstetrics and Gynaecological Societies of India (FOGSI) V. Union of India and Ors.   </Card.Title>
                                            <Card.Title>
                                                
                                               <Card.Title className = "journytitles"> Author - Gayathri Jiji  </Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
                                            DOI: www.doi.org/10.5281/zenodo.6011662
                                                </Card.Text>                                            
                                           
                                        </Card.Body>
                                      
                                    </Card>
                                </Link>  
                            </Col>
                            </Row>
            </div>
        )
    }
}

export default Issue;