import React from 'react';

// import axios from 'axios';

// import all required pdfs
import constitutional from '../../pdfs/Constitutional Right to Life And Personal Liberty - Navtej Singh Johar vs Union of India.pdf';
import covid_impact from '../../pdfs/Impact of Covid-19 & Lockdown on Mental Health of Adolescents and Adults.pdf';
import law_of_tort from '../../pdfs/Law of Tort on Negligence - An Indian Legal Perspective.pdf';
import legality from '../../pdfs/Legality and Legal Rights of Manual Sewage Workers.pdf';
import legal_maxim from '../../pdfs/Legal Maxim - SIC UTERE TUO UT ALIENUM NON LAEDAS.pdf';
import legal_polciy_gap from '../../pdfs/Legal Policy Gaps in Export Credit Guarantee Corporation of India (ECGC).pdf';
import social_exclusion from '../../pdfs/Social Exclusion - Societal Attitudes Towards Differently Abled People.pdf';

// template
// import pdfname from 'path';

class PDFViewer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // loading : true,
            file : props.match.params.file
        };
    }

    // fetch pdf from server
    // componentDidMount(){
    //     // console.log(this.state.file)
    //     axios.get('/file/' + this.state.file)
    //     .then(res => {
    //         if(res.data.success){
    //             // console.log(res.data.base64data);
    //             this.setState({ base64Data : res.data.base64data });
    //         }else{
    //             alert('Something went wrong');
    //         }
    //     })
    //     .catch(err => console.log(err));
    // }

    render(){
        return (
           <div className="container">

            {
                this.state.file === 'constitutional' 
                ?
                    <iframe 
                    src={constitutional}
                    style={{height:'100vh'}} 
                    height="100%" 
                    width="100%" 
                    title = 'x1' 
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                />
                :
                    this.state.file === 'covid-impact'
                    ?
                        <iframe 
                        src={covid_impact}
                        style={{height:'100vh'}} 
                        height="100%" 
                        width="100%" 
                        title = 'x1' 
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        />
                    :
                        this.state.file === 'law-of-tort'
                        ?
                            <iframe 
                            src={law_of_tort}
                            style={{height:'100vh'}} 
                            height="100%" 
                            width="100%" 
                            title = 'x1' 
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            />
                        :
                            this.state.file === 'legality-and-legal-right'
                            ?
                                <iframe 
                                src={legality}
                                style={{height:'100vh'}} 
                                height="100%" 
                                width="100%" 
                                title = 'x1' 
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                                />
                            :
                                this.state.file === 'legal-maxim'
                                ?
                                    <iframe 
                                    src={legal_maxim}
                                    style={{height:'100vh'}} 
                                    height="100%" 
                                    width="100%" 
                                    title = 'x1' 
                                    frameBorder="0"
                                    marginHeight="0"
                                    marginWidth="0"
                                    />
                                :
                                this.state.file === 'legal-policy-gap'
                                ?
                                    <iframe 
                                    src={legal_polciy_gap}
                                    style={{height:'100vh'}} 
                                    height="100%" 
                                    width="100%" 
                                    title = 'x1' 
                                    frameBorder="0"
                                    marginHeight="0"
                                    marginWidth="0"
                                    />
                                :
                                    this.state.file === 'social-exclusion'
                                    ?
                                        <iframe 
                                        src={social_exclusion}
                                        style={{height:'100vh'}} 
                                        height="100%" 
                                        width="100%" 
                                        title = 'x1' 
                                        frameBorder="0"
                                        marginHeight="0"
                                        marginWidth="0"
                                        />
                                    :
                                    <div>tyest</div>
                
            }
             
        </div>
        );
        
    }
};

export default PDFViewer;

