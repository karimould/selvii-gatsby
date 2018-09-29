import React from 'react'
import styled from 'react-emotion'
import '../all.sass'
import Helmet from 'react-helmet'


//Wrapper to set default css configs
export default ({ children }) => <Wrapper>{children}</Wrapper>

const Wrapper = styled('div')`
`