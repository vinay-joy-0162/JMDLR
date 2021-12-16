import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import '../Styles/journalPage.css';
import { Navigationbar } from "../partials/Navbar.component";
import Footers from "../partials/Footer";

export class journal extends React.Component {
    constructor() {
        super();
        this.state = {
            forms: [
                {
                    title: 'Driving',
                },
                {
                    title: 'Banking',
                },
                {
                    title: 'HolidayHomes',
                },
                {
                    title: 'VRS',
                },
                {
                    title: 'Insurance',
                },
                {
                    title: 'Income Tax',
                },
                {
                    title: 'Passport',
                },
                {
                    title: 'Govt. Forms',
                },
                {
                    title: 'Railway',
                },
                {
                    title: 'Company',
                },
                {
                    title: 'Pension',
                },
                {
                    title: 'Election',
                }

            ]
        }
    }
    render() {
        return (
            <div>

                <Navigationbar />
                <Container>

                    {/* <center><h3 className="mt-5">Journal papers on the Laws</h3></center> */}
 <br />

                    <hr />

                    <br />



                    <center><h3 className="mt-5">Volume 2 - Issue 1 </h3></center>
                    <br></br>
                    <br></br>
                    <div className="forms-options">
                        <Row>
                        <Col>
                                <Link to='/journal/Ruling' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">1.Concept of Advance ruling under Goods and Services Tax Act  </Card.Title>
                                            <Card.Title>
                                                
                                               <Card.Title className = "journytitles"> Author - Sonali Awasthi</Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5745380
                                                </Card.Text>                                            
                                           
                                        </Card.Body>
                                      
                                    </Card>
                                </Link>
                              
                            </Col>





                            <Col>
                                <Link to='/journal/Right' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">2.Right to Vote - Participation in Democracy  </Card.Title>
                                            <Card.Title>
                                                
                                               <Card.Title className = "journytitles"> Author  - Mehendi Mazumdar</Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
                                                DOI -www.doi.org/10.5281/zenodo.5748075
                                                </Card.Text>                                            
                                           
                                        </Card.Body>
                                      
                                    </Card>
                                </Link>
                              
                            </Col>



                            <Col>
                                <Link to='/journal/Roadmap' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">3.The Roadmap for Inclusion Of Petroleum Under GST   </Card.Title>
                                            <Card.Title>
                                                
                                               <Card.Title className = "journytitles"> Author  - Agrima Shankar & Eesha Kalve</Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
                                                DOI -www.doi.org/10.5281/zenodo.5748075
                                                </Card.Text>                                            
                                           
                                        </Card.Body>
                                      
                                    </Card>
                                </Link>
                              
                            </Col>





                            <Col>
                                <Link to='/journal/Medical' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">4.Medical Examination and Its Evidentiary Value in Trials - Sandra Lisa Philip  </Card.Title>
                                            <Card.Title>
                                                
                                               <Card.Title className = "journytitles"> Author   - Sandra Lisa Philip</Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5752568
                                                </Card.Text>                                            
                                           
                                        </Card.Body>
                                      
                                    </Card>
                                </Link>
                              
                            </Col>



                            <Col>
                                <Link to='/journal/Govt' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">5.Case Comment - G. Achyut Kumar V. State of Odisha (2020) </Card.Title>
                                            <Card.Title>
                                                
                                               <Card.Title className = "journytitles"> Author   - Raashi Agarwal</Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5751869
                                                </Card.Text>                                            
                                           
                                        </Card.Body>
                                      
                                    </Card>
                                </Link>
                              
                            </Col>




                            
                            <Col>
                                <Link to='/journal/Super' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">6.FSLRC and the Concept of Super Regulator  </Card.Title>
                                            <Card.Title>
                                                
                                               <Card.Title className = "journytitles"> Author   - Shakshi Kothari</Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5758988
                                                </Card.Text>                                            
                                           
                                        </Card.Body>
                                      
                                    </Card>
                                </Link>
                              
                            </Col>






                            <Col>
                                <Link to='/journal/Anti' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">7.Anti-Competitive Agreements Vis-A-Vis Mergers and Acquisitions - A Comparison Between India, US and EU   </Card.Title>
                                            <Card.Title>
                                                
                                               <Card.Title className = "journytitles"> Author  - Parvathy Giri</Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5770696
                                                </Card.Text>                                            
                                           
                                        </Card.Body>
                                      
                                    </Card>
                                </Link>
                              
                            </Col>




                            <Col>
                                <Link to='/journal/Men' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">8.Domestic Violence Against Men in India - A Serious Issue  </Card.Title>
                                            <Card.Title>
                                                
                                               <Card.Title className = "journytitles"> Author   - Preeti Nayak</Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
                                                DOI -www.doi.org/10.5281/zenodo.5770690
                                                </Card.Text>                                            
                                           
                                        </Card.Body>
                                      
                                    </Card>
                                </Link>
                              
                            </Col>






                            
                            <Col>
                                <Link to='/journal/How' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">9.How Do Lawmakers Decide Punishments for Different Crimes  </Card.Title>
                                            <Card.Title>
                                                
                                               <Card.Title className = "journytitles"> Author   - Smith John Colaco </Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
                                                DOI -www.doi.org/10.5281/zenodo.5772970

                                                </Card.Text>                                            
                                           
                                        </Card.Body>
                                      
                                    </Card>
                                </Link>
                              
                            </Col>
                       





                            <Col>
                                <Link to='/journal/Mind' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">10.Unsoundness Of Mind in Legal Parlance   </Card.Title>
                                            <Card.Title>
                                                
                                               <Card.Title className = "journytitles"> Author   - Sarthak Bhatia</Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5773012
                                                
                                                </Card.Text>                                            
                                           
                                        </Card.Body>
                                      
                                    </Card>
                                </Link>
                              
                            </Col>






                            <Col>
                                <Link to='/journal/Internet' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">11.Case Comment on Internet and Mobile Association of India v. Reserve Bank of India (AIR 2021 SC 2720)   </Card.Title>
                                            <Card.Title>
                                                
                                               <Card.Title className = "journytitles"> Author  - Tejasswini L</Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5774134
                                                
                                                </Card.Text>                                            
                                           
                                        </Card.Body>
                                      
                                    </Card>
                                </Link>
                              
                            </Col>




                            <Col>
                                <Link to='/journal/China' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">12.India thwarts Chinas Hostile Takeover Bids during Covid-19    </Card.Title>
                                            <Card.Title>
                                                
                                               <Card.Title className = "journytitles"> Author  - Arushi Malik Mehta</Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5774968
                                                
                                                </Card.Text>                                            
                                           
                                        </Card.Body>
                                      
                                    </Card>
                                </Link>
                              
                            </Col>





                            <Col>
                                <Link to='/journal/Practice' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">13.Anthropology of Essential Religious Practice Doctrine    </Card.Title>
                                            <Card.Title>
                                                
                                               <Card.Title className = "journytitles"> Author  - Charvi Duggal & Akanksha</Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
                                                DOI -www.doi.org/10.5281/zenodo.5777237
                                                
                                                </Card.Text>                                            
                                           
                                        </Card.Body>
                                      
                                    </Card>
                                </Link>
                              
                            </Col>











                            
                            <Col>
                                <Link to='/journal/Overview' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">14. An Overview About the Legalisation of Live-in -Relationship in India  </Card.Title>
                                            <Card.Title>
                                                
                                               <Card.Title className = "journytitles"> Author  - Shona.K.P & C. Salini   </Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
                                                DOI -www.doi.org/10.5281/zenodo.5778508
                                                
                                                </Card.Text>                                            
                                           
                                        </Card.Body>
                                      
                                    </Card>
                                </Link>
                              
                            </Col>









                            
                            <Col>
                                <Link to='/journal/Reservation' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">15.Reservation in India An impeding need for reform     </Card.Title>
                                            <Card.Title>
                                                
                                               <Card.Title className = "journytitles"> Author - Maitra M. Badagi</Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5778752
                                                
                                                </Card.Text>                                            
                                           
                                        </Card.Body>
                                      
                                    </Card>
                                </Link>
                              
                            </Col>









                            
                            <Col>
                                <Link to='/journal/Patent' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">16.Patent 101 Basics of patent and the laws concerned as per India    </Card.Title>
                                            <Card.Title>
                                                
                                               <Card.Title className = "journytitles"> Author  - Anindo Chatterjee</Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
                                                DOI -www.doi.org/10.5281/zenodo.5778498
                                                
                                                </Card.Text>                                            
                                           
                                        </Card.Body>
                                      
                                    </Card>
                                </Link>
                              
                            </Col>





                                   
                            <Col>
                                <Link to='/journal/Digital' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                  
                                        <Card.Body>
                                            <Card.Title className="journytitles">17.DIGITAL INK- EMERGING TREND OF CONTRACTS Enforceability and Validity of Online Contracts and Electronic Signatures </Card.Title>
                                            <Card.Title>
                                                
                                               <Card.Title className = "journytitles"> Author  - Yashas Malik</Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
                                                DOI -www.doi.org/10.5281/zenodo.5784427
                                                
                                                </Card.Text>                                            
                                           
                                        </Card.Body>
                                      
                                    </Card>
                                </Link>
                              
                            </Col>
                           






                            <Col>
                                <Link to='/journal/Concept' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                  
                                        <Card.Body>
                                            <Card.Title className="journytitles">18.Concept of Martial Rape and the Need for Change</Card.Title>
                                            <Card.Title>
                                                
                                               <Card.Title className = "journytitles"> Author   - Ms. Radha Sharan & Adv. Pragya Singh </Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5786888
                                                
                                                </Card.Text>                                            
                                           
                                        </Card.Body>
                                      
                                    </Card>
                                </Link>
                              
                            </Col>





                            <Col>
                                <Link to='/journal/Prisoner' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                  
                                        <Card.Body>
                                            <Card.Title className="journytitles">19.Prisoner’s Amelioration Under the Anatomy of Constitution of India  </Card.Title>
                                            <Card.Title>
                                                
                                               <Card.Title className = "journytitles"> Author - Mehak Chadha & Ajay Singh Berwal </Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
                                                DOI -www.doi.org/10.5281/zenodo.5786892
                                                
                                                </Card.Text>                                            
                                           
                                        </Card.Body>
                                      
                                    </Card>
                                </Link>
                              
                            </Col>
                            </Row>
                        </div>


                    <center><h3 className="mt-5">Volume 1 - Issue 3 (Nov 2021 to Dec 2021)</h3></center>
                    <br></br>
                    <br></br>
                    <div className="forms-options">
                        <Row>
                            <Col>
                                <Link to='/journal/Indian' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">1.The Indian Tribunal Complication Eterne  </Card.Title>
                                            <Card.Title>
                                                
                                               <Card.Title className = "journytitles"> Author -  Esha Ghosh and Ambika Kashyap</Card.Title>
                                            </Card.Title>

                                            <Card.Text  className="doi">
                                                DOI -  https://www.doi.org/10.5281/zenodo.5652766
                                                </Card.Text>                                            
                                           
                                        </Card.Body>
                                      
                                    </Card>
                                </Link>
                              
                            </Col>
                            <Col>
                                <Link to='/journal/Safeguard' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">2. Constitutional Safeguards to the Right to Life 
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author -  Mihir Asolekar
                                            </Card.Title>

                                          
                                             <Card.Text  className="doi">
                                                DOI -  https://www.doi.org/10.5281/zenodo.5652718 
                                                </Card.Text>   
                                            
    

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>





                            <Col>
                                <Link to='/journal/Study' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">3. A Comparative Study on Reliability Of Eye-Witness Testimony 
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - Parisa Praneetha
                                            </Card.Title>

                                          
                                             <Card.Text  className="doi">
                                                DOI -  www.doi.org/10.5281/zenodo.5669264
                                                </Card.Text>   
                                            
    

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>




                            <Col>
                                <Link to='/journal/Material' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">4. Criminalizing Marital Rape in India 
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author -  Yoshita Phaphat
                                            </Card.Title>

                                          
                                             <Card.Text  className="doi">
                                                DOI -  www.doi.org/10.5281/zenodo.5669321
                                                </Card.Text>   
                                            
    

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                            <Col>
                                <Link to='/journal/Comment' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">5. Case Comment on - S.R. Bommai v. Union of India, (1994) 3 SCC 1 – An Odyssey of Power & Justice
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author -  Prathik Choudhary
                                            </Card.Title>

                                          
                                             <Card.Text  className="doi">
                                                DOI -  http://www.doi.org/10.5281/zenodo.5675837
                                                </Card.Text>   

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                            <Col>
                                <Link to='/journal/Speedy' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">6. Speedy Disposal of Matrimonial Disputes in India- A Race Against Time 
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author -  Vrinda Chaturvedi
                                            </Card.Title>

                                             <Card.Text  className="doi">
                                                DOI -  http://www.doi.org/10.5281/zenodo.5675999
                                                </Card.Text>   
                                            
    

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>


                            
                            <Col>
                                <Link to='/journal/Article' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">7. An Analysis of Article 370 and Article 35A of the Constitution of India and the Implications of its Revocation
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - John Kevin Kennedy
                                            </Card.Title>

                                             <Card.Text  className="doi">
                                                DOI -   www.doi.org/10.5281/zenodo.5683075
                                                </Card.Text>   
                                            
    

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>





                                  
                            <Col>
                                <Link to='/journal/Data' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">8. DATA PROTECTION LAWS IN PORTUGAL
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - Krish Bhatia
                                            </Card.Title>

                                             <Card.Text  className="doi">
                                                DOI -  www.doi.org/10.5281/zenodo.5702456
                                                </Card.Text>   
                                            
    

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                            <Col>
                                <Link to='/journal/Source' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">9. Precedents as a Source of Law 
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - Vedant Bhardwaj Singh
                                            </Card.Title>

                                             <Card.Text  className="doi">
                                                DOI -  www.doi.org/10.5281/zenodo.5705921
                                                </Card.Text>   
                                            
    

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                            <Col>
                                <Link to='/journal/ENVIRONMENTAL' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">10. ENVIRONMENTAL JUSTICE STORIES & STRUGGLES THE LEGAL AFTERMATH OF MUMBAI OIL SPILL CASES 2010-11 
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author -  Divyanshu Saxena
                                            </Card.Title>

                                          
                                             <Card.Text  className="doi">
                                                DOI -  http://www.doi.org/10.5281/zenodo.5711023
                                                </Card.Text>   
                                            
    

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                            <Col>
                                <Link to='/journal/RIGHTS' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">11. RIGHTS OF UNBORN CHILD  
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author -  KRATIKA JAIN
                                            </Card.Title>

                                          
                                             <Card.Text  className="doi">
                                                DOI -  http://www.doi.org/10.5281/zenodo.5711082
                                                </Card.Text>   
                                            
    

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>


                            <Col>
                                <Link to='/journal/Tenebrosity' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">12. Tenebrosity of the Divide – Assessing the impacts of Digital Divide with respect to the COVID-19 pandemic
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author -  Vani Dhaka
                                            </Card.Title>

                                          
                                             <Card.Text  className="doi">
                                                DOI -  http://www.doi.org/10.5281/zenodo.5711113
                                                </Card.Text>   
                                            
    

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>








                            <Col>
                                <Link to='/journal/Cyber' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">13.Level Of Cyber Crimes During Covid-19 Pandemic 
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - Lavanya Pandiyan
                                            </Card.Title>

                                          
                                             <Card.Text  className="doi">
                                                DOI -   www.doi.org/10.5281/zenodo.5717291
                                                </Card.Text>   
                                            
    

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>




                            <Col>
                                <Link to='/journal/Human' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">14. Human Rights Violations In China 
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - Yashasvi Bhede
                                            </Card.Title>

                                          
                                             <Card.Text  className="doi">
                                                DOI -  www.doi.org/10.5281/zenodo.5717287
                                                </Card.Text>   
                                            
    

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>












                            

                            <Col>
                                <Link to='/journal/Analysis' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">15. Analysis of Doctrine of Benefit of Doubt Apropos to Criminal Philosophy
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author -Soumya Sakshi Mishra
                                            </Card.Title>

                                          
                                             <Card.Text  className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5719059
                                                </Card.Text>   
                                            
    

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>





                            

                            <Col>
                                <Link to='/journal/Imprison' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">16. Imprisonment and Recidivism
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author Neelargho Ray
                                            </Card.Title>

                                          
                                             <Card.Text  className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5719062
                                                </Card.Text>   
                                            
    

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>




                            

                            <Col>
                                <Link to='/journal/Women' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">17. Global Crisis [COVID-19] and its Impact 
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - Kavyasri. S.J
                                            </Card.Title>

                                          
                                             <Card.Text  className="doi">
                                                DOI - www.doi.org/10.5281/zenodo.5728030
                                                </Card.Text>   
                                            
    

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>





                            

                            <Col>
                                <Link to='/journal/Crime' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">18. The Horrendous Crime of Acid Violence With Special Reference To Laxmi V. UOI
                                            </Card.Title>

                                            <Card.Title className="journytitles">
                                                Author - Anubhuti Sharma & Arsheya Chaudhry
                                            </Card.Title>

                                          
                                             <Card.Text  className="doi">
                                                DOI -  www.doi.org/10.5281/zenodo.5719050
                                                </Card.Text>   
                                            
    

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>

                        </div>






























                    <center><h3 className="mt-5">Volume 1 - Issue 2 (Sept 2021 to Oct 2021)</h3></center>
                    <br></br>
                    <br></br>
                    <div className="forms-options">
                        <Row>
                            <Col>
                                <Link to='/journal/Appointment' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">1. Appointment of Receiver </Card.Title>
                                            <Card.Title>
                                                Author - Nidhi Badal
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/journal/Comparative' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">2.  Comparative Analysis of Hindu and Muslim Law of Inheritance
                                            </Card.Title>

                                            <Card.Title>
                                                Author -  Hardik Daga
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/journal/constitutionalRight' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">3. Constitutional Validity of Disturbed Areas Act
                                            </Card.Title>

                                            <Card.Title>
                                                Author -  Abhishek Bhatia
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Link to='/journal/critical' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">4. Critical Analysis of Scope of Article 226 and Article 227 of the Indian Constitution 
                                            </Card.Title>
                                            
                                            <Card.Title>
                                                Author - Ankita Ghosh 
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/journal/cannabis'>
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">5. Decriminalization of Cannabis in India  </Card.Title>

                                            <Card.Title>
                                                Author - Sushant Bava
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/journal/firm' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">6. Dissolution of Firm under Companies Act, 2013 </Card.Title>

                                            <Card.Title>
                                                Author  - Tulsi Nath
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Link to='/journal/domestic' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">7. Domestic Violence and Misuse of Law in India Issues and Challenges  </Card.Title>
                                            <Card.Title>
                                                Author - Veena Goyal
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>


                        <Row>
                            <Col>
                                <Link to='/journal/Extortion' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">8. Extortion by Politicians, Police and Thugs, Clearly Visible and Visibly Ignored   </Card.Title>
                                            <Card.Title>
                                                Author - Himani Dhar
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>


                        <Row>
                            <Col>
                                <Link to='/journal/food' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">9.Food Security by Vertical Farming </Card.Title>
                                            <Card.Title>
                                                Author - Anusha naik  
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>



                        <Row>
                            <Col>
                                <Link to='/journal/Functions' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">10.Functionality of Grievance Handeling Procedures  </Card.Title>
                                            <Card.Title>
                                                Author - Ananya Kashyap 
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>



                        <Row>
                            <Col>
                                <Link to='/journal/international' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">11. International Commercial Arbitration – A Brief Overview  </Card.Title>
                                            <Card.Title>
                                                Author - Rishi Vaid 
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>




                        <Row>
                            <Col>
                                <Link to='/journal/indians' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">12.Privatization of Agriculture in India   </Card.Title>
                                            <Card.Title>
                                                Author - Sahil Bajaj
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>



                        <Row>
                            <Col>
                                <Link to='/journal/trial' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">13.Trial Before Court of Sessions under CrPc A Critical Evaluation  </Card.Title>
                                            <Card.Title>
                                                Author - Gunjan Girwal 
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>

                    </div>

                    <br />

                    <hr />

                    <br />

                    {/* <center><h3 className="mt-5">Volume 1 - Issue 2</h3></center> */}

                    <div className="forms-options">

                        {/* <Row>
                            <Col>
                            <Link to='/forms/Noc' >
                                <Card className="C_D card card-1" style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Title>NOC</Card.Title>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Link>

                            </Col>
                            <Col>
                                <Link to='/forms/BankOfBaroda' >
                                    <Card className="C_D card card-1" style={{ width: '18rem' }}>

                                        <Card.Body>
                                            <Card.Title>Bank of Baroda</Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>

                            </Col>
                            <Col>
                                <Card className="C_D card card-1" style = {{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Title>MS Chola</Card.Title>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card className="C_D card card-1" style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Title>GOVT.FORMS</Card.Title>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>
                                <Card className="C_D card card-1" style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Title>ELECTION</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>
                                <Card className="C_D card card-1" style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Title>INSURANCE</Card.Title>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row> */}
                    </div>



                    <br />

                    <hr />

                    <br />

                    <center><h3 className="mt-5">Volume 1 - Issue 1 (July 2021 to Aug 2021)</h3></center>
                    <br></br>
                    <br></br>
                    <div className="forms-options">
                        <Row>
                            <Col>
                                <Link to='/journal/constitutional' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">1. Constitutional Right to Life And Personal Liberty - Navtej Singh Johar vs Union of India </Card.Title>
                                            <Card.Title>
                                                Author - Anurag Gupta
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/journal/covid_impact' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">2.   Impact of COVID-19 & Lockdown on Mental Health of Adolescent and Adults
                                            </Card.Title>

                                            <Card.Title>
                                                Author - Karan Rathod
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/journal/law_of_tort' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">3. Law of Tort on Negligence – An Indian Legal Perspective
                                            </Card.Title>

                                            <Card.Title>
                                                Author - Neelargo Ray
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Link to='/journal/legal' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">4. Legality and Legal Rights of Manual Sewage Workers 
                                            </Card.Title>
                                            
                                            <Card.Title>
                                                Author - Anurag Gupta
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/journal/legal_maxim'>
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>

                                        <Card.Body>
                                            <Card.Title className="journytitles">5. Legal Maxim - SIC UTERE TUO UT ALIENUM NON LAEDAS </Card.Title>

                                            <Card.Title>
                                                Author - Shivraj Singh
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/journal/legal_policy_gap' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">6. Legal Policy Gaps in Export Credit Guarantee Corporation of India (ECGC)  </Card.Title>

                                            <Card.Title>
                                                Author - Vinayak Garje
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </Link>

                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Link to='/journal/social_exclusion' >
                                    <Card className="C_D card card-1" style={{ width: '35rem' }}>
                                        <Card.Body>
                                            <Card.Title className="journytitles">7. Social Exclusion - Societal Attitudes Towards Differently Abled People  </Card.Title>
                                            <Card.Title>
                                                Author -  Arafat Khan
                                            </Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>

                    </div>

                    <br />

                    <hr />

                    <br />

                    {/* <center><h3 className="mt-5">Volume 1 - Issue 2</h3></center> */}

                    <div className="forms-options">

                        {/* <Row>
                            <Col>
                            <Link to='/forms/Noc' >
                                <Card className="C_D card card-1" style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Title>NOC</Card.Title>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Link>

                            </Col>
                            <Col>
                                <Link to='/forms/BankOfBaroda' >
                                    <Card className="C_D card card-1" style={{ width: '18rem' }}>

                                        <Card.Body>
                                            <Card.Title>Bank of Baroda</Card.Title>
                                            <Card.Text>

                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Link>

                            </Col>
                            <Col>
                                <Card className="C_D card card-1" style = {{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Title>MS Chola</Card.Title>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card className="C_D card card-1" style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Title>GOVT.FORMS</Card.Title>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>
                                <Card className="C_D card card-1" style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Title>ELECTION</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col>
                                <Card className="C_D card card-1" style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Title>INSURANCE</Card.Title>
                                        <Card.Text>

                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row> */}
                    </div>
                </Container>
                <Footers />
            </div>
        )
    }
}




