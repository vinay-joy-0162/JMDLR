
import React from "react";
import Container from "react-bootstrap/Container";
import '../Styles/guidelines.css';
class GuidelinesPRP extends React.Component {
    render(){
        return(
            <div>
            <container>
                <h3 className="guide-prp"><u>Peer Review Process</u></h3>
                <p className="guide-prp-para1">All unsolicited manuscripts submitted to be considered for publication in Journal of Multi-Disciplinary Legal Research are subject to an editorial review process.</p>
            
                <p className="guide-prp-para2">The submitted manuscripts are reviewed on the following parameters:</p>
                <ul className="guide-prp-list">
                    <li>Relevance</li>
                    <li>Structure</li>
                    <li>Content</li>
                    <li>Language</li>
                    <li>Originality</li>
                    <li>Coherence</li>
                    <li>Cited sources</li>
                </ul>
    
    
            <p className="guide-prp-para3">Once the manuscript is accepted for publication, it is assigned for editorial review by the Editorial Board. The first step in the editing process is simply reading your article. The editors do this as a first check to make sure the article is of sufficient quality. The editors will also check to make sure you adhered to the citation guidelines in your article. If your article passes this stage, we will send it to a referee to review based on academic level and content. The executive editor will contact you about the results of this review process and we will send you any comments or suggestions about your article. If your article is accepted, we will ask you to make the changes suggested by the editors. We will contact you to set an appropriate deadline to get the improved version back from you. At this point, our editorial board will read the article closely for style, form, content, and language use. 
    After your approval of the final version, the article will be published in the journal.</p>
            </container>
        </div>
        )
    }

}
export default GuidelinesPRP;