import styled from 'styled-components'
import React, {useState, useEffect} from 'react';

const Title = ({ titleText, subtitleText }) => {
  return(
    <TitleContainer>
      {titleText}
      {subtitleText}
    </TitleContainer>
  )
}

export default Title;

const TitleContainer = styled.div`
  // background: green;
  width: 100vw;
  height: 100%;

`