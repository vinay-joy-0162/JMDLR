import React from 'react';

// import axios from 'axios';

// import all required pdfs
// 

import covid_impact from '../../pdfs/Impact of Covid-19 & Lockdown on Mental Health of Adolescents and Adults.pdf';

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
// import Imprison from '../../pdfs/Imprisonment and Recidivism-converted.pdf';
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
import China from '../../pdfs/India thwarts Chinas Hostile Takeover Bids during Covid-19 - Arushi Malik Mehta.pdf';
import Practice from '../../pdfs/Anthropology of Essential Religious Practice Doctrine - Charvi Duggal & Akanksha.pdf';
import Overview from '../../pdfs/An Overview About the Legalisation of Live-in -Relationship in India - Shona.K.P & C. Salini.pdf';
import Patent from '../../pdfs/Patent 101 Basics of patent and the laws concerned as per India - Anindo Chatterjee.pdf';
import Reservation from '../../pdfs/Reservation in India An impeding need for reform - Maitra M. Badagi.pdf';
import Digital from '../../pdfs/DIGITAL INK- EMERGING TREND OF CONTRACTS Enforceability and Validity of Online Contracts and Electronic Signatures - Yashas Malik.pdf';


import Concept from '../../pdfs/Concept of Marital Rape and the Need for Change - Radha Sharan & Pragya Singh.pdf';
import Prisoner from '../../pdfs/Prisoner’s Amelioration Under the Anatomy of Constitution of India - Mehak Chadha.pdf';
import Kunj from '../../pdfs/Case Analysis of Kunj Behari Lal Butail and Ors. V. State of Himachal Pradesh and Ors. [(2000) 3 Scc 40] - Meher Mansi.pdf';
import Trafficking from '../../pdfs/Human Trafficking in India Before and After the Criminal Amendment Act, 2013 - Anusree J & Malu A M Nair.pdf';
import Indecent from '../../pdfs/Obscenity and Indecent Representation of Women In India - Arya Rajan J R.pdf';
import Rape from '../../pdfs/An Analysis on the Criminality of Marital Rape in India - Neha Susan Thomas.pdf';
import Coal from '../../pdfs/Legal and Economic Consequences of the Coal Scam Case, 2014 - Nayana J M.pdf';
import Genital from '../../pdfs/Genital Mutilation in Females Is It Legal - Mohd Aqib Aslam.pdf';
import Trip from '../../pdfs/An Analysis of The Trips Agreement and The Trips-Compliant Indian Patent Regime - Soumyadip Panda & Anshu Singh.pdf';
// import under from '../../pdfs/Prisoner’s Amelioration Under the Anatomy of Constitution of India - Mehak Chadha.pdf';
import PrisonerReforms from '../../pdfs/Prisons Reforms in India A Critical Study on The Inhumane Conditions Prevailing in Indian Prisons - Sangeetha Lakshmi V.pdf';
import AmbitOfRight from '../../pdfs/Ambit Of Right of Private Defence Under Indian Penal Code- Sandhya Prabhakaran.pdf';
import AnalysisOfConsumerProtection from '../../pdfs/Analysis of Consumer Protection Act - Harshika Kapoor.pdf';
import PreventingDefection from '../../pdfs/Preventing Defection in India - Kushagra Singh Kourav.pdf';


