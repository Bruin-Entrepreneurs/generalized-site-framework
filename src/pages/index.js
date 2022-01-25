import React from "react";
import styled from 'styled-components';
import { Element } from 'react-scroll';
import Helmet from 'react-helmet';

import '../main.css';


import backgroundImage from '../assets/background.png';
import LandingPic from '../assets/landing.png';
import Navbar from '../components/navbar/Navbar';
import TextSection from '../components/TextSection';
import FooterSection from '../components/FooterSection';



// image assets for partners
import BEPic from '../assets/partners/be.png';

// SF logo asset
import SFLogoPic from '../assets/sf-logo.png';


const App = () => {

  const NavItems = [
    {text: "About Us", href: "about-us", internal: true},
    {text: "Students", href: "students", internal: true},
    {text: "Recruiters", href: "recruiters", internal: true},    
    {text: "FAQ", href: 'faq', internal: true},
    {text: "Contact", href: 'contact', internal: true}
  ];

  const startupFairDescription = `Startup Fair LA is a career fair connecting the UCLA community to startups in the Los Angeles area. Startup Fair LA was last held on January 29, 2021, with 37 startups and 300+ students coming together for our 8th annual recruiting event. This year, the event will be hosted by Bruin Entrepreneurs & Sigma Eta Pi, two of the esteemed entrepreneurship organizations on campus. This student-led initiative is UCLA’s flagship startup recruiting event open to UCLA undergraduate and graduate students. This fair connects motivated, self-starter UCLA students with high-growth startup companies. This is an excellent opportunity for talented students and impactful companies alike to discuss existing opportunities and create new ones for potential full-time, part-time, or internship positions. `;
  const beDescription = `Bruin Entrepreneurs is UCLA’s premier student entrepreneurship organization. We encourage creativity and innovation on campus by supporting UCLA students at every stage in their journey as aspiring entrepreneurs and by hosting large and small-scale events throughout the year. In addition to Startup Fair LA, we host engaging initiatives throughout the year, including Startup Labs -- our student venture accelerator program -- and 1000 Pitches -- our annual pitch competition -- among others.
  `;
  const expectDescription = `Students will have access to connect with high-growth startups in various industries to discuss existing opportunities and create new ones for potential full-time, part-time, or internship positions. The event will be held virtually from 5 pm to 8 pm PST on Friday, February 4, 2022. Students can join anytime throughout the duration of the event.`;

  const contributors = [
    "Directed by Scott Davidson Jr",
    "Designed by Sela Serafin",
  ];

  const contacts = [
    <a href="mailto:contact@startupfairla.com">contact@startupfairla.com</a>
  ];

  const socials = [
    <div>Facebook: <a href="https://www.facebook.com/startupfairla/">@startupfair.la</a></div>,
    <div>Instagram: <a href="https://www.instagram.com/startupfair.la/">@startupfair.la</a></div>,
    <div>LinkedIn: <a href="https://www.linkedin.com/company/startup-fair-la/about/">@Startup Fair LA</a></div>
  ];

  return (
    <div>
      <Helmet
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: SFLogoPic },
        ]}
      >
        <title>Startup Fair LA</title>
      </Helmet>

      <Navbar 
          logo={BEPic}
          navItems={NavItems}
          style={{top: "-10rem"}}
          
        />
    <BackgroundContainer>
      <ContentContainer>
        
        <Landing src={LandingPic}/>
        
        <OpaqueSection>
          <Element name="about-us" /> 
          <BigSectionTitle>About Us</BigSectionTitle>
          <TextSection 
            id="about-startup" 
            title="About Startup Fair"
            text={startupFairDescription} 
            dividerColor="transparent" 
            titleColor="black"
            textColor="black"
          />
          <TextSection 
            id="about-be" 
            title="About BE"
            text={beDescription} 
            dividerColor="transparent" 
            titleColor="black"
            textColor="black"
          />      
        </OpaqueSection>       
        <SectionBreak />
        <Element 
          name="students" 
        />
        <OpaqueSection>
          <BigSectionTitle>Students</BigSectionTitle>
          <TextSection
            id="expect" 
            title="What to Expect"
            text={expectDescription} 
            dividerColor="transparent" 
            dividerPresent={false}
            titleColor="black"
            textColor="black"
          />
          <TextSection
            id="prepare" 
            title="How to Prepare"
            text={
              <ol>
                <li>Sign up through the registration form linked <a href={'https://forms.gle/8nACfZ2q5CJr1kL19'}>here</a>.</li>
                <li>Follow us for recruiter announcements and event updates!
                  <ul>
                    <li>Facebook: <a href="https://www.facebook.com/startupfairla/">@startupfair.la</a></li>
                    <li>Instagram: <a href="https://www.instagram.com/startupfair.la/">@startupfair.la</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/company/startup-fair-la/about/">@Startup Fair LA</a></li>
                  </ul>
                </li>
                <li>Get excited!</li>
              </ol>
            } 
            dividerColor="transparent" 
            dividerPresent={false}
            titleColor="black"
            textColor="black"
          />
        </OpaqueSection>
        <SectionBreak />

        <Element 
          name="recruiters" 
        />
        <OpaqueSection>
          <BigSectionTitle>Recruiters</BigSectionTitle>
          <div style={{fontStyle: "italic", width: "70%", marginLeft: "auto", marginRight: "auto", marginTop: "1rem", marginBottom: "1rem"}}>
            <div style={{width: "90%", marginLeft: "auto", marginRight: "auto", lineHeight: "175%"}}>
            Startup Fair LA is UCLA’s only career fair exclusive to startups. With a combined 700 active members and over 1500 engineers in our network, you will be able to meet some of the best and brightest that UCLA has to offer.  
            </div>
          </div>
          <TextSection
            id="spon-breakdown" 
            title="Sponsorship Breakdown"
            text={
              `This year, the price of registration for Startup Fair LA is a selection of one of four sponsorship tiers offered for this event. These tiers are designed to increase the amount of exposure a sponsor will receive prior to and during the fair to expand the size of potential employees/interns a company connects with. The higher ranking a tier, the more exposure and marketing an attending startup will receive for this event.`
            } 
            dividerPresent={false}
            dividerColor="transparent" 
            titleColor="black"
            textColor="black"
          />
          {/* <TextSection
            id="plat-benefits" 
            title="Platinum Tier Benefits"
            text={
              <ul>
                <li>Unique login and private video conferencing booth</li>
                <li>Unlimited number of recruiter representatives</li>
                <li>Your logo on the Startup Fair website</li>
                <li>Resume book from all attendees</li>
                <li>Social media features</li>
              </ul>
            } 
            dividerPresent={false}
            dividerColor="transparent" 
            titleColor="black"
            textColor="black"
          /> */}
          <div style={{width: "70%", marginLeft: "auto", marginRight: "auto", marginTop: "1rem", marginBottom: "1rem"}}>
            <div style={{width: "90%", marginLeft: "auto", marginRight: "auto", lineHeight: "175%", paddingBottom: "1.5rem"}}>
            The types of sponsorship tiers and what they entail is listed in our <a href="https://drive.google.com/file/d/1o-Jl99fj7MqYtNsxoudvIXXwhSsxKths/view">Startup Fair LA 2022 Sponsorship Brochure</a>!
            <br />
            <br />
            Interested or have questions? Please reach out to us at <a href="mailto:startupfairla@gmail.com">startupfairla@gmail.com</a>!
            </div>
          </div>
        </OpaqueSection>
        
        <SectionBreak />
        <Element name="faq" />
        <OpaqueSection>
          <BigSectionTitle>FAQs</BigSectionTitle>
          <SmallerSectionTitle>For Students:</SmallerSectionTitle>
            <TextSection
              id="benefits" 
              title="What are the benefits?"
              text={
                `As students, you will have the opportunity to interact and connect with different startups to discuss career and learning opportunities. We will also provide a resume book of all the attendees to a majority of the startups and send out relevant professional contact information at the conclusion of the event.`
              } 
              dividerPresent={false}
              dividerColor="transparent" 
              titleColor="black"
              textColor="black"
