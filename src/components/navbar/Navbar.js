import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import NavbarLink from './NavbarLink';

const Navbar = (props) => {

  const mapPropsToNavItems = () => {
    return props.navItems.map((value, index) => {
      if (value.internal) {
        return <NavbarLink href={value.href} title={value.text} internal={value.internal} />
      } else {
        return <NavbarLink target="_blank" href={value.href} title={value.text} internal={value.internal} />
      }
    });
  }
  
  return(
    <NavbarContainer>
      <Logo src={props.logo} />
      { mapPropsToNavItems() }
    </NavbarContainer>
  )
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  navItems: PropTypes.array.isRequired
}

export default Navbar;

const Logo = styled.img`
  height: 8vh;
  width: 8vh;
  padding: 20px 3%;

  @media screen and (max-device-width: 480px) and (orientation:portrait) {
    height: 7vh;
    width: 7vh;
    padding-left: 40%;
    padding-right: 40%;
  }

  @media (max-width: 580px) {
    height: 7vh;
    width: 7vh;
    padding-left: 40%;
    padding-right: 40%;
  }
`

const NavbarContainer = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 1rem;

  @media screen and (max-device-width: 480px) and (orientation:portrait) {
    justify-content: center;
    padding-left: auto;
    padding-right: auto;
  }

  @media (max-width: 800px) {
    justify-content: center;
    padding-left: auto;
    padding-right: auto;
  }
`