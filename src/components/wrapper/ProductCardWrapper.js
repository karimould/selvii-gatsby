import React, { Children } from 'react'
import styled from 'react-emotion'


export default ({ children }) => <Wrapper>{children}</Wrapper>


const Wrapper = styled('div')`
  padding-top: 100px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  
  @media (max-width: 500px) {
    padding-left: 25px;
    padding-right: 25px;
  }
`