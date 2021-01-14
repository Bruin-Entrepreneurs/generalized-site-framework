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

  
  const startupFairDescription = `Startup Fair is a career fair hosted by Bruin Entrepreneurs. This student-led entrepreneurship initiative is UCLA’s flagship startup recruiting event exclusively open to UCLA undergraduate students. This fair connects motivated, self-starter UCLA students with CA-based high-growth startup companies. This is an excellent opportunity for talented students and impactful companies alike to discuss existing opportunities and create new ones for potential full-time, part-time, or internship positions. `;
  const beDescription = `Bruin Entrepreneurs is UCLA’s premier student entrepreneurship organization. We encourage creativity and innovation on campus by supporting UCLA students at every stage in their journey as aspiring entrepreneurs and by putting on large and small scale events throughout the year. In addition to Startup Fair LA, we host engaging initiatives throughout the year including Startup Labs -- our student venture accelerator program -- and 1000 Pitches -- our annual pitch competition -- among others.`;
  const expectDescription = `You will have access to connect with high growth startups in various industries to discuss existing opportunities and create new ones for potential full-time, part-time, or internship positions. The event will be held virtually on Tikkl, and you can drop-in anytime between 10AM - 5PM PST. `;

  const contributors = [
    "Directed by Sarah Wilen",
    "Designed by Sela Serafin",
  ];

  const contacts = [
    <a href="mailto:startupfairla@gmail.com">startupfairla@gmail.com</a>
  ];

  const socials = [
    <div>Instagram: <a href="https://www.instagram.com/startupfair.la/">@startupfair.la</a></div>,
    <div>Facebook: <a href="https://www.facebook.com/startupfairla/">@startupfair.la</a></div>,
    <a href='https://www.linkedin.com/company/startup-fair-la/about/'>LinkedIn</a>
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
            title="What to Prepare"
            text={
              <ol>
                <li>Sign up on <a href={'https://tinyurl.com/StartupFairLa/'}>Tikkl (3 min): tinyurl.com/StartupFairLa</a></li>
                <li>Follow us for recruiter announcements (20 sec)!
                  <ul>
                    <li>Facebook: <a href="https://www.facebook.com/startupfairla/">@startupfair.la</a></li>
                    <li>Instagram: <a href="https://www.instagram.com/startupfair.la/">@startupfair.la</a></li>
                  </ul>
                </li>
                <li>Get excited! (timeless)</li>
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
              `Company attendance at Startup Fair LA this year will cost a flat fee of $350. The recruiter fee is to cover our event hosting platform’s maintenance fees. All recruiters will receive the same platinum tier perks from previous years!`
            } 
            dividerPresent={false}
            dividerColor="transparent" 
            titleColor="black"
            textColor="black"
          />
          <TextSection
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
          />
          <div style={{width: "70%", marginLeft: "auto", marginRight: "auto", marginTop: "1rem", marginBottom: "1rem"}}>
            <div style={{width: "90%", marginLeft: "auto", marginRight: "auto", lineHeight: "175%", paddingBottom: "1.5rem"}}>
            You can find our Recruiter Deck <a href="https://tinyurl.com/StartupFair21">here</a>!<br />
            Interested? Please reach out to us at <a href="mailto:startupfairla@gmail.com">startupfairla@gmail.com</a>!
            </div>
          </div>
        </OpaqueSection>
        
        <SectionBreak />
        <Element name="faq" />
        <OpaqueSection>
          <BigSectionTitle>FAQs</BigSectionTitle>
          <SmallerSectionTitle>For Students:</SmallerSectionTitle>
            <TextSection
              id="different" 
              title="What's different this year?"
              text={
                `Through Tikkl, we are able to create a completely virtual streamlined career fair experience for both recruiters and students, all from the comfort of your own home! `
              } 
              dividerPresent={false}
              dividerColor="transparent" 
              titleColor="black"
              textColor="black"
            />
            <TextSection
              id="benefits" 
              title="What are the benefits?"
              text={
                `As students, you will have the opportunity to interact and connect with different startups to discuss career and learning opportunities. We will also be providing a resume book of all the attendees to the startups, along with the relevant professional contact information.`
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
                `There will be numerous startups from various industries and backgrounds -- all of which you will be able to access through the Tikkl platform.`
              } 
              dividerPresent={false}
              dividerColor="transparent" 
              titleColor="black"
              textColor="black"
            />
            <TextSection
              id="tikkl" 
              title="How to use Tikkl?"
              text={
                `You will need an account to participate in the event, which can be made in several easy steps. Furthermore, you will have to register for our event through here (hyperlink the sign-up forms)`
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
                `Please express your interest to startupfairla@gmail.com, we look forward to hearing from you and will send the registration details!`
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
                  Please contact us at <a href="mailto:startupfairla@gmail.com">startupfairla@gmail.com</a> for more details!
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
            initiative="Startup Fair" 
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
