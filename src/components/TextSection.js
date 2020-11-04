import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as SectionComponents from './section-components/SectionComponents';

const TextSection = (props) => {
    return (
        <SectionComponents.SectionWrapper>
            <SectionComponents.SectionDivider dividerColor={props.dividerColor} />
            <TitleDiv>
                {props.title}
            </TitleDiv>
            <TextDiv>
                {props.text}
            </TextDiv>
        </SectionComponents.SectionWrapper>
    )

}

TextSection.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    dividerColor: PropTypes.string.isRequired
}


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



export default TextSection;