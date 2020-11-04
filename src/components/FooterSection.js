import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as SectionComponents from './section-components/SectionComponents';

const FooterSection = (props) => {

    const mapToLines = (prop_list) => {
        return prop_list.map((value, index) => (
            <TextLine key={index}>{value}</TextLine>
        ));
    }



    return (
        <SectionComponents.SectionWrapper>
            <Row>
                <RowItemWrapper>
                    <InitiativeLogo src={props.logo} />
                </RowItemWrapper>
                <RowItemWrapper>
                    <Title color={props.titleTextColor} >{props.initiative}</Title>
                    { mapToLines(props.contributors) }
                </RowItemWrapper>
                <RowItemWrapper>
                    <Title color={props.titleTextColor} >Contact</Title>
                    { mapToLines(props.contacts) }
                </RowItemWrapper>
                <RowItemWrapper>
                    <Title color={props.titleTextColor} >Social Media</Title>
                    { mapToLines(props.socials) }
                </RowItemWrapper>
            </Row>
        </SectionComponents.SectionWrapper>
    )
}

FooterSection.propTypes = {
    logo: PropTypes.string.isRequired,
    initiative: PropTypes.string.isRequired,
    contributors: PropTypes.array.isRequired,
    contacts: PropTypes.array.isRequired,
    socials: PropTypes.array.isRequired,
    titleTextColor: PropTypes.array.isRequired
}

const Row = styled.div`
    margin-top: 30vh;
    height: 20vh;
    width: 100%;
    display: flex;
    flex-direction: row;

    @media(max-width: 800px) {
        flex-direction: column;
    }
`

const RowItemWrapper = styled.div`
    width: 25%;
    height: 100%;
    @media(max-width: 800px) {
        width: 100%;
        height: auto;
        text-align: center;
        font-size: 2rem;
    }
`

const InitiativeLogo = styled.img`    
`

//#EE4C7D;
const Title = styled.div`
    font-size: 1.8rem;
    color: ${props => props.color};
    @media(max-width: 800px) {
        font-size: 3rem;
    }
`

Title.propTypes = {
    color: PropTypes.string.isRequired
}

const TextLine = styled.div`
    font-size: .8rem;
    line-height: 250%;
    @media(max-width: 800px) {
        font-size: 1rem;
        word-break: break-all;
    }
`

export default FooterSection;