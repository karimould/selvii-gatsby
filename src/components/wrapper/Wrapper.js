import React from 'react'
import styled from 'react-emotion'
import '../all.sass'


//Wrapper to set default css configs
export default ({ children }) => <Wrapper>{children}</Wrapper>

const Wrapper = styled('div')`
`