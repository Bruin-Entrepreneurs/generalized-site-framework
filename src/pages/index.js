import React from "react"
import '../main.css'
import styled from 'styled-components'

import backgroundImage from '../assets/background.png'
import Navbar from '../components/navbar/Navbar';
import Title from '../components/Title';

const App = () => {
  const title = 'STARTUP LABS'
  const subtitle = 'BRUIN ENTREPRENEURS'
  const description = 'UCLA\'s Premier Student-Run Accelerator Program'
  const buttonText = 'uber for cbd shops isn\'t original'

  return (
    <BackgroundContainer>
      <ContentContainer>
        <Navbar />
        <Title titleText={title} subtitleText={subtitle} descriptionText={description} buttonText={buttonText} />
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