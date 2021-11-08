import React from "react";
import Container from "react-bootstrap/Container";
import Img from "./indexing_img.jpeg";
import Img1 from "./index-img2.png";
import Img2 from "./index-img3.png";
import Img3 from "./index-img4.jpeg";
import Img4 from "./index-img5.jpeg";
import Img5 from "./index-img6.jpeg";
import '../Styles/indexing.css';


export class Indexingmain extends React.Component {
    render() {
        return (
            <Container>

                <div>
                    <img
                        className="index-img"
                        src={Img}
                        alt="image"
                    />
                    <h6 className="licence-line1"></h6><a rel="license" className="index-lines"
                        href=" https://journals.indexcopernicus.com/search/form ">Index Copernicus International
                    </a>

                    <br></br>

                    <img
                        className="index-img"
                        src={Img1}
                        alt="image"
                    />
                    <h6 className="licence-line1"></h6><a rel="license" className="index-lines"
                        href=" http://olddrji.lbp.world/Search.aspx?J=Journal%20of%20Multi-Disciplinary%20Legal%20Research&S=0">Directory of Research Journals Indexing

                    </a>
                    <br></br>

                    <img
                        className="index-img"
                        src={Img2}
                        alt="image"
                    />

                    <h6 className="licence-line1"></h6><a rel="license" className="index-line1"
                        href=" http://nsl.niscair.res.in/ISSNPROCESS/issnassignedinfo.jsp ">ISSN
                    </a>


<br></br>


                    <img
                        className="index-img"
                        src={Img3}
                        alt="image"
                    />

                    <h6 className="licence-line1"></h6><a rel="license" className="index-line1"
                        href="https://www.rjifactor.com/search/issn/2582-9947 

                        ">RJI Factor

                    </a>
                    <br></br>


                    <img
                        className="index-img"
                        src={Img4}
                        alt="image"
                    />

                    <h6 className="licence-line1"></h6><a rel="license" className="index-line1"
                        href="http://sjifactor.com/passport.php?id=21912


                        ">SJI Factor


                    </a>
                    <br></br>


                    <img
                        className="index-img"
                        src={Img5}
                        alt="image"
                    />

                    <h6 className="licence-line1"></h6><a rel="license" className="index-line1"
                        href="http://journalseeker.researchbib.com/?action=viewJournalseekerSearch 




                        ">ResearchBib



                    </a>


                </div>
            </Container>
        )
    }
}