import React from "react";
import Container from "react-bootstrap/Container";
import '../Styles/home.css';

export class Homecontents extends React.Component{
    render(){
        return(
            <div>
                <Container>
                    <h4 className="home-issn"><u>ISSN: Under Review</u></h4>
                <h3 className="home-heading"><u>Journal of Multi-Disciplinary Legal Research</u></h3>
                    <p className="home-contents1">
                    The Journal of Multi-Disciplinary Legal Research (JMDLR) is an Open-Access student-edited, Peer-Reviewed journal published bi-monthly <b>(one issue every two months)</b>.  JMDLR is expected to be a platform for academicians and students from the legal fraternity to present their ideas related to Law and its Allied Branches.</p>
                    <p>JMDLR seeks to provide an interactive platform for the publication of Short Articles, Long Articles, Book reviews, Case comments, Legislative comments, and Research Papers in the field of Law.</p>

                    <p>The aim of JMDLR is to spread legal awareness and to bring out and propagate the opinion of the legal fraternity and provide forum for interaction between academia, practitioners and students. Each issue of JMDLR is devoted to the vast areas of legal studies. 
                    </p>

                    <h3 className="home-heading"><u>Open Access Policy</u></h3>
                    <p className="home-contents1">
                    JMDLR provides immediate open access to its content on the principle that making research freely available to the public supports a greater exchange of knowledge. JMDLR encourages authors to make their research data openly available.</p>
                    <p>Authors of articles published in Journal of Multi-Disciplinary Legal Research remain the copyright holders and grant third parties the right to use, reproduce, and share the article according to the Creative Commons license agreement.
                    </p>

                </Container>
            </div>
        )
    }
}