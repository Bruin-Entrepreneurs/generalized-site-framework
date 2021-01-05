import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as SectionComponents from './section-components/SectionComponents';

const TextSection = (props) => {
    return (
        <SectionComponents.SectionWrapper backgroundColor={props.backgroundColor}>
            {/* <SectionComponents.SectionDivider dividerColor={props.dividerColor} /> */}
            <TitleDiv titleColor={props.titleColor}>
                {props.title}
            </TitleDiv>
            <TextDiv textColor={props.textColor}>
                {props.text}
            </TextDiv>
        </SectionComponents.SectionWrapper>
    )

}

TextSection.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    titleColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    dividerColor: PropTypes.string.isRequired
}


const TitleDiv = styled.div`
    margin-top: 1vh;
    margin-bottom: 3vh;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    font-size: 2.5rem;
    font-weight: 900;
    color: ${props => props.titleColor};
`

const TextDiv = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.2rem;
    line-height: 175%;
    margin-bottom: 1rem;
    color: ${props => props.textColor};
`



export default TextSection;