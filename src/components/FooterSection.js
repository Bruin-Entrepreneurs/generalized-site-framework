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
    padding-top: 10vh;
    height: 20vh;
    width: 100%;
    display: flex;
    flex-direction: row;

    @media screen and (max-device-width: 480px) and (orientation:portrait) {
        height: auto;
        flex-direction: column;
    }

    @media(max-width: 1000px) {
        height: auto;
        flex-direction: column;
    }
`

const RowItemWrapper = styled.div`
    width: 25%;
    height: 100%;
    @media screen and (max-device-width: 480px) and (orientation:portrait) {
        width: 100%;
        height: auto;
        text-align: center;
        font-size: 2rem;
    }
    @media(max-width: 1000px) {
        width: 100%;
        height: auto;
        text-align: center;
        font-size: 2rem;
    }
`

const InitiativeLogo = styled.img`  
height: 100%;
`

//#EE4C7D;
const Title = styled.div`
    font-size: 1.8rem;
    color: ${props => props.color};

    @media screen and (max-device-width: 480px) and (orientation:portrait) {
        font-size: 3rem;
    }

    @media(max-width: 1000px) {
        font-size: 3rem;
    }
`

Title.propTypes = {
    color: PropTypes.string.isRequired
}

const TextLine = styled.div`
    font-size: .8rem;
    line-height: 250%;

    @media screen and (max-device-width: 480px) and (orientation:portrait) {
        font-size: 1rem;
        word-break: break-all;
    }

    @media(max-width: 1000px) {
        font-size: 1rem;
        word-break: break-all;
    }
`

export default FooterSection;