import Sexual from '../../pdfs/Sexual Harassment at Workplace - Sheikh Aman Rana.pdf';
import Downfall from '../../pdfs/Downfall Of Investigative Journalism Need for Implementation Of New Protective Legislation or Neutralising The Misuse Of The Present Ones - Ayushi Vyas & Divya Saxena.pdf';
import take from '../../pdfs/Right To Take Cognizance by Institutions Legal Discourse - Vaibhav Kartikeya Agrawal.pdf';
import An from '../../pdfs/An Analysis of The Constitutionality of Law of Sedition - A. Siva Sangari & R. Jeeva Dharshini.pdf';
import Exclusive from '../../pdfs/Exclusive Rights of Cinematography Owners in Film Industry - Lavanya Pandiyan.pdf';
import Detailed from '../../pdfs/Right Against Self-Incrimination An Analysis & Detailed Study of Laws Prevailing in India - Subhajit Samanta & Somasree Bakshi.pdf';
import Adoption from '../../pdfs/Adoption Provisions and Maintenance Under Hindu Law - Ashish Srivastava.pdf';
import Power from '../../pdfs/Governor’s Discretionary Powers in Case of Hung Assembly - Aishwarya Agarwal.pdf';
import Global from '../../pdfs/Global Minimum Corporate Tax A Blow to Tax Competition & Its Implications on The Indian Sovereign - Latika Arora.pdf';
import Dead from '../../pdfs/Dead Women Tell No Tale - Rajesh Kumar.pdf';
import Making from '../../pdfs/The Discretion Available To Law-Makers In Respects Of Making Classification For The Purposes Of Taxation - Garima Bothra.pdf';
import Operation from '../../pdfs/Operational Creditors - Lost in The Bylanes of Equality - Adapa V Subba Rayudu.pdf';
import Burdern from '../../pdfs/Corporate Social Responsibility A Burden or Benefit - Akash Dixit & Shubham Saini & Abhishek Bhatt.pdf';

import Tax from '../../pdfs/Arbitration as a Tool to Resolve International Tax Disputes - Priya Krithika Devi V.pdf';
import Forensic from '../../pdfs/At The Cusp of Law & Psychology An Analysis of Forensic Psychiatry And Its Intersection With Legislature And Legal Proceedings - Sanika Fegade.pdf';
import Care from '../../pdfs/Impact Of Dumping and Health Care - Sheikh Shadab Rana.pdf';
import Roadway from '../../pdfs/Smart Contracts Roadway to Global Village - G. Srividhya Iyer.pdf';

import Equity from '../../pdfs/Dismissing Binaries Unlocking Indias Potential for Equity and Inclusivity via Legislative Reform focused on Linguistics - Reonia Mathew.pdf';
import Homo from '../../pdfs/Legality of Homosexual marriages in India - Mumal Kunwar Bhati & Nikunj Pandey.pdf';
import Trade from '../../pdfs/Preferential Trade Agreements Benefits or Determinants - Khuloos Aziz Chawla.pdf';
import Amazon from '../../pdfs/The Amazon Inferno Combating Deforestation Under International Law - Apurva Ambasth.pdf';
import Problems from '../../pdfs/Deprivation Of Right to Life by Medical Negligence – Problems and Solutions - Gururaj D. Devarhubli & Bushra Sarfaraj Patel.pdf';
import Shadow from '../../pdfs/Domestic Violence Against Women in India A Shadow Pandemic – Ashwini.pdf';
import Seeds from '../../pdfs/Patentability of Genetically Modified Seeds - Shristi Keshri.pdf';
import Muslim from '../../pdfs/Comparative Study of Marriage in Muslim and Jewish Law - Maanvi Trivedi & Pranav.pdf';
import Delays from '../../pdfs/Delays In Corporate Insolvency Resolution Process Has the IBC Met Its Purpose - Shivansh Mani Sharma.pdf';
import Bed from '../../pdfs/Death-Bed Gift Neither A Gift nor A Legacy - Anu Nivetha. S.pdf';
import Develop from '../../pdfs/Legal System and Economic Development of India - Iqra Mir.pdf';
import Connection from '../../pdfs/Understanding The Connection Between Family Courts and Gender Bias - Aditi Mishra (1).pdf';


