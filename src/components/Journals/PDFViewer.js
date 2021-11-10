import React from 'react';

// import axios from 'axios';

// import all required pdfs
import constitutional from '../../pdfs/Constitutional Right to Life And Personal Liberty - Navtej Singh Johar vs Union of India.pdf';
import covid_impact from '../../pdfs/Impact of Covid-19 & Lockdown on Mental Health of Adolescents and Adults.pdf';
import law_of_tort from '../../pdfs/Law of Tort on Negligence - An Indian Legal Perspective.pdf';
import legal from '../../pdfs/Legality and Legal Rights of Manual Sewage Workers.pdf';
import legal_maxim from '../../pdfs/Legal Maxim - SIC UTERE TUO UT ALIENUM NON LAEDAS.pdf';
import legal_policy_gap from '../../pdfs/Legal Policy Gaps in Export Credit Guarantee Corporation of India (ECGC).pdf';
import social_exclusion from '../../pdfs/Social Exclusion - Societal Attitudes Towards Differently Abled People.pdf';

import Appointment from '../../pdfs/Appointment of Receiver - Nidhi Badal-converted.pdf';
import Comparative from '../../pdfs/Comparative Analysis of Hindu and Muslim Law of Inheritance - Hardik Daga-converted.pdf';
import constitutionalRight from '../../pdfs/Constitutional Validity of Disturbed Areas Act - Abhishek Bhatia-converted.pdf';
import critical from '../../pdfs/Critical Analysis of Scope of Article 226 and Article 227 of the Indian Constitution - Ankita Ghosh-converted.pdf';
import cannabis from '../../pdfs/Decriminalization of Cannabis in India - Sushant Bava-converted.pdf';
import firm from '../../pdfs/Dissolution of Firm under Companies Act, 2013 - Tulsi Nath-converted.pdf';
import domestic from '../../pdfs/Domestic Violence and Misuse of Law in India Issues and Challenges - Veena Goyal-converted.pdf';
import Extortion from '../../pdfs/Extortion by Politicians, Police and Thugs, Clearly Visible and Visibly Ignored - Himani Dhar-converted.pdf';
import food from '../../pdfs/Food Security by Vertical Farming - Anusha naik-converted.pdf';
import Functions from '../../pdfs/Functionality of Grievance Handeling Procedures - Ananya Kashyap-converted.pdf';
import international from '../../pdfs/International Commercial Arbitration – A Brief Overview - Rishi Vaid-converted.pdf';
import indians from '../../pdfs/Privatization of Agriculture in India - Sahil Bajaj-converted.pdf';
import trial from '../../pdfs/Trial Before Court of Sessions under CrPc A Critical Evaluation - Gunjan Girwal-converted.pdf';


import Indian from '../../pdfs/The Indian Tribunal Complication Eterne - Esha Ghosh and Ambika Kashyap.pdf';
import Safeguard from '../../pdfs/Constitutional Safeguards to the Right to Life - Mihir Asolekar.pdf';
import Study from '../../pdfs/A Comparative Study on Reliability Of Eye-Witness Testimony - Parisa Praneetha.pdf';
import Material from '../../pdfs/Criminalizing Marital Rape in India - Yoshita Phaphat.pdf';


// template
// import pdfname from 'path';

class PDFViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // loading : true,
            file: props.match.params.file
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

    render() {
        return (
            <div className="container">



                {

                    this.state.file === 'Appointment'
                        ?
                        <iframe
                            src={Appointment}
                            style={{ height: '100vh' }}
                            height="100%"
                            width="100%"
                            title='x1'
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                        />
                        :

                        this.state.file === 'Comparative'
                            ?
                            <iframe
                                src={Comparative}
                                style={{ height: '100vh' }}
                                height="100%"
                                width="100%"
                                title='x1'
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                            />
                            :
                            this.state.file === 'constitutionalRight'
                                ?
                                <iframe
                                    src={constitutionalRight}
                                    style={{ height: '100vh' }}
                                    height="100%"
                                    width="100%"
                                    title='x1'
                                    frameBorder="0"
                                    marginHeight="0"
                                    marginWidth="0"
                                />
                                :
                                this.state.file === 'critical'
                                    ?
                                    <iframe
                                        src={critical}
                                        style={{ height: '100vh' }}
                                        height="100%"
                                        width="100%"
                                        title='x1'
                                        frameBorder="0"
                                        marginHeight="0"
                                        marginWidth="0"
                                    />
                                    :
                                    this.state.file === 'cannabis'
                                        ?
                                        <iframe
                                            src={cannabis}
                                            style={{ height: '100vh' }}
                                            height="100%"
                                            width="100%"
                                            title='x1'
                                            frameBorder="0"
                                            marginHeight="0"
                                            marginWidth="0"
                                        />
                                        :
                                        this.state.file === 'firm'
                                            ?
                                            <iframe
                                                src={firm}
                                                style={{ height: '100vh' }}
                                                height="100%"
                                                width="100%"
                                                title='x1'
                                                frameBorder="0"
                                                marginHeight="0"
                                                marginWidth="0"
                                            />
                                            :
                                            this.state.file === 'domestic'
                                                ?
                                                <iframe
                                                    src={domestic}
                                                    style={{ height: '100vh' }}
                                                    height="100%"
                                                    width="100%"
                                                    title='x1'
                                                    frameBorder="0"
                                                    marginHeight="0"
                                                    marginWidth="0"
                                                />
                                                :
                                                this.state.file === 'Extortion'
                                                    ?
                                                    <iframe
                                                        src={Extortion}
                                                        style={{ height: '100vh' }}
                                                        height="100%"
                                                        width="100%"
                                                        title='x1'
                                                        frameBorder="0"
                                                        marginHeight="0"
                                                        marginWidth="0"
                                                    />
                                                    :



                                                    this.state.file === 'food'
                                                        ?
                                                        <iframe
                                                            src={food}
                                                            style={{ height: '100vh' }}
                                                            height="100%"
                                                            width="100%"
                                                            title='x1'
                                                            frameBorder="0"
                                                            marginHeight="0"
                                                            marginWidth="0"
                                                        />
                                                        :


                                                        this.state.file === 'Functions'
                                                            ?
                                                            <iframe
                                                                src={Functions}
                                                                style={{ height: '100vh' }}
                                                                height="100%"
                                                                width="100%"
                                                                title='x1'
                                                                frameBorder="0"
                                                                marginHeight="0"
                                                                marginWidth="0"
                                                            />
                                                            :



                                                            this.state.file === 'international'
                                                                ?
                                                                <iframe
                                                                    src={international}
                                                                    style={{ height: '100vh' }}
                                                                    height="100%"
                                                                    width="100%"
                                                                    title='x1'
                                                                    frameBorder="0"
                                                                    marginHeight="0"
                                                                    marginWidth="0"
                                                                />
                                                                :



                                                                this.state.file === 'indians'
                                                                    ?
                                                                    <iframe
                                                                        src={indians}
                                                                        style={{ height: '100vh' }}
                                                                        height="100%"
                                                                        width="100%"
                                                                        title='x1'
                                                                        frameBorder="0"
                                                                        marginHeight="0"
                                                                        marginWidth="0"
                                                                    />
                                                                    :



                                                                    this.state.file === 'trial'
                                                                        ?
                                                                        <iframe
                                                                            src={trial}
                                                                            style={{ height: '100vh' }}
                                                                            height="100%"
                                                                            width="100%"
                                                                            title='x1'
                                                                            frameBorder="0"
                                                                            marginHeight="0"
                                                                            marginWidth="0"
                                                                        />
                                                                        :











                                                                        this.state.file === 'constitutional'
                                                                            ?
                                                                            <iframe
                                                                                src={constitutional}
                                                                                style={{ height: '100vh' }}
                                                                                height="100%"
                                                                                width="100%"
                                                                                title='x1'
                                                                                frameBorder="0"
                                                                                marginHeight="0"
                                                                                marginWidth="0"
                                                                            />
                                                                            :

                                                                            this.state.file === 'covid_impact'
                                                                                ?
                                                                                <iframe
                                                                                    src={covid_impact}
                                                                                    style={{ height: '100vh' }}
                                                                                    height="100%"
                                                                                    width="100%"
                                                                                    title='x1'
                                                                                    frameBorder="0"
                                                                                    marginHeight="0"
                                                                                    marginWidth="0"
                                                                                />
                                                                                :
                                                                                this.state.file === 'law_of_tort'
                                                                                    ?
                                                                                    <iframe
                                                                                        src={law_of_tort}
                                                                                        style={{ height: '100vh' }}
                                                                                        height="100%"
                                                                                        width="100%"
                                                                                        title='x1'
                                                                                        frameBorder="0"
                                                                                        marginHeight="0"
                                                                                        marginWidth="0"
                                                                                    />
                                                                                    :
                                                                                    this.state.file === 'legal'
                                                                                        ?
                                                                                        <iframe
                                                                                            src={legal}
                                                                                            style={{ height: '100vh' }}
                                                                                            height="100%"
                                                                                            width="100%"
                                                                                            title='x1'
                                                                                            frameBorder="0"
                                                                                            marginHeight="0"
                                                                                            marginWidth="0"
                                                                                        />
                                                                                        :
                                                                                        this.state.file === 'legal_maxim'
                                                                                            ?
                                                                                            <iframe
                                                                                                src={legal_maxim}
                                                                                                style={{ height: '100vh' }}
                                                                                                height="100%"
                                                                                                width="100%"
                                                                                                title='x1'
                                                                                                frameBorder="0"
                                                                                                marginHeight="0"
                                                                                                marginWidth="0"
                                                                                            />
                                                                                            :
                                                                                            this.state.file === 'legal_policy_gap'
                                                                                                ?
                                                                                                <iframe
                                                                                                    src={legal_policy_gap}
                                                                                                    style={{ height: '100vh' }}
                                                                                                    height="100%"
                                                                                                    width="100%"
                                                                                                    title='x1'
                                                                                                    frameBorder="0"
                                                                                                    marginHeight="0"
                                                                                                    marginWidth="0"
                                                                                                />
                                                                                                :
                                                                                                this.state.file === 'social_exclusion'
                                                                                                    ?
                                                                                                    <iframe
                                                                                                        src={social_exclusion}
                                                                                                        style={{ height: '100vh' }}
                                                                                                        height="100%"
                                                                                                        width="100%"
                                                                                                        title='x1'
                                                                                                        frameBorder="0"
                                                                                                        marginHeight="0"
                                                                                                        marginWidth="0"
                                                                                                    />





                                                                                                    :
                                                                                                    this.state.file === 'Indian'
                                                                                                        ?
                                                                                                        <iframe
                                                                                                            src={Indian}
                                                                                                            style={{ height: '100vh' }}
                                                                                                            height="100%"
                                                                                                            width="100%"
                                                                                                            title='x1'
                                                                                                            frameBorder="0"
                                                                                                            marginHeight="0"
                                                                                                            marginWidth="0"
                                                                                                        />

                                                                                                        :
                                                                                                        this.state.file === 'Safeguard'
                                                                                                            ?
                                                                                                            <iframe
                                                                                                                src={Safeguard}
                                                                                                                style={{ height: '100vh' }}
                                                                                                                height="100%"
                                                                                                                width="100%"
                                                                                                                title='x1'
                                                                                                                frameBorder="0"
                                                                                                                marginHeight="0"
                                                                                                                marginWidth="0"
                                                                                                            />
                                                                                                            :


                                                                                                            
                                                                                                            this.state.file === 'Study'
                                                                                                                ?
                                                                                                                <iframe
                                                                                                                    src={Study}
                                                                                                                    style={{ height: '100vh' }}
                                                                                                                    height="100%"
                                                                                                                    width="100%"
                                                                                                                    title='x1'
                                                                                                                    frameBorder="0"
                                                                                                                    marginHeight="0"
                                                                                                                    marginWidth="0"
                                                                                                                />
        
                                                                                                                :
                                                                                                                this.state.file === 'Material'
                                                                                                                    ?
                                                                                                                    <iframe
                                                                                                                        src={Material}
                                                                                                                        style={{ height: '100vh' }}
                                                                                                                        height="100%"
                                                                                                                        width="100%"
                                                                                                                        title='x1'
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

