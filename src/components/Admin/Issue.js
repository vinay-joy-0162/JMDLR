import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Card from 'react-bootstrap/Card';
import { Row, Col, Button, Container } from 'react-bootstrap';

class Issue extends React.Component{
    constructor() {
        super();
        this.state = {
            pdfs : [
                {
                    pdfName : "1.Case Comment: Federation of Obstetrics and Gynaecological Societies of India (FOGSI) V. Union of India and Ors.   ",
                    authorName : "Gayathri Jiji",
                    doi : "www.doi.org/10.5281/zenodo.6011662"
                },
                {
                    pdfName : "1.Case Comment: Federation of Obstetrics and Gynaecological Societies of India (FOGSI) V. Union of India and Ors.   ",
                    authorName : "Gayathri Jiji",
                    doi : "www.doi.org/10.5281/zenodo.6011662"
                },
                {
                    pdfName : "1.Case Comment: Federation of Obstetrics and Gynaecological Societies of India (FOGSI) V. Union of India and Ors.   ",
                    authorName : "Gayathri Jiji",
                    doi : "www.doi.org/10.5281/zenodo.6011662"
                },
                {
                    pdfName : "1.Case Comment: Federation of Obstetrics and Gynaecological Societies of India (FOGSI) V. Union of India and Ors.   ",
                    authorName : "Gayathri Jiji",
                    doi : "www.doi.org/10.5281/zenodo.6011662"
                },
                {
                    pdfName : "1.Case Comment: Federation of Obstetrics and Gynaecological Societies of India (FOGSI) V. Union of India and Ors.   ",
                    authorName : "Gayathri Jiji",
                    doi : "www.doi.org/10.5281/zenodo.6011662"
                }
            ]
        }
    }

    componentDidMount(){
        // axios.get('/my-documents/')
        // .then(res => {
        //     // console.log(res.data);
        //     this.setState({ myforms : res.data.myforms })
        //     // console.log(this.state.myforms);
        // })
        // .catch(err => console.log(err));
    }

    render(){
        return (
            <div>
<Container>
  
    
                            {

                            
                                this.state.pdfs.map((pdf) => (
                                    <Row> 
                                    <Col>
                                        <div>
                                        <Link to='/journal/Federation' >
                                            <Card className="card-horizontal">

                                                <Card.Body className="Cardbody">
                                                    <Card.Title >{pdf.pdfName} </Card.Title>
                                                    <Card.Title>
                                                        
                                                    <Card.Title > Author - {pdf.authorName}  </Card.Title>
                                                    </Card.Title>

                                                    <Card.Text  className="doi">
                                                    DOI: {pdf.doi}
                                                        </Card.Text>                                            
                                                
                                                </Card.Body>
                                            
                                            </Card>
                                        </Link>  
                                        </div>
                                    </Col>
                                    </Row> 
                                ))
                            
                            }
                </Container>
            </div>
        )
    }
}

export default Issue;