import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextSection = (props) => {
    return (
        <SectionWrapper>
            <SectionDivider />
            <TitleDiv>
                {props.title}
            </TitleDiv>
            <TextDiv>
                {props.text}
            </TextDiv>
        </SectionWrapper>
    )

}



const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
`

const SectionDivider = styled.div`
    height: 4vh;
    width: 50%;
    float: left;
    background: rgb(229,229,229);
    background: linear-gradient(90deg, transparent 0%, rgba(238,76,125,1) 100%);
    border-radius: 20px;
    margin-bottom: 1rem;
`



const TitleDiv = styled.div`
    margin-top: 1vh;
    margin-bottom: 3vh;
    width: 100%;
    font-size: 2.5rem;
    font-weight: 900;
`

const TextDiv = styled.div`
    width: 100%;
    font-size: 1.2rem;
    line-height: 250%;
`

TextSection.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default TextSection;