import React from "react";
import Container from "react-bootstrap/Container";
import '../Styles/aboutus.css';

export class Aboutpage extends React.Component{
    render(){
        return(
            <div>
                <Container>
                    <h2 className="about-title"><u>Focus </u></h2>
                    <p className="about-para">Journal on Multi-Disciplinary Legal Research is an Online Journal which is published bi-monthly <b>(one issue every two months)</b>,
                         is open access and peer reviewed and seeks to provide a forum for 
                         free exchange of ideas on legal issues pertaining to various emerging areas of law. 
                         JMDLR does not restrict itself to any particular area of law and welcomes contributions from all legal branches, as long as the work is original, unpublished and up to date.</p>

                        <h2 className="about-title"><u>Aim & Scope</u></h2>
                        <p className="about-para">Our aim is to upgrade the level of interaction and discussion about contemporary and emerging issues of law. We are eager to become a highly cited publication, through quality contributions from students, academicians and professionals from the industry. JMDLR welcomes contributions from all legal branches, as long as the work is original, 
                        unpublished, unplagiarised and in consonance with the submission guidelines</p>
                   


                    
                </Container>
            </div>
        )
    }
}