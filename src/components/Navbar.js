import styled from 'styled-components'
import React, {useState, useEffect} from 'react';

const Navbar = ({ titleText, subtitleText }) => {
  return(
    <NavbarContainer>
      {titleText}
      {subtitleText}
    </NavbarContainer>
  )
}

export default Navbar;

const NavbarContainer = styled.div`
  background: purple;
  width: 100vw;
  height: 80px;
`