import  Section from '../../pdfs/Analysis of Section 185 & 186 of the Companies Act, 2013 - Suveer Dubey.pdf';
import  Nbfc from '../../pdfs/Evolution of Regulatory Framework of NBFCs - Kritika Mundra.pdf';
import Forms from '../../pdfs/Patenting of Life Forms - Nandan Malhotra.pdf';
import Lion from '../../pdfs/Whether The Existing Laws and Policies Are Sufficient for The Protection of Lion Tailed Monkeys – An Analysis – Adv. Chithranjali R Nair.pdf';
import Firms from '../../pdfs/Idea – Expression Dichotomy A Comparative Study of Legal Application In UK, USA And India - Anannya Shree Adhikari.pdf';
import Factory from '../../pdfs/Appreciable Adverse Effect on Competition Factors and Applicability - Akhil Madan & Samyukta Rawat.pdf';
import Cybersec from '../../pdfs/‘Cyberwar’ – Obscure Domain of International Law - Priyanka Vaidyanath.pdf';
import Union from '../../pdfs/Right To Life and Personal Liberty Navtej Singh Johar Vs Union of India - Neelargho Ray.pdf';
import Lifestyle from '../../pdfs/Rape Is It a Lifestyle or A Behavioural Problem - Akshita Sharma.pdf';

import Justices from '../../pdfs/Juvenile Courts and Juvenile Justice The Similarities and Differences in Present Scenario - Shipra Mishra & Dr. Sadaf Khan.pdf';
import Teacher from '../../pdfs/Reflection of teaching of Geeta in Indian Constitution..pdf';
import Eccode from '../../pdfs/Ecocide - Anavi Nagpal.pdf';
import Taxes from '../../pdfs/Reforms in Direct Taxes through Union Budgets- Vedika Gagrani.pdf';
import Porn from '../../pdfs/The Big Picture of Child Pornography - Sanya Shah.pdf';

import Federation from '../../pdfs/Case Comment- Federation of Obstetrics and Gynaecological Societies of India (FOGSI) V. Union of India and Ors. - Gayathri Jiji.pdf';
import Clemency from '../../pdfs/Clemency Power of Executives- A Critical Analysis - Mannu Jaiswal.pdf';
import Inter from '../../pdfs/Inter-Relationship Between Business, Human Rights and Sustainable Development Goals in The Light of United Nations Guiding Principles - A Critical Analysis - Amrita Malik & Dr. Rashmi K.S.pdf'
import Sword from '../../pdfs/JOHN DOE Shield became Sword - Kaishena Chauhan.pdf'

import Retail from '../../pdfs/Augmented Reality and Its Impact on The Retail Industry - Disha Jain.pdf';
import State from '../../pdfs/Right To Expropriate by A Sovereign State A Jurisprudential Analysis - Shruti Srivastava.pdf';
import Visa from '../../pdfs/UCC vis-a-vis Indian Pluralism - Jyotsana Singh.pdf';

