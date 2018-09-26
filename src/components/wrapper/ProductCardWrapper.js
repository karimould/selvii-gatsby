import React, { Children } from 'react'
import styled from 'react-emotion'


export default ({ children }) => <Wrapper>{children}</Wrapper>


const Wrapper = styled('div')`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 500px) {
    padding-left: 25px;
    padding-right: 25px;
  }

  @media (max-width: 321px) {
    padding-left: 25px;
    padding-right: 25px;
  }
`