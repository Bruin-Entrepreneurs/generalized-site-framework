import React from "react"
import styled from 'styled-components'
import { Element } from 'react-scroll';
import Helmet from 'react-helmet';

import '../main.css'


import backgroundImage from '../assets/background.png'
import Navbar from '../components/navbar/Navbar';
import TitleWithButton from '../components/TitleWithButton';
import TextSection from '../components/TextSection';
import BulletPointSection from '../components/BulletPointSection';
import CardSection from '../components/CardSection';
import ImageFlexboxSection from '../components/ImageFlexboxSection';
import FooterSection from '../components/FooterSection';

// image assets for alumni
import DufflPic from '../assets/alumni/duffl.png';
import SikePic from '../assets/alumni/sike.png';
import CharipayPic from '../assets/alumni/charipay.png';
import PlayfullPic from '../assets/alumni/playfull.png';

// image assets for accelerators
import YCPic from '../assets/accelerator/yc.png';
import StartupPic from '../assets/accelerator/startup_ucla.png';
import AndersonPic from '../assets/accelerator/anderson.png';
import TechstarsPic from '../assets/accelerator/techstars.png';

// image assets for mentors
import Mentor1Pic from '../assets/mentors/mentor1.png';
import Mentor2Pic from '../assets/mentors/mentor2.png';
import Mentor3Pic from '../assets/mentors/mentor3.png';
import Mentor4Pic from '../assets/mentors/mentor4.png';
import Mentor5Pic from '../assets/mentors/mentor5.png';
import Mentor6Pic from '../assets/mentors/mentor6.png';
import Mentor7Pic from '../assets/mentors/mentor7.png';
import Mentor8Pic from '../assets/mentors/mentor8.png';
import Mentor9Pic from '../assets/mentors/mentor9.png';
import Mentor10Pic from '../assets/mentors/mentor10.png';
import Mentor11Pic from '../assets/mentors/mentor11.png';
import Mentor12Pic from '../assets/mentors/mentor12.png';
import Mentor13Pic from '../assets/mentors/mentor13.png';
import Mentor14Pic from '../assets/mentors/mentor14.png';

// image assets for partners
import UCLAPic from '../assets/partners/ucla.png';
import RingsPic from '../assets/partners/rings.png';
import StartupLogoPic from '../assets/partners/startup_ucla_logo.png';
import BEPic from '../assets/partners/be.png';

// SL logo asset
import SLLogoPic from '../assets/sl_logo.png';


