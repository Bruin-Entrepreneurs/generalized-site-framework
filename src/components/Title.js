import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const Title = ({ titleText, subtitleText, descriptionText, buttonText }) => {
  return(
    <TitleContainer>
      <Row style={{paddingTop: "10vh"}}>
        <PageOffset />
        <TitleTextContainer>
          {titleText}
        </TitleTextContainer>      
      </Row>
      <Row>
        <PageOffset />
        <SubtitleTextContainer>
          {subtitleText}
        </SubtitleTextContainer>
      </Row>
      <Row>
        <PageOffset />
        <DescriptionContainer>
          {descriptionText}
        </DescriptionContainer>
      </Row>
      <Row>
        <PageOffset />
        <SubmitButtonContainer action="#">
          <SubmitButton type="submit" value={buttonText} />
        </SubmitButtonContainer>
      </Row>
    </TitleContainer>
  )
}

Title.propTypes = {
  titleText: PropTypes.string.isRequired,
  subtitleText: PropTypes.string.isRequired,
  descriptionText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
}

export default Title;

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

`

const Col = styled.div`
  display: flex;
  flex-direction: column;
`

const TitleContainer = styled.div`
  // background: green;
  width: 100vw;
  height: 80vh;
  font-weight: 900;
`

const TitleTextContainer = styled.div`
  font-size: 6rem;
  color: #EE4C7D;
  font-family: 'Barlow Semi Condensed';

  // @media (max-width: 500px) {
    // text-align: center;
  // }
`

const SubtitleTextContainer = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  color: #ED9CB5;
`

const DescriptionContainer = styled.div`
  font-size: 1.5rem;
  color: black;
  padding-top: 1vh;
`

const SubmitButtonContainer = styled.form`
  padding-top: 5vh;
  
`

const SubmitButton = styled.input`
  background-color: #EE4C7D;
  color: #EDEDEE;
  border-style: hidden;
  border-radius: 3rem;  
  height: 6vh;
  width: 40vw;
  @media (max-width: 600px) {
    width: 60vw;
  }

`

