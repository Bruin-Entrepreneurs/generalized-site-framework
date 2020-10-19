import styled from 'styled-components'
import React, {useState, useEffect} from 'react';

import NavbarLink from './NavbarLink';
import LogoPNG from '../../assets/be.png';

const Navbar = ({ titleText, subtitleText }) => {
  return(
    <NavbarContainer>
      {titleText}
      {subtitleText}
      <Logo src={LogoPNG} />
      <NavbarLink href="#" title="Program" />
      <NavbarLink href="#" title="Companies" />
      <NavbarLink href="#" title="Mentors & VCs" />
      <NavbarLink href="#" title="Partners" />
      <NavbarLink href="#" title="Application" />
    </NavbarContainer>
  )
}

export default Navbar;

const Logo = styled.img`
  height: 50%;
  padding: 20px 3%;
  @media (max-width: 580px) {
    height: 75%;
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

  @media (max-width: 580px) {
    justify-content: center;
    padding-left: auto;
    padding-right: auto;
  }
`