p            />
            <TextSection
              id="startups" 
              title="What kind of startups will be there?"
              text={
                `There will be numerous startups from various industries and backgrounds – a list of the attending companies with their descriptions will be released prior to the day of the event.`
              } 
              dividerPresent={false}
              dividerColor="transparent" 
              titleColor="black"
              textColor="black"
            />
            <TextSection
              id="sign-up" 
              title="How do I sign up?"
              text={
                <div>
                  Sign up for our event through the <a href="https://forms.gle/8nACfZ2q5CJr1kL19">Startup Fair LA 2022 Student Registration Form</a>. Not only is it available on our website, but it will be linked on both Bruin Entrepreneurs’ and Sigma Eta Pi’s social media accounts. Please contact us at <a href="mailto:contact@startupfairla.com">contact@startupfairla.com</a> for more details!
                </div>
              } 
              dividerPresent={false}
              dividerColor="transparent" 
              titleColor="black"
              textColor="black"
            />
          <SmallerSectionTitle>For Recruiters: </SmallerSectionTitle>
            <TextSection
              id="register" 
              title="How do I register?"
              text={
                `Please express your interest to contact@startupfairla.com, we look forward to hearing from you and will send the registration details!`
              } 
              dividerPresent={false}
              dividerColor="transparent" 
              titleColor="black"
              textColor="black"
            />
            <TextSection
              id="payments" 
              title="How do we direct our payments?"
              text={
                <div>
                  Please contact us at <a href="mailto:contact@startupfairla.com">contact@startupfairla.com</a> for more details!
                </div>
              } 
              dividerPresent={false}
              dividerColor="transparent" 
              titleColor="black"
              textColor="black"
            />
        </OpaqueSection>
        <SectionBreak />
        <Element name="contact" />
        <OpaqueFooterSection>
          <FooterSection 
            logo={SFLogoPic} 
            initiative="Startup Fair LA" 
            contributors={contributors} 
            contacts={contacts} 
            socials={socials}
            titleTextColor="black"
          />
        </OpaqueFooterSection>
      </ContentContainer>
    </BackgroundContainer>
    </div>
  );
}

/* CSS hack for getting div height to adjust to the height 
of the background. For startup labs, the ratio is: 3.7618 height/width */ 
const BackgroundContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 0;
  padding-top: 376.18%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${backgroundImage});
`

const ContentContainer = styled.div`
  position: absolute;
  width: 100vw;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Landing = styled.img`
width: 80%;
margin-left: 10%;
margin-right: 10%;
`;

const OpaqueSection = styled.div`
background-color: rgba(255,255,255, 0.9);
  height: auto;
`;

const OpaqueFooterSection = styled.div`
background-color: rgba(255,255,255, 0.9);
display: flex;
// height: 100%;
`;

const SectionBreak = styled.div`
  height: 10vh;
`;

const BigSectionTitle = styled.div`
color: #01349C;
font-size: 3.5rem;
width: 80%;
margin-left: auto;
margin-right: auto;
font-weight: bold;
font-family: 'Montserrat', sans-serif;
`;
const SmallerSectionTitle = styled.div`
margin-top: 2rem;
margin-bottom: 1rem;
color: #01349C;
font-size: 2.5rem;
width: 80%;
margin-left: auto;
margin-right: auto;
`;

export default App;
