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

import Comment from '../../pdfs/Case Comment on - S.R. Bommai v. Union of India, (1994) 3 SCC 1 – An Odyssey of Power & Justice - Prathik Choudhary.pdf';
import Speedy from '../../pdfs/Speedy Disposal of Matrimonial Disputes in India- A Race Against Time - Vrinda Chaturvedi.pdf';
import Article from '../../pdfs/An Analysis of Article 370 and Article 35A of the Constitution of India and the Implications of its Revocation.pdf';
import Data from '../../pdfs/DATA PROTECTION LAWS IN PORTUGAL.pdf';
import  Source from  '../../pdfs/Precedents as a Source of Law - Vedant Bhardwaj Singh.pdf'

import ENVIRONMENTAL from '../../pdfs/ENVIRONMENTAL JUSTICE STORIES & STRUGGLES THE LEGAL AFTERMATH OF MUMBAI OIL SPILL CASES 2010-11 - Divyanshu Saxena.pdf';
import RIGHTS from '../../pdfs/RIGHTS OF UNBORN CHILD - KRATIKA JAIN.pdf';
import Tenebrosity from '../../pdfs/Tenebrosity of the Divide – Assessing the impacts of Digital Divide with respect to the COVID-19 pandemic - Vani Dhaka.pdf';
import Cyber from '../../pdfs/Level Of Cyber Crimes During Covid-19 Pandemic - Lavanya Pandiyan.pdf';
import Human from '../../pdfs/Human Rights Violations In China - Yashasvi Bhede.pdf';
import Analysis from '../../pdfs/Analysis of Doctrine of Benefit of Doubt Apropos to Criminal Philosophy -Soumya Sakshi Mishra.pdf';
import Imprison from '../../pdfs/Imprisonment and Recidivism-converted.pdf';
import Women from '../../pdfs/Global Crisis [COVID-19] and its Impact - Kavyasri. S.J.pdf';
import Crime from '../../pdfs/The Horrendous Crime of Acid Violence With Special Reference To Laxmi V. UOI - Anubhuti Sharma & Arsheya Chaudhry.pdf';

import Ruling from '../../pdfs/Concept_of_Advance_ruling_under_Goods_and_Services_Tax_Act.pdf';
import Right from '../../pdfs/Right to Vote - Participation in Democracy - Mehendi Mazumdar.pdf';
import Roadmap from '../../pdfs/The Roadmap for Inclusion Of Petroleum Under GST - Agrima Shankar & Eesha Kalve.pdf';

import Medical from '../../pdfs/Medical Examination and Its Evidentiary Value in Trials - Sandra Lisa Philip.pdf';
import Govt from '../../pdfs/Case Comment - G. Achyut Kumar V. State of Odisha (2020) - Raashi Agarwal.pdf';
import Super from '../../pdfs/FSLRC and the Concept of Super Regulator - Shakshi Kothari.pdf';
import Anti from '../../pdfs/Anti-Competitive Agreements Vis-A-Vis Mergers and Acquisitions - A Comparison Between India, US and EU - Parvathy Giri.pdf';
import Men from '../../pdfs/Domestic Violence Against Men in India - A Serious Issue - Preeti Nayak.pdf';
import How from '../../pdfs/How Do Lawmakers Decide Punishments for Different Crimes - Smith John Colaco.pdf';

import Mind from '../../pdfs/Unsoundness Of Mind in Legal Parlance - Sarthak Bhatia.pdf';
import Internet from '../../pdfs/Internet and Mobile Association of India vs Reserve Bank of India (AIR 2012 SC 2720) - Tejasswini L.pdf';




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

                                                                                                                    this.state.file === 'Comment'
                                                                                                                    ?
                                                                                                                        <iframe
                                                                                                                            src={Comment}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        : 
                                                                                                                        
                                                                                                                        this.state.file === 'Speedy'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Speedy}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :

                                                                                                                        this.state.file === 'Article'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Article}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :

                                                                                                                        this.state.file === 'Data'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Data}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :

                                                                                                                        this.state.file === 'Source'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Source}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :

                                                                                                                        
                                                                                                                        this.state.file === 'ENVIRONMENTAL'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={ENVIRONMENTAL}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :

                                                                                                                        
                                                                                                                        this.state.file === 'RIGHTS'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={RIGHTS}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :

                                                                                                                        
                                                                                                                        this.state.file === 'Tenebrosity'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Tenebrosity}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :


                                                                                                                         
                                                                                                                        this.state.file === 'Cyber'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Cyber}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :


                                                                                                                         
                                                                                                                        this.state.file === 'Human'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Human}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :




                                                                                                                        this.state.file === 'Analysis'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Analysis}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :


                                                                                                                        
                                                                                                                        this.state.file === 'Imprison'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Imprison}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :



                                                                                                                        
                                                                                                                        this.state.file === 'Women'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Women}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :


                                                                                                                        
                                                                                                                        this.state.file === 'Crime'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Crime}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :
                                                                                                                        
                                                                                                                        this.state.file === 'Ruling'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Ruling}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :

                                                                                                                          
                                                                                                                        this.state.file === 'Right'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Right}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :


                                                                                                                            
                                                                                                                        this.state.file === 'Roadmap'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Roadmap}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :


                                                                                                                        this.state.file === 'Govt'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Govt}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :


                                                                                                                        this.state.file === 'Medical'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Medical}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :


                                                                                                                        this.state.file === 'Super'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Super}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :


                                                                                                                        
                                                                                                                        this.state.file === 'Anti'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Anti}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :

                                                                                                                        
                                                                                                                        this.state.file === 'Men'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Men}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :



                                                                                                                        
                                                                                                                        this.state.file === 'How'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={How}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :



                                                                                                                        this.state.file === 'Mind'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Mind}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :

                                                                                                                        this.state.file === 'Internet'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Internet}
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