const App = () => {

  const NavItems = [
    {text: "Students", href: "students", internal: true},
    {text: "Recruiters", href: "recruiters", internal: true},
    {text: "About Us", href: "about", internal: true},
    // {text: "Partners", href: "partners", internal: true},
    // {text: "Application", href: "https://form.jotform.com/93287031393156", internal: false},
  ]


  const title = 'STARTUP FAIR LA'
  const subtitle = 'BRUIN ENTREPRENEURS'
  const description = 'Connecting UCLA\'s best talent to the best startups in LA.'
  const buttonText = 'This is the date'
  const startupLabsDescription = "Startup Fair is a cool little thing that we do cuz we love startups."
 
  const bulletPoints = [
    "Mentor-Mentee Pairings",
    "Fireside Chats",
    "Virtual Workshops",
    "VC Introductions",
    "T1 Accelerator Prep",
    "UCLA Alumni Network",
    "Funding Opportunities"
  ];

  const alumni = [
    {title: 'Duffl', subtitle: 'Connecting video game players with real life awards.', image: DufflPic, link: "https://playfull.com/"},
    {title: 'Sike Insights', subtitle: 'Utilizing cutting edge AI and psychology research to bridge the gaps between individuals on remote teams.', image: SikePic, link: "https://sikeinsights.com/"},
    {title: 'Charipay', subtitle: 'Developing a hyperlocalized platform on which students can purchase snacks and goods.', image: CharipayPic, link: "https://www.duffl.com/"},
    {title: 'Playfull', subtitle: 'Building a more conducive platform for charitable actions.', image: PlayfullPic, link: "www.charipay.org"}
  ]

  const accelerators = [
    YCPic,
    StartupPic,
    AndersonPic,
    TechstarsPic
  ]

  const mentors = [
    {title: 'Akiva Bamberger', subtitle: 'CEO of TTYL', image: Mentor1Pic},
    {title: 'Cisco Arias', subtitle: 'SWE at SC', image: Mentor2Pic},
    {title: 'Amira Polack', subtitle: 'Founder of Struct Club', image: Mentor3Pic},
    {title: 'Anthony Lai', subtitle: 'CEO of TabBlaze', image: Mentor4Pic},
    {title: 'Greg Blackman', subtitle: 'Co-founder of Media Scout', image: Mentor5Pic},
    {title: 'Mark Kapczynski', subtitle: 'CMO of Gooten', image: Mentor6Pic},
    {title: 'Matthew Arevalo', subtitle: 'Co-founder of Pinfinity', image: Mentor7Pic},
    {title: 'Reyhaneh Fathieh', subtitle: 'Co-founder of Media Scout', image: Mentor8Pic},
    {title: 'Theo Lee', subtitle: 'CEO of KPOP Foods', image: Mentor9Pic},
    {title: 'David Meister', subtitle: '18 Ventures', image: Mentor10Pic},
    {title: 'Thea Knobel', subtitle: 'Type One Ventures', image: Mentor11Pic},
    {title: 'Sunny Singh', subtitle: 'Tech Coast Angels', image: Mentor12Pic},
    {title: 'Gefen Skolnick', subtitle: 'Contrary Capital', image: Mentor13Pic},
    {title: 'Anita Ilango', subtitle: 'Contrary Capital', image: Mentor14Pic},
  ]

  const partners = [
    UCLAPic,
    RingsPic,
    StartupLogoPic,
    BEPic     
  ]

  const contributors = [
    "Directed by Paolo Shamoon",
    "Designed by Natasha Puthukudy",
    "Built by Collin Prince"
  ]

  const contacts = [
    "partnerships@bruinentrepreneurs.org"
  ]

  const socials = [
    "Instagram: @startuplabs.ucla",
    "Facebook: @startuplabs"
  ]

  

  return (
    <BackgroundContainer>
      <Helmet
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: SLLogoPic }
        ]}
      />
      <ContentContainer>
        <Navbar 
          logo={BEPic}
          navItems={NavItems}
        />
        <TitleWithButton 
          titleText={title} 
          subtitleText={subtitle} 
          descriptionText={description} 
          buttonText={buttonText} 
          titleColor="#EE4C7D"
          subtitleColor="#ED9CB5"
          buttonColor="#EE4C7D"
          buttonTextColor="#EDEDEE"
        />
        <Element name="students" />
        <TextSection 
          id="program" 
          title="What is Startup Labs?"
          text={startupLabsDescription} 
          dividerColor="linear-gradient(90deg, transparent 0%, rgba(238,76,125,1) 100%)" 
        />        
        <BulletPointSection 
          title="Program Details" 
          points={bulletPoints} 
          dividerColor="linear-gradient(90deg, transparent 0%, rgba(238,76,125,1) 100%)" 
        />
        <Element 
          name="recruiters" 
        />
        <CardSection 
          id="companies" 
          title="Notable Alumni" 
          cards={alumni}
          dividerColor="linear-gradient(90deg, transparent 0%, rgba(238,76,125,1) 100%)"  
        />        
        <ImageFlexboxSection 
          title="Where Our Companies Go" 
          height="20vh" width="50%" 
          mobileHeight="12vh" 
          mobileWidth="50%"
          dividerColor="linear-gradient(90deg, transparent 0%, rgba(238,76,125,1) 100%)"  
          images={accelerators} 
        />
        <Element name="about" />        
        <CardSection 
          id="mentors" 
          title="Mentors and VCs" 
          cards={mentors}
          dividerColor="linear-gradient(90deg, transparent 0%, rgba(238,76,125,1) 100%)" 
        />
        <Element 
          name="partners" 
        />
        <ImageFlexboxSection 
          id="partners" 
          title="Partners" 
          height="16vh" 
          width="25%" 
          mobileHeight="12vh" 
          mobileWidth="50%"
          dividerColor="linear-gradient(90deg, transparent 0%, rgba(238,76,125,1) 100%)"  
          images={partners} 
        />
        <FooterSection 
          logo={SLLogoPic} 
          initiative="Startup Labs" 
          contributors={contributors} 
          contacts={contacts} 
          socials={socials}
          titleTextColor="#EE4C7D"
        />
      </ContentContainer>
    </BackgroundContainer>
  )
}

/* CSS hack for getting div height to adjust to the height 
of the background. For startup labs, the ratio is: 3.7618 height/width */ 
const BackgroundContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 0;
  padding-top: 376.18%;
  background-size: contain;
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
`

export default App;