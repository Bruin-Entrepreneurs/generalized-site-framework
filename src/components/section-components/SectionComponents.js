import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// wrapper for a section
export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
`

// create purple divider line
export const SectionDivider = styled.div`
height: 4vh;
width: 50%;
float: left;
background: rgb(229,229,229);
// background: linear-gradient(90deg, transparent 0%, rgba(238,76,125,1) 100%);
background: ${props => props.dividerColor};
border-radius: 20px;
margin-bottom: 1rem;
margin-top: 5rem;
`

SectionDivider.propTypes = {
    dividerColor: PropTypes.string.isRequired
}

// section title component
export const TitleDiv = styled.div`
margin-top: 1vh;
margin-bottom: 3vh;
width: 100%;
font-size: 2.5rem;
font-weight: 900;
`

