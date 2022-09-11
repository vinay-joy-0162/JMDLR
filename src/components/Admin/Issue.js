// import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Card from 'react-bootstrap/Card';
import { Row, Col, Button, Container } from 'react-bootstrap';
import '../Styles/admin.css';
import React from 'react';
// import Addpdf from './Issueaddpdf';





//   render(<Example />);

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
                                                    <Card.Title className='cardtitle_issue'>{pdf.pdfName} </Card.Title>
                                                    <Card.Title>
                                                        
                                                    <Card.Title > Author - {pdf.authorName}  </Card.Title>
                                                    </Card.Title>
                                                 
                                                    <Card.Text  className="doi">
                                                    <Button variant="primary" onClick={pdf.doi}>DOI</Button>{''}

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



        // const [show, setShow] = useState(false);
      
        // const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);
      
        // return (
        //   <>
        //     <Button variant="primary" onClick={handleShow}>
        //       Launch demo modal
        //     </Button>
      
        //     <Modal show={show} onHide={handleClose}>
        //       <Modal.Header closeButton>
        //         <Modal.Title>Modal heading</Modal.Title>
        //       </Modal.Header>
        //       <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        //       <Modal.Footer>
        //         <Button variant="secondary" onClick={handleClose}>
        //           Close
        //         </Button>
        //         <Button variant="primary" onClick={handleClose}>
        //           Save Changes
        //         </Button>
        //       </Modal.Footer>
        //     </Modal>
        //   </>
        // );
      
    
       
}

export default Issue;