import React from "react";
import Container from "react-bootstrap/Container";
import '../Styles/home.css';
import cl from "./cl.png";

export class Homecontents extends React.Component{
    render(){
        return(
            <div>
                <Container>
                    <h4 className="home-issn"><u>ISSN: 2582-9947</u></h4>
                <h3 className="home-heading"><u>Journal of Multi-Disciplinary Legal Research</u></h3>
                    <p className="home-contents1">
                    The Journal of Multi-Disciplinary Legal Research (JMDLR) is an Open-Access, Peer-Reviewed journal published bi-monthly <b>(one issue every two months)</b>.  JMDLR is expected to be a platform for academicians and students from the legal fraternity to present their ideas related to Law and its Allied Branches.</p>
                    <p  className="home-contents1">JMDLR seeks to provide an interactive platform for the publication of Short Articles, Long Articles, Book reviews, Case comments, Legislative comments, and Research Papers in the field of Law.</p>

                    <p  className="home-contents1">The aim of JMDLR is to spread legal awareness and to bring out and propagate the opinion of the legal fraternity and provide forum for interaction between academia, practitioners and students. Each issue of JMDLR is devoted to the vast areas of legal studies. 
                    </p>
                    
                     
                    
                    <h3 className="home-heading"><u>Open Access Policy</u></h3>
                    <p className="home-contents1">
                    JMDLR provides immediate open access to its content on the principle that making research freely available to the public supports a greater exchange of knowledge. JMDLR encourages authors to make their research data openly available.</p>
                    <p  className="home-contents1">The content published in Journal of Multi-Disciplinary Legal Research  is released under open licenses from Creative Commons. We believe that only CC BY meets the requirements for true open access for books and journals, and strongly prefer CC0 for open research data.
                    </p>

                    <div className="footer-licence">
            <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                <img  className="licence-img" alt="Creative Commons License"
                    src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a>
            <br /><h6 className="licence-line1">This work is licensed under a </h6><a rel="license" className="licence-line2"
                href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.


                        <h2 className="about-title"><u>Aim </u></h2>
                        <p className="about-para">Our aim is to upgrade the level of interaction and discussion about contemporary and emerging issues of law. We are eager to become a highly cited publication, through quality contributions from students, academicians and professionals from the industry. JMDLR welcomes contributions from all legal branches, as long as the work is original, 
                        unpublished, unplagiarised and in consonance with the submission guidelines</p>
                   










         </div>


                </Container>
            </div>
        )
    }
}