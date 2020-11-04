import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as SectionComponents from './section-components/SectionComponents';

const CardSection = (props) => {
    const renderCards = () => {
        return props.cards.map((value, index) => (
            <Card key={index}>
                <CardImage src={value.image}/>
                <CardTitle>{value.title}</CardTitle>
                <CardSubtitle>{value.subtitle}</CardSubtitle>
            </Card>
        ));
    }

    return (
        <SectionComponents.SectionWrapper>
            <SectionComponents.SectionDivider />
            <SectionComponents.TitleDiv>
                {props.title}
            </SectionComponents.TitleDiv>
            <CardSectionWrapper>
                {renderCards()}
            </CardSectionWrapper>    
        </SectionComponents.SectionWrapper>
        
    )
}

const CardSectionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 2rem;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    height: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;

    @media(max-width: 1000px) {
        width: 50%;
    }
`

const CardImage = styled.img`
    margin-left: auto;
    margin-right: auto;

    @media(max-width: 500px) {
        width: 80%;
    }
`

const CardTitle = styled.div`
    margin-left: auto;
    margin-right: auto;
    font-size: 2rem;

    @media(max-width: 500px) {
        font-size: 1.5rem;
    }
`

const CardSubtitle = styled.div`
    margin-left: auto;
    margin-right: auto;
    font-size: 1.5rem;

    @media(max-width: 500px) {
        font-size: 1rem;
    }
`

CardSection.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,  // this is a card with properties: image, title, subtitle
}

export default CardSection;