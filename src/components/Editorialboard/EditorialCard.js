import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
// import roundedCircle from "react-bootstrap/roundedCircle";

import Ecardmodules from "./EditorialCardmodules";
// import Ebpic from "./jor.jpeg";
import Rohan from "./Rohan.jpg";
import Sc from "./Saurabh Chaturvedi.png";
import Kn from "./Keshab Nandy.jpg";
import Mo from "./Megha Ojha.jpg";
import Aj from "./Anirudha Joshi.jpg";
import Ds from "./Dweep Shah.jpg";
import Card from "react-bootstrap/Card";
import '../Styles/editorialboard.css';







const Editorialcarddetails = ()  =>(

  <Container>
    <div> 
    <Card style={{ width: '35rem' }}>
      
 
  <Card.Body>
    <Card.Title className = "card_titles">DR. SAURABH CHATURVEDI (B.B.A., LL. B (Hons.), Diploma in Corporate Law) 
    FOUNDER – EDITOR IN CHIEF 
    PUBLISHER
      </Card.Title>
  
    <Card.Img className="ebpic" src = {Rohan} roundedCirle />

    <Card.Title> About him </Card.Title>
    <Card.Text className="card_descp">
    Mr. Rohan Garje is a law aficionado. He did his schooling at Fr. Agnel Polytechnic University, Navi Mumbai.
     He is very fascinated by the concept of legal research work and he has secured a number of publications on various platforms including law journals, blogs and newsletters.
      His work covers various issues involved in the field of Criminal Law, Constitutional Law, IPR Law, Taxation Law and Company Law. 
      He has also participated in various Moot Court Competitions, Mediation Competitions and Negotiation Competitions at the National Level.
       His legal article on “Arbitral Awards under Section 34: A Brief Overview” was published in NMIMS School of Law Newsletter. 
       He is a well-rounded individual who lives with passion, commitment and grace. 
    </Card.Text>
    <Card.Title className="card_contacts"> Contact </Card.Title>
    <Card.Text>
    Contact No. +91 9372988202
    Email ID: rohan.garje77@gmail.com 
    Address – C-602, Bhumiraj Manor, Sector – 14, Sanpada, Navi Mumbai, 400 705, Maharashtra
    </Card.Text>
  
  </Card.Body>
</Card>
    </div>


    <div> 
    <Card style={{ width: '20rem' }}>
 
  <Card.Body>
    <Card.Title className = "card_titles">DR. SAURABH CHATURVEDI (PH.D. (LAW) LL.M, LL. B)
EDITORIAL BOARD MEMBER 
PROFESSOR & ASSOCIATE DEAN 
      </Card.Title>
    <Card.Img className="ebpic1" src = {Sc} />
    <Card.Title> About him </Card.Title>
    <Card.Text className="card_descp">
    Dr. Saurabh Chaturvedi holds a LL. B, LL. M and Doctorate in Law from CCS University, Meerut, India, and also PGDHRM from Indira Gandhi National Open University, India.
Before joining academia Dr. Saurabh served Corporate Companies including Reliance Industries, KJMC Merchant Bankers and Electra (India) Ltd. etc. for more than 9 years at various levels and deputed in various countries in South East Asia and Europe.
In Legal Academics Dr. Saurabh served in National Law Universities at Jodhpur and Patna in India, Ethiopian Civil Services College, Addis Ababa (Ethiopia) University of Iringa (Tanzania) and Queensland State University, Brisbane (Australia).
Dr. Saurabh took many academic sessions with Southampton and Aberdeen Universities in UK and Ghent University in Belgium (West Europe)
Dr. Saurabh has authored two books (Child Jurisprudence and International Trade law) and published in international ISI /Scopus and ERA Indexed Journals and attended various conferences/seminars organized by International Bodies in France, Sweden and India.
Dr. Saurabh supervises Ph. D scholars and guide LL.M/M. Phil students opting for Cyber Law, Human Rights and Jurisprudence. Presently he is supervising one PhD scholar at Punjabi University, Patiala.
    </Card.Text>
    <Card.Title className="card_contacts"> Contact </Card.Title>
    <Card.Text>
    Faculty Profile - https://www.nmimsnavimumbai.org/faculty/saurabh-chaturvedi 
Institutional Email ID: saurabh.chaturvedi@nmims.edu (Professional)
Address – Plot No. 2, Pethapada, Next to Ramsheth Thakur College, Sector 33, Kharghar, Navi Mumbai, Maharashtra 410210
    </Card.Text>
  
  </Card.Body>
</Card>
    </div>







    <div> 
    <Card style={{ width: '20rem' }}>
 
  <Card.Body>
    <Card.Title className = "card_titles">DR. KESHAB NANDY (PH.D. (MANAGEMENT), LL. B)
EDITORIAL BOARD MEMBER 
PROFESSOR  
      </Card.Title>
    <Card.Img className="ebpic1" src = {Kn} />
    <Card.Title> About him </Card.Title>
    <Card.Text className="card_descp">
    Prof. (Dr) Keshab Nandy is Professor of Law and Management at Kirit P. Mehta School of Law,
     NMIMS Navi Mumbai and comes with rich 39 years of experience spread across Teaching, Civil Service, Magistrate, 
     senior positions in Reserve Bank of India, Unit Trust of India and as SVP, Occupier, 
     CVO and Director in Boards of 5 well known Manufacturing Companies. He is member of 
     various Corporate Committees and Industry bodies like Bombay Chamber of Commerce & Industry etc and recipient of several prestigious awards by different Govt and Industry bodies. He is a reputed motivational speaker in India and abroad and is an acclaimed NLP trainer. His book "Be a Habitual Winner" is a best-seller
    </Card.Text>
    <Card.Title className="card_contacts"> Contact </Card.Title>
    <Card.Text>
    Faculty Profile - https://www.nmimsnavimumbai.org/faculty/keshab-nandy/ 
Institutional Email ID: keshab.nandy@nmims.edu.in (Professional)
Address - Plot No. 2, Pethapada, Next to Ramsheth Thakur College, Sector 33, Kharghar, Navi Mumbai, Maharashtra 410210
    </Card.Text>
  
  </Card.Body>
</Card>
    </div>




    <div> 
    <Card style={{ width: '20rem' }}>
 
  <Card.Body>
    <Card.Title className = "card_titles">DR. MEGHA OJHA (PH.D. (LAW) LL.M, LL. B)
EDITORIAL BOARD MEMBER 
ASSISTANT PROFESSOR   
      </Card.Title>
    <Card.Img className="ebpic1" src = {Mo} />
    <Card.Title> About him </Card.Title>
    <Card.Text className="card_descp">
    Megha Ojha is an Assistant Professor of Law at Kirit P. Mehta School of Law, NMIMS University, Navi Mumbai Campus.
     She is having teaching experience and litigation experience of more than 9 years. 
     She has also worked as Legal Advisor in various companies. 
     She pursued her research study (Ph.D.) at University School of Law, Gujarat University, AhmedabadCompleted PH.D. 
     in law from Gujarat University under the guidance of Prof. (Dr.) Mayuri H. Pandya. 
     She has done her Masters in Law (LL.M.), with Business Law as an area of specialization,
      from Jai Narayan Vyas University, Jodhpur and graduation (LL.B.) from Mohanlal Sukhadiya University, Udaipur.
      She has qualified UGC NET exam in year 2013 and awarded the University Grant Commission Junior Research fellowship in year 2015.
       She has a keen interest in legal research and has published 10 research papers in reputed and referred journals in various areas of law and published 2 book chapters. She has presented research papers in 12 national seminars and in 3 international conferences. She authored two books. Her area of interest includes Intellectual Property Rights, Constitutional Law, Indian Legal History and Business Law. 
    </Card.Text>
    <Card.Title className="card_contacts"> Contact </Card.Title>
    <Card.Text>
    Faculty Profile - https://www.nmimsnavimumbai.org/faculty/megha-ojha/ 
Institutional Email ID: megha.ojha@nmims.edu (Professional)
Address - Plot No. 2, Pethapada, Next to Ramsheth Thakur College, Sector 33, Kharghar, Navi Mumbai, Maharashtra 410210

    </Card.Text>
  
  </Card.Body>
</Card>
    </div>



    <div> 
    <Card style={{ width: '20rem' }}>
 
  <Card.Body>
    <Card.Title className = "card_titles">ADVOCATE ANIRUDHA JOSHI (LL.M, LL. B, B.B.A)
EDITORIAL BOARD MEMBER    
      </Card.Title>
      <Card.Text>FOUNDER AND MANAGING PARTNER OF JURIS ARMOR ADVOCATES & LEGAL ADVISORS, ADVOCATE, BOMBAY HIGH COURT</Card.Text>
    <Card.Img className="ebpic1" src = {Aj} />
    <Card.Title> About him </Card.Title>
    <Card.Text className="card_descp">
    Advocate Anirudha Joshi is the Founder and Managing Partner of Juris Armor, Advocates and Legal Advisors established 2016, 
    JURIS ARMOR is a full-service, multi-disciplinary, litigation centric law firm with a focus on civil and corporate 
    litigation located in Pune. He is an experienced lawyer practicing for 7 years in Pune District and Sessions Court and the
     Bombay High Court. He has a good understanding of Arbitration matters, Software & Industrial contracts, NCLT matters, 
     Corporate Advisory, Divorce & Maintenance cases and Property disputes. He has argued over 200 divorce cases over a period of
      7 years. He possesses excellent written and verbal communication skills. He is able to present complex material in a clear, 
      concise, and persuasive manner, for a range of audiences. He is also a visiting faculty at Kirit P. Mehta School of Law, NMIMS Navi Mumbai. There he is teaching Law to 5-year B.B.A. LL. B and B.A. LL. B Course. He holds a Masters of Law (LL.M), Bachelor of Law (LL. B) and Bachelors in Business Administration (B.B.A).
    </Card.Text>
    <Card.Title className="card_contacts"> Contact </Card.Title>
    <Card.Text>
    Firm Profile (Hyperlink) - https://jurisarmor.in/our-team/  
Visiting Faculty Profile (Hyperlink) - https://www.nmimsnavimumbai.org/visiting-faculties/ 
Institutional Email ID: jurisarmor@gmail.com (Professional)
Address - JURIS ARMOR, Advocates & Legal Advisors, Office No 4, Business Guild, Law College Road, Opp. Wadeshwar Restaurant, Erandwane, Pune – 411004

    </Card.Text>
  
  </Card.Body>
</Card>
    </div>





    <div> 
    <Card style={{ width: '20rem' }}>
 
  <Card.Body>
    <Card.Title className = "card_titles">ADVOCATE DWEEP SHAH (LL. B, B.B.A)
EDITORIAL BOARD MEMBER     
      </Card.Title>
      <Card.Text>ADVOCATE, BOMBAY HIGH COURT AND LEGAL ASSOCIATE AT JAYAKAR & PARTNERS</Card.Text>
    <Card.Img className="ebpic1" src = {Ds} />
    <Card.Title> About him </Card.Title>
    <Card.Text className="card_descp">
    Mr. Dweep Shah is an Advocate in Bombay High Court. 
    He is also serving as a Legal Associate at a law firm called Jayakar & Partners, Bombay.
     He completed his B.B.A LL. B (Hons.) from Pravin Gandhi School of Law, Bombay. 
     He started practicing as an advocate in Bombay, mainly dealing with Civil Litigation, Arbitration and Dispute Resolution, 
     Real Estate Cases and Land Matters. Advocate Dweep Shah has given talks on Constitutional Law to Law Students.
      His scholarly activities include attending Workshops, Seminars, Moot Courts, Conferences at National Level
       and publishing research papers on Constitutional Law. He has interned with various reputed Law Firms. 
       He was also awarded a “Certificate of Merit” from Pravin Gandhi School of Law for his academic performance and research work.
    </Card.Text>
    <Card.Title className="card_contacts"> Contact </Card.Title>
    <Card.Text>
    LinkedIn Profile (Hyperlink) - https://in.linkedin.com/in/dweep-shah-24608a119 
Institutional Email ID: dshah@jayakarpartners.com (Professional)
shahdweep6@gmail.com (Personal)
Address - 1301, Raheja Centre, Free Press Journal Marg, Nariman Point, Mumbai, Maharashtra – 400021
Address 2 - High Court, Fort, Mumbai, Maharashtra 400001
    </Card.Text>
  
  </Card.Body>
</Card>
    </div>


    
  </Container>
);

