import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NavbarLink = ({ href, title }) => {
    return (
        <LinkContainer>
            <LinkElement href={href} >                
                {title}                
            </LinkElement>
        </LinkContainer>
    );
}

NavbarLink.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50%;
    padding: 20px 3%;
`

const LinkElement = styled.a`
    color: #12283D;
    font-size: 1rem;
    text-decoration: none;
    min-height: 10px;
`

export default NavbarLink;