import Provision from '../../pdfs/Constitutional Provisions for The Protection of Environment in India - Dr. Smita Satapathy.pdf';
// import Tradition from '../../pdfs/Conversion of Traditional Knowledge to Intellectual Property An Analysis of The Use of Biotechnological Resources of India - Abhishek Sarma.pdf';
import Impact from '../../pdfs/The Study of Globalization and Its Impact on The Evolution of Maternity Act - Priya Das.pdf';














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











                                                                        // this.state.file === 'constitutional'
                                                                        //     ?
                                                                        //     <iframe
                                                                        //         src={constitutional}
                                                                        //         style={{ height: '100vh' }}
                                                                        //         height="100%"
                                                                        //         width="100%"
                                                                        //         title='x1'
                                                                        //         frameBorder="0"
                                                                        //         marginHeight="0"
                                                                        //         marginWidth="0"
                                                                        //     />
                                                                        //     :

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
                                                                                // this.state.file === 'law_of_tort'
                                                                                //     ?
                                                                                //     <iframe
                                                                                //         src={law_of_tort}
                                                                                //         style={{ height: '100vh' }}
                                                                                //         height="100%"
                                                                                //         width="100%"
                                                                                //         title='x1'
                                                                                //         frameBorder="0"
                                                                                //         marginHeight="0"
                                                                                //         marginWidth="0"
                                                                                //     />
                                                                                //     :
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


                                                                                                                        
                                                                                                                        // this.state.file === 'Imprison'
                                                                                                                        // ?
                                                                                                                        // <iframe
                                                                                                                        //     src={Imprison}
                                                                                                                        //     style={{ height: '100vh' }}
                                                                                                                        //     height="100%"
                                                                                                                        //     width="100%"
                                                                                                                        //     title='x1'
                                                                                                                        //     frameBorder="0"
                                                                                                                        //     marginHeight="0"
                                                                                                                        //     marginWidth="0"
                                                                                                                        // />
                                                                                                                        // :



                                                                                                                        
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




                                                                                                                        this.state.file === 'China'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={China}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :



                                                                                                                        this.state.file === 'Practice'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Practice}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :



                                                                                                                        this.state.file === 'Overview'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Overview}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :



                                                                                                                        this.state.file === 'Reservation'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Reservation}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :




                                                                                                                        this.state.file === 'Patent'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Patent}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :



                                                                                                                        this.state.file === 'Digital'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Digital}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :




                                                                                                                        


                                                                                                                        this.state.file === 'Concept'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Concept}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :




                                                                                                                        


                                                                                                                        this.state.file === 'Prisoner'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Prisoner}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :




                                                                                                                        this.state.file === 'Kunj'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Kunj}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :


                                                                                                                        this.state.file === 'Trafficking'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Trafficking}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :



                                                                                                                        this.state.file === 'Indecent'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Indecent}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :





                                                                                                                        
                                                                                                                        this.state.file === 'Rape'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Rape}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :







                                                                                                                        this.state.file === 'Coal'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Coal}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :





                                                                                                                        this.state.file === 'Genital'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Genital}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :




                                                                                                                        
                                                                                                                        this.state.file === 'Trip'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Trip}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :






                                                                                                                        
                                                                                                                        
                                                                                                                        this.state.file === 'Sexual'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Sexual}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :




                                                                                                                                         
                                                                                                                        this.state.file === 'Downfall'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Downfall}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :






                                                                                                                        this.state.file === 'take'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={take}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :


                                                                                                                        this.state.file === 'PrisonerReforms'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={PrisonerReforms}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :

                                                                                                                        
                                                                                                                        this.state.file === 'AmbitOfRight'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={AmbitOfRight}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :

                                                                                                                        this.state.file === 'AnalysisOfConsumerProtection'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={AnalysisOfConsumerProtection}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :

                                                                                                                        this.state.file === 'PreventingDefection'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={PreventingDefection}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :







                                                                                                                        this.state.file === 'Exclusive'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Exclusive}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :


                                                                                                                        this.state.file === 'An'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={An}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :




                                                                                                                        this.state.file === 'Detailed'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Detailed}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :












                                                                                                                        

                                                                                                                        this.state.file === 'Adoption'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Adoption}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :

                                                                                                                        

                                                                                                                        this.state.file === 'Power'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Power}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :



                                                                                                                        this.state.file === 'Global'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Global}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :




                                                                                                                        this.state.file === 'Dead'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Dead}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :



                                                                                                                        

                                                                                                                        this.state.file === 'Making'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Making}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :




                                                                                                                        this.state.file === 'Operation'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Operation}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :
                                                                                                                        


                                                                                                                        this.state.file === 'Burdern'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Burdern}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :














                                                                                                                        this.state.file === 'Tax'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Tax}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :
                                                                                                                        this.state.file === 'Forensic'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Forensic}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :
                                                                                                                        this.state.file === 'Roadway'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Roadway}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :
                                                                                                                        this.state.file === 'Care'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Care}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :















                                                                                                                        this.state.file === 'Trade'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Trade}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :
                                                                                                                        this.state.file === 'Amazon'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Amazon}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :
                                                                                                                        this.state.file === 'Homo'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Homo}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :
                                                                                                                        this.state.file === 'Equity'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Equity}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :



                                                                                                                        this.state.file === 'Problems'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Problems}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :

















                                                                                                                        


                                                                                                                        this.state.file === 'Shadow'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Shadow}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :


                                                                                                                        


                                                                                                                        this.state.file === 'Seeds'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Seeds}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :




                                                                                                                        

                                                                                                                        this.state.file === 'Muslim'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Muslim}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :
                                                                                                                        

                                                                                                                        this.state.file === 'Delays'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Delays}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :




                                                                                                                        this.state.file === 'Develop'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Develop}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :


                                                                                                                        this.state.file === 'Bed'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Bed}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :











                                                                                                                        
                                                                                                                        this.state.file === 'Connection'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Connection}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :






                                                                                                                            
                                                                                                                        this.state.file === 'Section'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Section}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :


                                                                                                                            
                                                                                                                        this.state.file === 'Nbfc'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Nbfc}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :


                                                                                                                            
                                                                                                                        this.state.file === 'Lion'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Lion}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :


                                                                                                                            
                                                                                                                        this.state.file === 'Forms'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Forms}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :




                                                                                                                        
                                                                                                                            
                                                                                                                        this.state.file === 'Firms'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Firms}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :






                                                                                                                            
                                                                                                                            
                                                                                                                        this.state.file === 'Factory'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Factory}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :




                                                                                                                                
                                                                                                                        this.state.file === 'Cybersec'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Cybersec}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :




                                                                                                                                   
                                                                                                                        this.state.file === 'Union'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Union}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :




                                                                                                                        
                                                                                                                                   
                                                                                                                        this.state.file === 'Lifestyle'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Lifestyle}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :




                                                                                                                        this.state.file === 'Justices'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Justices}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :






                                                                                                                        this.state.file === 'Teacher'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Teacher}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :





                                                                                                                        

                                                                                                                        this.state.file === 'Eccode'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Eccode}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :






                                                                                                                        
                                                                                                                        this.state.file === 'Taxes'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Taxes}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :











                                                                                                                        this.state.file === 'Porn'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Porn}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :




                                                                                                                        

                                                                                                                        this.state.file === 'Federation'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Federation}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :
                                                                                                                        

                                                                                                                        this.state.file === 'Inter'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Inter}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :
                                                                                                                        

                                                                                                                        this.state.file === 'Clemency'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Clemency}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :
                                                                                                                        

                                                                                                                        this.state.file === 'Sword'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Sword}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :


                                                                                                                        
                                                                                                                        this.state.file === 'Retail'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Retail}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :

                                                                                                                        
                                                                                                                        this.state.file === 'State'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={State}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :


                                                                                                                                
                                                                                                                        this.state.file === 'Visa'
                                                                                                                        ?
                                                                                                                        <iframe
                                                                                                                            src={Visa}
                                                                                                                            style={{ height: '100vh' }}
                                                                                                                            height="100%"
                                                                                                                            width="100%"
                                                                                                                            title='x1'
                                                                                                                            frameBorder="0"
                                                                                                                            marginHeight="0"
                                                                                                                            marginWidth="0"
                                                                                                                        />
                                                                                                                        :

                                                                                                                        // this.state.file === 'under'
                                                                                                                        // ?
                                                                                                                        // <iframe
                                                                                                                        //     src={Genital}
                                                                                                                        //     style={{ height: '100vh' }}
                                                                                                                        //     height="100%"
                                                                                                                        //     width="100%"
                                                                                                                        //     title='x1'
                                                                                                                        //     frameBorder="0"
                                                                                                                        //     marginHeight="0"
                                                                                                                        //     marginWidth="0"
                                                                                                                        // />
                                                                                                                        // :



















                                                                                                                    <div>tyest</div>

                }

            </div>
        );

    }
};

export default PDFViewer;