export default Editorialcarddetails;





//   <div className="text-field-design">
//     <Container>
//     <Row>
//     <Col>
//     <Ecardmodules cardtitle = {cardtitle1} cardText = {carddescp1} cardimg = {cardpic1} />
//     </Col>
//     <Col>
//     <Ecardmodules cardtitle = {cardtitle2} cardText = {carddescp2} />
//     </Col>
//     <Col>
//     <Ecardmodules cardtitle = {cardtitle3} cardText = {carddescp3} />
//     </Col>
//   </Row>

//     <br></br>
//     <br></br>
// <Row>
//     <Col>
//     <Ecardmodules cardtitle = {cardtitle4} cardText = {carddescp4} />
//     </Col>
//     <Col>
//     <Ecardmodules cardtitle = {cardtitle5} cardText = {carddescp5} />
//     </Col>
//     <Col>
//     <Ecardmodules cardtitle = {cardtitle6} cardText = {carddescp6} />
//     </Col>
//     </Row>

//     <br></br>
//     <br></br>

//     <Row>
//     <Col>
//     <Ecardmodules cardtitle = {cardtitle7} cardText = {carddescp7} />
//     </Col>
//     <Col>
//     <Ecardmodules cardtitle = {cardtitle8} cardText = {carddescp8} />
//     </Col>
//     <Col>
//     <Ecardmodules cardtitle = {cardtitle9} cardText = {carddescp9} />
//     </Col>
//     </Row>
//   </Container>
//   </div>