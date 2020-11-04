import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as SectionComponents from './section-components/SectionComponents';

const BulletPointSection = (props) => {

    const BulletPoints = () => {
        console.log(props.points)
        return props.points.map((text, index) => 
            (<BulletPointItem key={index}>{text}</BulletPointItem>)
        );
    }

    return (
        <SectionComponents.SectionWrapper>
            <SectionComponents.SectionDivider dividerColor={props.dividerColor} />
            <SectionComponents.TitleDiv>
                {props.title}
            </SectionComponents.TitleDiv>
            <BulletPointWrapper>
                {BulletPoints()}
            </BulletPointWrapper>
        </SectionComponents.SectionWrapper>
    )
}

const BulletPointWrapper = styled.ul`
`

const BulletPointItem = styled.li`
    font-size: 2rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
`

BulletPointSection.propTypes = {
    title: PropTypes.string.isRequired,
    points: PropTypes.array.isRequired,
    dividerColor: PropTypes.string.isRequired
}

export default BulletPointSection;