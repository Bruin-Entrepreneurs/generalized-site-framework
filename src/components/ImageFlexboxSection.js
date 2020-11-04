import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as SectionComponents from './section-components/SectionComponents';

const ImageFlexboxSection = (props) => {
    const renderImages = () => {
        return props.images.map((value, index) => (
            <ImageItemBox key={index}>
                <ImageItem src={value} key={index}  />
            </ImageItemBox>
        ));
    }

    return (
        <SectionComponents.SectionWrapper>
            <SectionComponents.SectionDivider dividerColor={props.dividerColor} />
            <SectionComponents.TitleDiv>
                {props.title}
            </SectionComponents.TitleDiv>
            <ImageBoxWrapper>
                {renderImages()}
            </ImageBoxWrapper>
        </SectionComponents.SectionWrapper>            
    );

}

ImageFlexboxSection.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    height: PropTypes.string.isRequired, // specify the height and width of the images
    width: PropTypes.string.isRequired,
    mobileHeight: PropTypes.string.isRequired,
    mobileWidth: PropTypes.string.isRequired,
    dividerColor: PropTypes.string.isRequired
}

const ImageBoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    justify-content: space-evenly;
    
    @media(max-width: 800px) {
        flex-direction: column;
        justify-content: center;
    }
`

const ImageItemBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    height: ${props => props.height};
    width: ${props => props.width};
    @media(max-width: 800px) {
        width: ${props => props.mobileWidth};
        width: ${props => props.mobileWidth};
        margin: 0.5rem auto;        
    }
`

const ImageItem = styled.img`
    height: 90%;
    width: 90%;
    margin: auto auto;
    @media(max-width: 800px) {
        width: 100%;
        padding-top: 5rem;
    }
`

export default ImageFlexboxSection;