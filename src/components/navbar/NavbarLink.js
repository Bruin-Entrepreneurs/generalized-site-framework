import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

const NavbarLink = ({ href, title }) => {
    return (
        <LinkContainer>
            <Link to={href} smooth={true} duration={500}>
                <LinkElement>
                    {title}                
                </LinkElement>
            </Link>
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

const LinkElement = styled.div`
    color: #12283D;
    font-size: 1rem;    
    min-height: 10px;
    cursor: pointer;
`

export default NavbarLink;