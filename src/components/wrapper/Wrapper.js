import React from 'react'
import styled from '@emotion/styled'
import { css } from 'emotion'
import '../all.sass'
import Helmet from 'react-helmet'


//Wrapper to set default css configs
export default ({ children }) => <Wrapper>{children}</Wrapper>

const Wrapper = styled('div')`
`