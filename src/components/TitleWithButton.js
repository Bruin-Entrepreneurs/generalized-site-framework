import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const TitleWithButton = (props) => {
  return(
    <TitleContainer>
      <Row style={{paddingTop: "10vh"}}>
        <PageOffset />
        <TitleTextContainer color={props.titleColor} >
          {props.titleText}
        </TitleTextContainer>      
      </Row>
      <Row>
        <PageOffset />
        <SubtitleTextContainer color={props.subtitleColor} >
          {props.subtitleText}
        </SubtitleTextContainer>
      </Row>
      <Row>
        <PageOffset />
        <DescriptionContainer>
          {props.descriptionText}
        </DescriptionContainer>
      </Row>
      <Row>
        <PageOffset />
        <SubmitButtonContainer action="#">
          <SubmitButton type="submit" value={props.buttonText} color={props.buttonTextColor} backgroundColor={props.buttonColor} />
        </SubmitButtonContainer>
      </Row>
    </TitleContainer>
  )
}

TitleWithButton.propTypes = {
  titleText: PropTypes.string.isRequired,
  subtitleText: PropTypes.string.isRequired,
  descriptionText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  titleColor: PropTypes.string.isRequired,
  subtitleColor: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  buttonTextColor: PropTypes.string.isRequired
}

export default TitleWithButton;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
const PageOffset = styled.div`
  width: 30vw;
  @media (max-width: 800px) {
    width: 22vw;
  }
  @media (max-width: 600px) {
    width: 10vw;
  }

  @media screen and (max-device-width: 480px) and (orientation:portrait) {
    width: 10vw;
  }
`


const TitleContainer = styled.div`
  width: 100vw;
  height: 80vh;
  font-weight: 900;
`

// #EE4C7D
const TitleTextContainer = styled.div`
  font-size: 6rem;
  color: ${props => props.color};
  font-family: 'Barlow Semi Condensed';
`

TitleTextContainer.propTypes = {
  color: PropTypes.string.isRequired
}

// #ED9CB5
const SubtitleTextContainer = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  color: ${props => props.color};
`

SubtitleTextContainer.propTypes = {
  color: PropTypes.string.isRequired
}

const DescriptionContainer = styled.div`
  font-size: 1.5rem;
  color: black;
  padding-top: 1vh;
`

const SubmitButtonContainer = styled.form`
  padding-top: 5vh;
  
`
// bg: #EE4C7D
// color: #EDEDEE

const SubmitButton = styled.input`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  border-style: hidden;
  border-radius: 3rem;  
  height: 6vh;
  width: 40vw;
  @media (max-width: 600px) {
    width: 60vw;
  }

  @media screen and (max-device-width: 480px) and (orientation:portrait) {
    width: 60vw;
  }
`

SubmitButton.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
}

